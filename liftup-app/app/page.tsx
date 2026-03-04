'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ApplyPage() {
  const router = useRouter();

  // Track company profile details for the dashboard
  const [profileData, setProfileData] = useState({
    companyName: '',
    industry: 'SaaS / Enterprise',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to local storage for the dashboard to use
    localStorage.setItem('liftupCompanyProfile', JSON.stringify(profileData));
    router.push('/submitted');
  };

  const inputCls = "w-full bg-white border border-gray-200 text-gray-900 rounded-sm px-4 py-3 text-sm transition-all hover:border-gray-400 focus:border-green-800 focus:outline-none focus:shadow-[0_0_0_1px_#14532d]";
  const selectCls = "w-full bg-white border border-gray-200 text-gray-900 rounded-sm px-4 py-3 text-sm transition-all hover:border-gray-400 focus:border-green-800 focus:outline-none appearance-none";
  const sectionLabelCls = "text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-4 pb-3 border-b border-gray-100 flex items-center gap-2";

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gray-50">

      <main className="w-full max-w-4xl px-6 py-14 lg:py-20">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-gray-200">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-4">Onboarding — Phase 01</p>
          <h2 className="text-5xl md:text-6xl font-black mb-5 leading-[1.05] tracking-tighter text-gray-900">
            Founder
            <br />
            <span className="text-green-900">Registration.</span>
          </h2>
          <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
            Join an elite network of high-growth companies. Our research-driven platform matches your specific technical needs with top-tier product talent.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Section 1: Company Information */}
          <section className="bg-white border border-gray-100 p-8 rounded-sm space-y-6">
            <div className={sectionLabelCls}>
              <span className="material-symbols-outlined text-amber-700 text-base">corporate_fare</span>
              Company Information
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Company Name</label>
                <input
                  className={inputCls}
                  placeholder="e.g. LiftUp Systems"
                  type="text"
                  value={profileData.companyName}
                  onChange={e => setProfileData({ ...profileData, companyName: e.target.value })}
                  required
                />
              </div>
              <div><label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Website URL</label><input className={inputCls} placeholder="e.g. yourcompany.com" type="text" /></div>
              <div><label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">LinkedIn Profile</label><input className={inputCls} placeholder="linkedin.com/company/..." type="text" /></div>
              <div><label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Founder Name</label><input className={inputCls} placeholder="Full Name" type="text" /></div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Designation</label>
                <div className="relative">
                  <select className={selectCls}>
                    <option>CEO / Founder</option><option>CTO</option><option>VP Engineering</option><option>Head of Product</option><option>Talent Acquisition Lead</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Work Email</label>
                <input className={inputCls} placeholder="name@company.com" type="email" />
                <p className="text-[11px] text-gray-400 mt-1.5 italic">Use your official work domain.</p>
              </div>
              <div><label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Phone Number</label><input className={inputCls} placeholder="+91 98765 43210" type="tel" /></div>
              <div><label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Location</label><input className={inputCls} placeholder="City, Country" type="text" /></div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Team Size</label>
                <div className="relative">
                  <select className={selectCls}><option>1-10 Employees</option><option>11-50 Employees</option><option>51-200 Employees</option><option>201-500 Employees</option><option>500+ Employees</option></select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Funding Stage</label>
                <div className="relative">
                  <select className={selectCls}><option>Bootstrapped</option><option>Pre-seed / Seed</option><option>Series A</option><option>Series B+</option><option>Public / Enterprise</option></select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Product & Business */}
          <section className="bg-white border border-gray-100 p-8 rounded-sm space-y-6">
            <div className={sectionLabelCls}>
              <span className="material-symbols-outlined text-amber-700 text-base">hub</span>
              Product &amp; Business
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Product Description</label>
              <textarea
                className={inputCls}
                placeholder="Briefly explain what you are building and why it matters..."
                rows={4}
                value={profileData.description}
                onChange={e => setProfileData({ ...profileData, description: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Industry</label>
                <div className="relative">
                  <select
                    className={selectCls}
                    value={profileData.industry}
                    onChange={e => setProfileData({ ...profileData, industry: e.target.value })}
                  >
                    <option>SaaS / Enterprise</option>
                    <option>Fintech</option>
                    <option>AI / Machine Learning</option>
                    <option>Healthtech</option>
                    <option>Web3 / Crypto</option>
                    <option>E-commerce</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Business Model</label>
                <div className="flex flex-wrap gap-5">
                  {['B2B', 'B2C', 'Marketplace'].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <input className="w-4 h-4 accent-green-800" name="biz_model" type="radio" />
                      <span className="text-sm text-gray-600 group-hover:text-green-900 transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Do you have paying customers?</label>
              <div className="flex flex-wrap gap-6">
                {['Yes, scaled', 'Yes, early adopters', 'In Beta / Pre-revenue'].map((o) => (
                  <label key={o} className="flex items-center gap-2 cursor-pointer group">
                    <input className="w-4 h-4 accent-green-800" name="paying" type="radio" />
                    <span className="text-sm text-gray-600 group-hover:text-green-900 transition-colors">{o}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Hiring Intent */}
          <section className="bg-white border border-gray-100 p-8 rounded-sm space-y-6">
            <div className={sectionLabelCls}>
              <span className="material-symbols-outlined text-amber-700 text-base">person_add</span>
              Hiring Intent
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Immediate Roles</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Frontend', 'Backend', 'Full Stack', 'UX/UI Design', 'DevOps', 'Product Mgmt'].map((role) => (
                    <label key={role} className="flex items-center gap-2.5 p-3 border border-gray-100 rounded-sm hover:border-green-300 hover:bg-green-50 transition-all cursor-pointer">
                      <input className="rounded-sm border-gray-300 accent-green-800" type="checkbox" />
                      <span className="text-xs font-medium text-gray-700">{role}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Engagement Type</label>
                <div className="grid grid-cols-1 gap-2">
                  {['Full-Time (Direct Hire)', 'Contract-to-Hire', 'Project Based'].map((t) => (
                    <label key={t} className="flex items-center gap-2.5 p-3 border border-gray-100 rounded-sm hover:border-green-300 hover:bg-green-50 transition-all cursor-pointer">
                      <input className="rounded-sm border-gray-300 accent-green-800" type="checkbox" />
                      <span className="text-xs font-medium text-gray-700">{t}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-gray-100">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Hiring Timeline</label>
                <div className="relative"><select className={selectCls}><option>Immediate (Within 2 weeks)</option><option>Next 30 Days</option><option>Planning Phase (30-90 days)</option></select><span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span></div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Expected Compensation</label>
                <input
                  type="text"
                  className={inputCls}
                  placeholder="e.g. ₹10L - ₹15L INR"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Work Mode</label>
              <div className="flex flex-wrap gap-6">
                {['Remote Only', 'Hybrid', 'On-site'].map((m) => (
                  <label key={m} className="flex items-center gap-2 cursor-pointer group">
                    <input className="w-4 h-4 accent-green-800" name="workmode" type="radio" />
                    <span className="text-sm text-gray-600 group-hover:text-green-900 transition-colors">{m}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Hiring Philosophy */}
          <section className="bg-white border border-gray-100 p-8 rounded-sm space-y-6">
            <div className={sectionLabelCls}>
              <span className="material-symbols-outlined text-amber-700 text-base">psychology</span>
              Hiring Philosophy
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Top Priorities (Select top 3)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['Speed of delivery', 'Culture Fit', 'Technical Depth', 'Product Ownership', 'Cost efficiency', 'Past Experience'].map((p) => (
                  <label key={p} className="flex items-center gap-2.5 p-3 border border-gray-100 rounded-sm hover:border-green-300 hover:bg-green-50 transition-all cursor-pointer">
                    <input className="rounded-sm border-gray-300 accent-green-800" type="checkbox" />
                    <span className="text-[11px] font-bold uppercase tracking-tight text-gray-700">{p}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Hired remote global talent before?</label>
              <div className="flex gap-6">
                {['Yes', 'No'].map((o) => (
                  <label key={o} className="flex items-center gap-2 cursor-pointer group">
                    <input className="w-4 h-4 accent-green-800" name="past_hire" type="radio" />
                    <span className="text-sm text-gray-600 group-hover:text-green-900 transition-colors">{o}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Biggest hiring challenge today?</label>
              <textarea className={inputCls} placeholder="Time to hire, quality of candidates, budget constraints..." rows={3} />
            </div>
          </section>

          {/* Section 5: Agreement */}
          <section className="bg-white border border-gray-100 p-8 rounded-sm space-y-4">
            <div className={sectionLabelCls}>
              <span className="material-symbols-outlined text-amber-700 text-base">verified_user</span>
              Agreement
            </div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input className="rounded-sm border-gray-300 accent-green-800 mt-0.5 flex-shrink-0" type="checkbox" />
              <span className="text-sm text-gray-600 leading-relaxed">
                I agree to the <a className="text-green-900 underline underline-offset-2" href="#">Terms of Service</a> and acknowledge that LiftUp&apos;s platform is designed for research-backed high-integrity hiring.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input className="rounded-sm border-gray-300 accent-green-800 mt-0.5 flex-shrink-0" type="checkbox" />
              <span className="text-sm text-gray-600 leading-relaxed">
                I consent to receive high-relevancy talent matching updates via the provided work email.
              </span>
            </label>
          </section>

          {/* CTA */}
          <div className="flex flex-col items-start pt-4">
            <button
              type="submit"
              className="px-10 py-4 bg-green-900 text-white rounded-sm font-bold text-sm uppercase tracking-[0.2em] hover:bg-green-800 active:scale-[0.98] transition-all flex items-center gap-3"
            >
              Apply as Hiring Partner
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
              End-to-end encrypted · Secure intake
            </p>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-10 mt-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="material-symbols-outlined text-base">security</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">End-to-End Encrypted</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-300">© 2024 LiftUp Ecosystem. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-green-900 transition-colors" href="#">Privacy Policy</a>
            <a className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-green-900 transition-colors" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
