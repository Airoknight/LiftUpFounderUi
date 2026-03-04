'use client';

import { useRouter } from 'next/navigation';

export default function Submitted() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
            <div className="max-w-lg w-full">
                {/* Heading */}
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-3">LiftUp Hiring Partners</p>
                <h1 className="text-5xl font-black tracking-tighter leading-[1.05] mb-4 text-gray-900">
                    Response<br />
                    <span className="text-green-900">Submitted.</span>
                </h1>
                <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm">
                    Thank you for applying as a LiftUp Hiring Partner. Our team will carefully review your application.
                </p>

                {/* Info blocks */}
                <div className="bg-white border border-gray-100 rounded-sm divide-y divide-gray-100 mb-10">
                    <div className="flex items-start gap-4 p-5">
                        <span className="material-symbols-outlined text-green-800 mt-0.5 text-xl">schedule</span>
                        <div>
                            <p className="text-sm font-bold text-gray-900 mb-0.5">Processing Time</p>
                            <p className="text-sm text-gray-500">Allow <strong className="text-gray-900">2–3 business days</strong> for our team to review your application.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5">
                        <span className="material-symbols-outlined text-green-800 mt-0.5 text-xl">mail</span>
                        <div>
                            <p className="text-sm font-bold text-gray-900 mb-0.5">Check Your Email</p>
                            <p className="text-sm text-gray-500">You&apos;ll receive an approval confirmation at your registered work email.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-5">
                        <span className="material-symbols-outlined text-green-800 mt-0.5 text-xl">verified</span>
                        <div>
                            <p className="text-sm font-bold text-gray-900 mb-0.5">After Approval</p>
                            <p className="text-sm text-gray-500">You&apos;ll gain full access to the LiftUp Talent Directory and hiring tools.</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <button
                    onClick={() => router.push('/dashboard')}
                    className="w-full py-4 bg-green-900 text-white rounded-sm font-bold text-sm uppercase tracking-[0.2em] hover:bg-green-800 active:scale-[0.99] transition-all flex items-center justify-center gap-3"
                >
                    <span className="material-symbols-outlined text-base">dashboard</span>
                    Go to Dashboard
                </button>

                <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 text-center">
                    LiftUp Ecosystem · Secure &amp; Encrypted
                </p>
            </div>
        </div>
    );
}
