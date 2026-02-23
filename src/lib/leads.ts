import clientPromise from '@/src/lib/mongodb';

export interface Lead {
    name: string;
    email: string;
    phone: string;
    fundName?: string;
    amount?: number;
    message?: string;
    status: 'new' | 'contacted' | 'converted' | 'closed';
    createdAt: Date;
}

export async function createLead(lead: Omit<Lead, 'status' | 'createdAt'>): Promise<Lead> {
    const client = await clientPromise;
    const db = client.db();

    const newLead: Lead = {
        ...lead,
        status: 'new',
        createdAt: new Date(),
    };

    await db.collection('leads').insertOne(newLead);
    return newLead;
}
