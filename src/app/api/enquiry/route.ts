import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createLead } from '@/src/lib/leads';
import nodemailer from 'nodemailer';

const enquirySchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    phone: z.string().length(10, 'Phone must be exactly 10 digits').regex(/^\d{10}$/, 'Phone must contain only digits'),
    fundName: z.string().optional(),
    amount: z.number().positive().optional(),
    message: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const parsed = enquirySchema.parse(body);

        // ── 1. Send email notification (PRIMARY — must succeed) ──
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Consultation Request from ${parsed.name}`,
            html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #059669;">New Consultation Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${parsed.name}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${parsed.email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${parsed.phone}</td></tr>
              ${parsed.fundName ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Fund Interest</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${parsed.fundName}</td></tr>` : ''}
              ${parsed.amount ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Investment Amount</td><td style="padding: 8px; border-bottom: 1px solid #eee;">\u20B9${parsed.amount.toLocaleString('en-IN')}</td></tr>` : ''}
              ${parsed.message ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Message</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${parsed.message}</td></tr>` : ''}
            </table>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">This enquiry was received via the website.</p>
          </div>
        `,
        });

        // ── 2. Save lead to MongoDB (BEST-EFFORT — never blocks the response) ──
        let lead = null;
        try {
            lead = await createLead({
                name: parsed.name,
                email: parsed.email,
                phone: parsed.phone,
                fundName: parsed.fundName || undefined,
                amount: parsed.amount || undefined,
                message: parsed.message || undefined,
            });
        } catch (dbError) {
            // Log DB error but don't fail — email was already sent successfully
            console.error('Failed to save lead to MongoDB (email was sent):', dbError);
        }

        return NextResponse.json(
            { success: true, message: 'Enquiry submitted successfully', lead },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, message: 'Validation failed', errors: error.issues },
                { status: 400 }
            );
        }

        console.error('Enquiry submission error:', error);
        return NextResponse.json(
            { success: false, message: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
