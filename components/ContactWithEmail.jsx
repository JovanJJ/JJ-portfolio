'use client';

import { useState } from 'react';
import { submitContactForm } from '@/public/lib/actions';

export default function ContactWithEmail() {
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage('');

        const formData = new FormData(e.target);

        try {
            const res = await submitContactForm(formData);
            setMessage(res.message);
            if (res.success) {
                e.target.reset();
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (

        <div className="w-full flex flex-col items-center justify-center  max-w-xl text-gray-100 rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden mx-auto">

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100 mb-3 relative z-10">Contact Me</h1>
            <p className="text-gray-100 mb-8 relative z-10 text-center">
                Have a project in mind? Let’s talk. I’m available for work and collaborations.

            </p>

            {message && (
                <div className={`p-4 rounded-xl mb-6 font-medium animate-fade-in ${message.includes('successfully') ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative w-full z-10 text-black">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-100 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white outline-none transition-all duration-300"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-100 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white outline-none transition-all duration-300"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-100 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white outline-none transition-all duration-300 resize-y"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 active:scale-[0.98] ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </span>
                    ) : 'Send Message'}
                </button>
            </form>
        </div>

    );
}
