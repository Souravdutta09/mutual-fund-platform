'use client';

import { useState } from 'react';

type FieldErrors = {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
};

function validateField(name: string, value: string): string {
    switch (name) {
        case 'name': {
            if (!value.trim()) return 'Full name is required';
            if (value.trim().length < 2) return 'Name must be at least 2 characters';
            if (value.trim().length > 50) return 'Name must be less than 50 characters';
            if (!/^[a-zA-Z\s.]+$/.test(value.trim())) return 'Name should contain only letters, spaces, and dots';
            return '';
        }
        case 'email': {
            if (!value.trim()) return 'Email is required';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address';
            return '';
        }
        case 'phone': {
            if (!value.trim()) return 'Phone number is required';
            if (!/^\d+$/.test(value)) return 'Phone number should contain only digits';
            if (value.length !== 10) return 'Please enter a valid 10-digit phone number';
            return '';
        }
        case 'message': {
            if (value.length > 500) return 'Message must be less than 500 characters';
            return '';
        }
        default:
            return '';
    }
}

export default function EnquiryForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // For phone, only allow digits
        if (name === 'phone') {
            const digitsOnly = value.replace(/\D/g, '');
            setFormData(prev => ({ ...prev, phone: digitsOnly }));
            // Clear error on change if already touched
            if (touched[name]) {
                setFieldErrors(prev => ({ ...prev, phone: validateField('phone', digitsOnly) }));
            }
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));

        // Live-clear error as user types (only if field was already touched)
        if (touched[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setFieldErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const validateAll = (): boolean => {
        const errors: FieldErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            phone: validateField('phone', formData.phone),
            message: validateField('message', formData.message),
        };
        setFieldErrors(errors);
        setTouched({ name: true, email: true, phone: true, message: true });
        return !Object.values(errors).some(e => e);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateAll()) return;

        setStatus('loading');
        setErrorMessage('');

        try {
            const payload = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone,
                message: formData.message.trim() || undefined,
            };

            const res = await fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setFieldErrors({});
            setTouched({});
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center py-8 px-6">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300 text-base mb-1">Our advisor will contact you shortly.</p>
                <p className="text-gray-500 text-sm mb-6">We typically respond within 24 hours.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-semibold"
                >
                    Submit Another Enquiry
                </button>
            </div>
        );
    }

    const inputBase = "w-full px-4 py-2.5 bg-white/10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-white placeholder:text-gray-500";
    const getInputClass = (field: keyof FieldErrors) =>
        `${inputBase} ${fieldErrors[field] ? 'border-red-500/50' : 'border-white/15'}`;

    return (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                    className={getInputClass('name')}
                    maxLength={50}
                />
                {fieldErrors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                        </svg>
                        {fieldErrors.name}
                    </p>
                )}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1.5">
                        Email <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@example.com"
                        className={getInputClass('email')}
                    />
                    {fieldErrors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                            </svg>
                            {fieldErrors.email}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-1.5">
                        Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="9876543210"
                        className={getInputClass('phone')}
                        maxLength={10}
                    />
                    {fieldErrors.phone && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                            </svg>
                            {fieldErrors.phone}
                        </p>
                    )}
                </div>
            </div>

            {/* Message */}
            <div>
                <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
                        Message <span className="text-gray-500 font-normal">(optional)</span>
                    </label>
                    <span className={`text-xs ${formData.message.length > 500 ? 'text-red-400' : 'text-gray-500'}`}>
                        {formData.message.length} / 500
                    </span>
                </div>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={3}
                    placeholder="Tell us about your investment goals..."
                    className={`${getInputClass('message')} resize-none`}
                    maxLength={500}
                />
                {fieldErrors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                        </svg>
                        {fieldErrors.message}
                    </p>
                )}
            </div>

            {/* Error */}
            {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage}
                </div>
            )}

            {/* Submit */}
            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.01] disabled:scale-100 disabled:shadow-lg flex items-center justify-center gap-2"
            >
                {status === 'loading' ? (
                    <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                    </>
                ) : (
                    'Request Free Consultation'
                )}
            </button>

            <p className="text-center text-xs text-gray-500">
                By submitting, you agree to be contacted by our investment advisor.
            </p>
        </form>
    );
}
