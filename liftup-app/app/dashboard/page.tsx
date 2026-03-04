'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Student {
    id: number; name: string; role: string; university: string;
    type: 'Full-time' | 'Intern'; score: number; badge: string;
    badgeIcon: string; skills: string[]; communication: number;
    availability: string; photo: string;
}

const students: Student[] = [
    { id: 1, name: 'Alex Rivera', role: 'Full Stack Developer', university: 'MIT', type: 'Full-time', score: 8.7, badge: 'Top 10%', badgeIcon: 'verified', skills: ['React', 'Node.js', 'AWS', 'TypeScript'], communication: 4.5, availability: 'Jan 2024', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDDNq81g3im_M6Bph_9ey1RofhYVInuuh1M-IUfNE1HJBfvWhYg9avR6hWkj3l_5j5EdRYjaKCvtqcAK67krrspl-J9xFdR1ApJv5SdGZHh0qeP6RDiJIPHgs1I41A7ljo864GWHkbj3E7F3AtI4B8y4_FtqNpR_U-LWgDBz-6ldIYlWRU93GiUh1q0EHoWiuG_0i61xGbCXvZH1JajVanGsuNYi-fS_lfIFHY6rrHTh-Y-ht89rfULJKrJAlk6YW2Seu2ltZoUyTr' },
    { id: 2, name: 'Sarah Chen', role: 'AI Engineer', university: 'Stanford University', type: 'Intern', score: 9.2, badge: 'Top 5%', badgeIcon: 'workspace_premium', skills: ['Python', 'PyTorch', 'SQL', 'Kubernetes'], communication: 4.8, availability: 'Summer 2024', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYkOaq9HbfRTvqmNd9JDHaet5L4AOmqfovcTWPrl_qSQkO8CyXY70-4jXZvRw_ERhpJlBa50ALaSbQLCsIvGrOdobm-MgsrzzvXxSHF2MRNJbimyfTAURRIX9XQ6nUrGlxhIfhV-Yp5j1xwzDXYcrr-nQzr1HhfEi4Yunzt_s9AEcTE3mrN2XEkuO-mMLR2S2ZTDKBzhY-HWLJin4kbqMtm2ePD1kXpk6c9bQN2Cc7E5lky73EWOrL3DMNcoyrmynS5b0lELeg_W6d' },
    { id: 3, name: 'Jordan Smith', role: 'Backend Specialist', university: 'Georgia Tech', type: 'Full-time', score: 8.5, badge: 'Top 20%', badgeIcon: 'stars', skills: ['Go', 'Docker', 'Kafka', 'Postgres'], communication: 4.2, availability: 'Now', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAndxhpJVfrE9G0axiKk-8U6Djr_d03onVpcqqhGDjtDZiUO9wVet3XgeDKvSs6IZe-9raciA3tjYfkAu1Z8e4a5hbwN5lZ6Y7Y7o6P6HDsWq3jbA_Q4hQFyh9U9v-wvgLB2ebLU28VzmkEe65E6gYIh5TT4DDUBoGg9lwoPnIw8mBcMNNQryPhuun7demxEvlSlEPU3zzeddOtYeoLG3IpaPiro7jwSNlVgcqwYQXvGeZyahRlJOtmXmQAWxvw3Glphx0JZ8dHwIHg' },
    { id: 4, name: 'Maya Patel', role: 'Frontend Lead', university: 'UC Berkeley', type: 'Full-time', score: 8.9, badge: 'Top 10%', badgeIcon: 'verified', skills: ['Vue.js', 'Tailwind', 'Figma', 'Next.js'], communication: 4.9, availability: 'Mar 2024', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIzOR6gFwqeplv50ajgcML_o7_ESsQvMZojFAY7bLUJcAI13XEnxiAtxQIoB2vrwtfiWzEV4IuKdYxCjdNeURZ66gEGWNUeIEPqF-nF5TV_8QW06lrYdd4xPxzBOjSsdP9WzTFqenzsSlUgsq_itXmJ6nNtM1nPNMQbjCeBssBS6JlUkC1rXUlmL5MYh7RYpm8WHrVn7zVubEMwhyYxvUiz5HNjUQ6pBsmgPmhYsS66avh58JLBDFhqCRFNYCaOqc4FfydInEr1IY4H' },
    { id: 5, name: 'Liam Wilson', role: 'ML Engineer', university: 'Carnegie Mellon', type: 'Intern', score: 9.5, badge: 'Top 1%', badgeIcon: 'rocket_launch', skills: ['Scikit-learn', 'R', 'Java', 'Pandas'], communication: 4.6, availability: 'Summer 2024', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABk-3myTCMAWWDjS6tRZG2-U9zcBlZiAsxqJ5y6-KxWwi-WkXDic8TCYg993eAGfCZ7Q98UUStW7NVqOi2Ksmu-NbPgu5RMv2xyg7suo1MUbnE4mkKrwKgV7rApJQPZlY2KMr7n_OCwR2APfcq0BbSGj8XI4g5BjZrm6Ke2HHTo61exqqa3i4PU_Mq-ttilz-ZfNEwzykWbAvYcApnjs_yI0sugXwnyqizfK_pVMP4S0rkMB_piUat_Be3EgEWS31l1gIurqynjZJb' },
    { id: 6, name: 'Elena Rodriguez', role: 'DevOps Engineer', university: 'UT Austin', type: 'Full-time', score: 8.3, badge: 'Top 20%', badgeIcon: 'stars', skills: ['Terraform', 'Jenkins', 'Ansible', 'Azure'], communication: 4.4, availability: 'Dec 2023', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhNPe1VoQTX7LzaEdOJPnpAVRbgUK320qo06qdzxE4ve9BOV4mIlU3zT19HewuSpuZFZtd_x4kJkS5xhkk73dXKF2mbJrS8rlTXUWZmmjq-A6czm4lLWp3dtqP_rN-FTLtVTyNXAtiEYB91h8_qg33Z6p5clSIQMnBjs43T4Nxr5C0nsySJU1b8Hi-B7RwPMZZKgftqimoenARd-zTcLALOkEOrcFfX18J4oXf011TSK0uZyESp-snaxI61309BWi12Qch4XgZwgDH' },
];

export default function Dashboard() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    // Track company data loaded from registration
    const [companyData, setCompanyData] = useState({
        companyName: 'Acme Inc.',
        industry: 'Technology & Software',
        description: "We build next-generation tools to solve the planet's hardest problems using deep tech and AI."
    });

    useEffect(() => {
        setMounted(true);
        // Load company profile from local storage if the user just registered
        const savedProfile = localStorage.getItem('liftupCompanyProfile');
        if (savedProfile) {
            try {
                const parsed = JSON.parse(savedProfile);
                setCompanyData(prevData => ({
                    ...prevData,
                    ...parsed
                }));
            } catch (e) {
                console.error("Failed to parse company profile data");
            }
        }
    }, []);

    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [savedCandidates, setSavedCandidates] = useState<number[]>([]);
    const [activeTab, setActiveTab] = useState('Talent Directory');
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showCompanyProfile, setShowCompanyProfile] = useState(false);
    const [showInviteMembers, setShowInviteMembers] = useState(false);
    const [filters, setFilters] = useState({
        role: 'All Roles',
        tier: 'Top 10%, 20%',
        stack: 'React, Node, Python',
        availability: 'Intern, Full-time'
    });

    const toggleSave = (id: number) => {
        setSavedCandidates(prev =>
            prev.includes(id) ? prev.filter(studentId => studentId !== id) : [...prev, id]
        );
    };

    const filteredStudents = students.filter(student => {
        // Tab filtering
        if (activeTab === 'Saved Candidates' && !savedCandidates.includes(student.id)) return false;
        if (activeTab === 'Requests Sent' || activeTab === 'Hired Candidates') return false;

        // Search filtering
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchesSearch = student.name.toLowerCase().includes(query) ||
                student.university.toLowerCase().includes(query) ||
                student.role.toLowerCase().includes(query) ||
                student.skills.some(s => s.toLowerCase().includes(query));
            if (!matchesSearch) return false;
        }

        // Dropdown filtering
        if (filters.role !== 'All Roles') {
            if (filters.role === 'Frontend Developer' && !student.role.includes('Frontend') && !student.role.includes('Full Stack')) return false;
            if (filters.role === 'Backend Developer' && !student.role.includes('Backend') && !student.role.includes('Full Stack')) return false;
            if (filters.role === 'AI/ML Engineer' && !student.role.includes('AI') && !student.role.includes('ML')) return false;
        }

        if (filters.tier !== 'Top 10%, 20%') {
            if (filters.tier === 'Top 5%' && student.badge !== 'Top 5%') return false;
            if (filters.tier === 'Top 10%' && !['Top 5%', 'Top 10%'].includes(student.badge)) return false;
            // Top 20% would include top 5, 10, 20
        }

        if (filters.stack !== 'React, Node, Python') {
            if (filters.stack === 'React' && !student.skills.includes('React')) return false;
            if (filters.stack === 'Node.js' && !student.skills.includes('Node.js')) return false;
            if (filters.stack === 'Python' && !student.skills.includes('Python')) return false;
        }

        if (filters.availability !== 'Intern, Full-time') {
            const typeMatch = filters.availability === 'Internship' ? 'Intern' : 'Full-time';
            if (student.type !== typeMatch) return false;
        }

        return true;
    });

    return (
        <div className="bg-gray-50 min-h-screen">


            <div className="max-w-[1600px] mx-auto flex min-h-[calc(100vh-56px)]">
                {/* Sidebar */}
                <aside className="w-60 border-r border-gray-200 flex-shrink-0 bg-white hidden lg:flex flex-col">
                    {/* Brand tagline */}
                    <div className="px-5 pt-3 pb-4 border-b border-gray-100">
                        <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-0.5">The National Initiative</p>
                        <p className="text-xs font-bold text-gray-900">Founder Dashboard</p>
                    </div>

                    {/* Nav */}
                    <nav className="flex flex-col gap-0.5 px-3 py-4 flex-1">
                        {[
                            { icon: 'group', label: 'Talent Directory', active: activeTab === 'Talent Directory', count: students.length.toString() },
                            { icon: 'bookmark', label: 'Saved Candidates', active: activeTab === 'Saved Candidates', count: savedCandidates.length.toString() },
                            { icon: 'send', label: 'Requests Sent', active: activeTab === 'Requests Sent', count: '0' },
                            { icon: 'check_circle', label: 'Hired Candidates', active: activeTab === 'Hired Candidates', count: '0' },
                        ].map((item) => (
                            <button
                                key={item.label}
                                onClick={() => setActiveTab(item.label)}
                                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-sm font-medium transition-all w-full text-left text-[13px] ${item.active ? 'bg-green-900 text-white' : 'text-gray-500 hover:bg-green-50 hover:text-green-900'
                                    }`}
                            >
                                {item.active && <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-amber-400 rounded-r-full" />}
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{item.icon}</span>
                                <span className="flex-1">{item.label}</span>
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-sm ${item.active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
                                    }`}>{item.count}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto px-4 pb-4">
                        <div className="relative">
                            <button
                                onClick={() => setShowProfileMenu(!showProfileMenu)}
                                className="w-full relative flex items-center gap-3 bg-white border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] rounded-xl hover:border-slate-200 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] transition-all p-3 group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#0f172a] shadow-inner flex items-center justify-center flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center border border-white/5">
                                        <span className="text-white/90 font-medium text-[15px] tracking-tight">N</span>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0 text-left">
                                    <p className="text-[15px] font-bold text-slate-900 truncate tracking-tight">Acme Inc.</p>
                                    <p className="text-[10px] text-[#c2410c] font-bold uppercase tracking-widest mt-0.5">Pro Partner</p>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-slate-400 transition-colors text-[20px]">more_vert</span>
                            </button>

                            {/* Dropdown Menu Overlay */}
                            {showProfileMenu && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowProfileMenu(false)} />
                                    <div className="absolute bottom-full left-0 w-full mb-2 bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-xl overflow-hidden animate-in slide-in-from-bottom-2 fade-in duration-200 z-50">
                                        <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                                            <p className="text-xs text-slate-500 font-medium">Signed in as</p>
                                            <p className="text-sm font-bold text-slate-900 truncate mt-0.5">founder@acme.inc</p>
                                        </div>
                                        <div className="p-1.5 space-y-0.5">
                                            <button
                                                onClick={() => { setShowProfileMenu(false); setShowCompanyProfile(true); }}
                                                className="flex items-center gap-2.5 w-full px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors text-left"
                                            >
                                                <span className="material-symbols-outlined text-[18px] text-slate-500">domain</span>
                                                Company Profile
                                            </button>
                                            <button
                                                onClick={() => { setShowProfileMenu(false); setShowInviteMembers(true); }}
                                                className="flex items-center gap-2.5 w-full px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors text-left"
                                            >
                                                <span className="material-symbols-outlined text-[18px] text-slate-500">group_add</span>
                                                Invite Members
                                            </button>
                                        </div>
                                        <div className="h-px bg-slate-100 w-full" />
                                        <div className="p-1.5">
                                            <button
                                                onClick={() => router.push('/')}
                                                className="flex items-center gap-2.5 w-full px-2.5 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors text-left"
                                            >
                                                <span className="material-symbols-outlined text-[18px] text-red-500/80">logout</span>
                                                Sign out
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </aside>

                {/* Main */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="mb-8 pb-8 border-b border-gray-200 text-center">
                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-700 mb-3">The National AI Initiative</p>
                        <h2 className="text-4xl font-black tracking-tighter text-gray-900 mb-3">Browse Top-Tier Talent</h2>
                    </div>

                    {/* Filters & Actions */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between gap-4">
                            <h3 className="text-sm font-bold text-gray-900">{filteredStudents.length} {filteredStudents.length === 1 ? 'Result' : 'Results'}</h3>
                            <div className="flex items-center gap-3">
                                <div className="relative w-80 max-w-full hidden sm:block">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
                                    <input
                                        className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-[#3b28cc] focus:ring-1 focus:ring-[#3b28cc] focus:outline-none transition-all placeholder:text-gray-400"
                                        placeholder="Search talent by name, skill, or university..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium border ${showFilters
                                        ? 'bg-blue-50 border-blue-200 text-[#3b28cc]'
                                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-base">tune</span>
                                    Filter
                                </button>
                            </div>
                        </div>

                        {showFilters && (
                            <div className="bg-white border border-gray-200 p-4 rounded-sm mt-4 flex flex-wrap gap-4 items-end animate-in slide-in-from-top-2 fade-in duration-200">
                                {[
                                    { label: 'Role', name: 'role', defaultVal: 'All Roles', options: ['Frontend Developer', 'Backend Developer', 'AI/ML Engineer'] },
                                    { label: 'Performance Tier', name: 'tier', defaultVal: 'Top 10%, 20%', options: ['Top 5%', 'Top 10%', 'Top 20%'] },
                                    { label: 'Tech Stack', name: 'stack', defaultVal: 'React, Node, Python', options: ['React', 'Node.js', 'Python'] },
                                    { label: 'Availability', name: 'availability', defaultVal: 'Intern, Full-time', options: ['Internship', 'Full-time'] },
                                ].map((f) => (
                                    <div key={f.label} className="flex-1 min-w-[160px]">
                                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5">{f.label}</label>
                                        <div className="relative">
                                            <select
                                                className="w-full bg-white border border-gray-200 rounded-sm text-sm appearance-none px-3 py-2 hover:border-green-300 focus:border-green-800 focus:outline-none transition-all"
                                                value={filters[f.name as keyof typeof filters]}
                                                onChange={(e) => setFilters(prev => ({ ...prev, [f.name]: e.target.value }))}
                                            >
                                                <option>{f.defaultVal}</option>
                                                {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                                            </select>
                                            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Cards Grid */}
                    {filteredStudents.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {filteredStudents.map((student) => (
                                <div key={student.id} className="bg-white border border-gray-100 rounded-xl hover:border-green-200 hover:shadow-md transition-all duration-300 shadow-sm flex flex-col h-full">
                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Top Profile Area */}
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100 flex-shrink-0 shadow-sm">
                                                <div className="w-full h-full bg-gray-50 bg-center" style={{ backgroundImage: `url('${student.photo}')`, backgroundSize: 'cover' }} />
                                            </div>
                                            <div className="flex-1 min-w-0 pt-0.5">
                                                <div className="flex justify-between items-start">
                                                    <h3 className="text-[15px] font-bold text-gray-900 truncate">{student.name}</h3>
                                                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider flex-shrink-0 ml-2 ${student.type === 'Intern' ? 'bg-amber-100/50 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                                                        {student.type}
                                                    </span>
                                                </div>
                                                <p className="text-[13px] text-gray-500 mt-0.5 truncate">{student.role}</p>
                                                <p className="text-[11px] text-green-800 font-medium mt-1 truncate">{student.university}</p>
                                            </div>
                                        </div>

                                        {/* Performance & Badge */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div>
                                                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Performance Score</p>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-[20px] font-black text-green-900 leading-none">{student.score}</span>
                                                    <span className="text-[10px] font-medium text-gray-400">/10</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Badge</p>
                                                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded flex-shrink-0">
                                                    <span className="material-symbols-outlined text-[12px]">{student.badgeIcon}</span>
                                                    {student.badge}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Technical Skills */}
                                        <div className="mb-6 flex-1">
                                            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Technical Skills</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {student.skills.map((skill) => (
                                                    <span key={skill} className="bg-gray-50 border border-gray-100 text-gray-600 px-2.5 py-1 rounded-md text-[10px] font-medium transition-colors hover:bg-gray-100">{skill}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Communication & Availability */}
                                        <div className="flex items-center justify-between mb-6 text-[10px] text-gray-500 font-medium">
                                            <div className="flex items-center gap-1.5 flex-1 min-w-0 pr-2">
                                                <span className="material-symbols-outlined text-amber-500 text-[14px] flex-shrink-0">star</span>
                                                <span className="font-bold text-gray-800 flex-shrink-0">{student.communication}</span>
                                                <span className="truncate">Communication</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 flex-shrink-0 text-right">
                                                <span className="material-symbols-outlined text-[14px] text-gray-400">schedule</span>
                                                <span>{student.availability}</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 mt-auto">
                                            <button
                                                onClick={() => setSelectedStudent(student)}
                                                className="flex-1 bg-green-900 text-white py-2.5 rounded-lg font-bold text-[13px] hover:bg-green-800 transition-all shadow-sm"
                                            >
                                                View Profile
                                            </button>
                                            <button
                                                onClick={() => toggleSave(student.id)}
                                                className={`w-11 flex items-center justify-center border rounded-lg transition-all ${savedCandidates.includes(student.id)
                                                    ? 'border-green-800 text-green-800 bg-green-50'
                                                    : 'border-gray-200 text-gray-400 hover:text-green-800 hover:border-green-800 hover:bg-green-50'
                                                    }`}
                                            >
                                                <span className={`${savedCandidates.includes(student.id) ? 'material-symbols-outlined icon-filled' : 'material-symbols-outlined'} text-[18px]`}>bookmark</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white border border-gray-200 rounded-sm">
                            <span className="material-symbols-outlined text-gray-300 text-5xl mb-4">search_off</span>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">No talent found</h3>
                            <p className="text-sm text-gray-500 max-w-sm mx-auto">We couldn't find any candidates matching your criteria. Try adjusting your filters or search term.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setFilters({ role: 'All Roles', tier: 'Top 10%, 20%', stack: 'React, Node, Python', availability: 'Intern, Full-time' });
                                }}
                                className="mt-6 px-4 py-2 bg-green-900 text-white rounded-sm text-sm font-medium hover:bg-green-800 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="mt-10 flex justify-center pb-8">
                        <nav className="flex items-center gap-1">
                            <button className="w-9 h-9 flex items-center justify-center rounded-sm border border-gray-200 hover:bg-green-50 hover:border-green-300 transition-all">
                                <span className="material-symbols-outlined text-base">chevron_left</span>
                            </button>
                            {[1, 2, 3].map((n) => (
                                <button key={n} className={`w-9 h-9 flex items-center justify-center rounded-sm text-sm font-bold transition-all ${n === 1 ? 'bg-green-900 text-white' : 'border border-gray-200 hover:bg-green-50 text-gray-600'}`}>
                                    {n}
                                </button>
                            ))}
                            <span className="text-gray-300 px-2">···</span>
                            <button className="w-9 h-9 flex items-center justify-center rounded-sm border border-gray-200 hover:bg-green-50 text-sm font-medium text-gray-600">12</button>
                            <button className="w-9 h-9 flex items-center justify-center rounded-sm border border-gray-200 hover:bg-green-50 hover:border-green-300 transition-all">
                                <span className="material-symbols-outlined text-base">chevron_right</span>
                            </button>
                        </nav>
                    </div>
                </main>
            </div>

            {/* Company Profile Modal Outline */}
            {showCompanyProfile && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all overflow-hidden" onClick={() => setShowCompanyProfile(false)}>
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-[640px] flex flex-col relative animate-in zoom-in-95 duration-200 overflow-hidden" onClick={e => e.stopPropagation()}>

                        {/* Header */}
                        <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100 bg-white">
                            <h2 className="text-xl font-black tracking-tight text-[#0f172a] flex items-center gap-2.5">
                                <span className="material-symbols-outlined text-[#64748b]">domain</span>
                                Company Profile
                            </h2>
                            <button onClick={() => setShowCompanyProfile(false)} className="w-8 h-8 flex items-center justify-center rounded-md text-[#64748b] hover:bg-slate-100 hover:text-[#0f172a] transition-colors">
                                <span className="material-symbols-outlined text-[20px] font-bold">close</span>
                            </button>
                        </div>

                        <div className="p-8 pb-10 flex-1 overflow-y-auto bg-white">
                            <div className="flex flex-col md:flex-row gap-10 items-start">

                                {/* Left Side: Avatar & Status */}
                                <div className="w-full md:w-[180px] flex flex-col items-center text-center flex-shrink-0 pt-2">
                                    <div className="w-32 h-32 rounded-xl bg-[#0f172a] shadow-sm flex items-center justify-center relative mb-4">
                                        <div className="w-24 h-24 rounded-full bg-[#1e293b] flex items-center justify-center border border-white/5">
                                            <span className="text-white/90 font-medium text-4xl tracking-tight uppercase">
                                                {companyData.companyName ? companyData.companyName.charAt(0) : 'A'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#c2410c] bg-white px-3 py-1 rounded-full border border-orange-100 mb-2.5">Pro Partner</div>
                                    <p className="text-sm text-[#475569]">Member since 2024</p>
                                </div>

                                {/* Right Side: Form Fields */}
                                <div className="w-full flex-1 space-y-6">
                                    {/* Company Name */}
                                    <div>
                                        <label className="block text-[11px] font-bold text-[#475569] mb-2 uppercase tracking-[0.06em]">Company Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Acme Inc."
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] transition-all text-sm font-medium text-[#0f172a]"
                                        />
                                    </div>

                                    {/* Industry */}
                                    <div>
                                        <label className="block text-[11px] font-bold text-[#475569] mb-2 uppercase tracking-[0.06em]">Industry</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] transition-all text-sm font-medium text-[#0f172a] appearance-none">
                                            <option>Technology & Software</option>
                                            <option>Finance & Fintech</option>
                                            <option>Healthcare</option>
                                            <option>Education</option>
                                        </select>
                                    </div>

                                    {/* Company Description */}
                                    <div>
                                        <label className="block text-[11px] font-bold text-[#475569] mb-2 uppercase tracking-[0.06em]">Company Description</label>
                                        <textarea
                                            rows={3}
                                            defaultValue="We build next-generation tools to solve the planet's hardest problems using deep tech and AI."
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] transition-all text-[13px] font-medium text-[#0f172a] resize-none leading-relaxed"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-[#f8fafc] border-t border-slate-100 flex justify-end items-center gap-4">
                            <button
                                onClick={() => setShowCompanyProfile(false)}
                                className="px-4 py-2 text-[13px] font-bold text-[#0f172a] hover:bg-slate-200/50 rounded-md transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => { setShowCompanyProfile(false); alert("Changes saved successfully!"); }}
                                className="px-5 py-2.5 bg-[#14532d] hover:bg-[#166534] text-white text-[13px] font-bold rounded-md shadow-sm transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Invite Members Modal */}
            {showInviteMembers && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all overflow-hidden" onClick={() => setShowInviteMembers(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col relative animate-in zoom-in-95 duration-200 overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div className="px-6 py-5 border-b border-slate-100 flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined text-[24px]">group_add</span>
                            </div>
                            <div className="pr-8">
                                <h2 className="text-lg font-bold text-slate-900 mb-0.5">Invite Team Members</h2>
                                <p className="text-sm text-slate-500 leading-relaxed">Send an email invitation to your team members so they can collaborate on hiring talent.</p>
                            </div>
                            <button onClick={() => setShowInviteMembers(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Email Addresses</label>
                                <textarea
                                    placeholder="colleague@acme.inc, hr@acme.inc..."
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all text-sm shadow-sm placeholder:text-slate-400"
                                />
                                <p className="text-xs text-slate-500 mt-2">Separate multiple email addresses with commas.</p>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Assign Role</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <label className="relative flex cursor-pointer rounded-xl border border-slate-200 bg-white p-4 shadow-sm focus:outline-none hover:border-green-400 hover:bg-green-50/50 has-[:checked]:border-green-600 has-[:checked]:bg-green-50/50 has-[:checked]:ring-1 has-[:checked]:ring-green-600 transition-all text-left">
                                        <input type="radio" name="invite-role" value="admin" className="sr-only" />
                                        <div className="flex w-full items-center justify-center">
                                            <div className="flex-1">
                                                <p className="font-bold text-slate-900 text-sm mb-1">Company Admin</p>
                                                <p className="text-xs text-slate-500">Can manage billing, settings, and invite others.</p>
                                            </div>
                                            <span className="material-symbols-outlined text-green-600 ml-2 hidden !has-[:checked]:block">check_circle</span>
                                        </div>
                                    </label>

                                    <label className="relative flex cursor-pointer rounded-xl border border-slate-200 bg-white p-4 shadow-sm focus:outline-none hover:border-green-400 hover:bg-green-50/50 has-[:checked]:border-green-600 has-[:checked]:bg-green-50/50 has-[:checked]:ring-1 has-[:checked]:ring-green-600 transition-all text-left">
                                        <input type="radio" name="invite-role" value="member" className="sr-only" defaultChecked />
                                        <div className="flex w-full items-center justify-center">
                                            <div className="flex-1">
                                                <p className="font-bold text-slate-900 text-sm mb-1">Recruiter</p>
                                                <p className="text-xs text-slate-500">Can search talent, view profiles, and connect.</p>
                                            </div>
                                            <span className="material-symbols-outlined text-green-600 ml-2 hidden !has-[:checked]:block">check_circle</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                            <button onClick={() => setShowInviteMembers(false)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-colors">Cancel</button>
                            <button onClick={() => { setShowInviteMembers(false); alert("Invitations sent successfully!"); }} className="px-6 py-2.5 bg-green-900 hover:bg-green-800 text-white text-sm font-bold rounded-lg shadow-sm flex items-center gap-2 transition-colors">
                                Send Invites
                                <span className="material-symbols-outlined text-[18px]">send</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Profile Modal Overlay */}
            {selectedStudent && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 lg:p-16 bg-gray-900/60 backdrop-blur-sm transition-all overflow-hidden" onClick={() => setSelectedStudent(null)}>
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>

                        <button onClick={() => setSelectedStudent(null)} className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 text-gray-700 hover:bg-black/20 hover:text-gray-900 transition-all">
                            <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>

                        <div className="overflow-y-auto flex-1 pb-8">
                            {/* Profile Hero section from profile/page.tsx */}
                            <div className="bg-white">
                                <div className="h-32 xl:h-40 relative bg-gradient-to-r from-green-50 to-amber-50">
                                    <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(to right, #14532d, #16a34a, #d97706, #b45309)' }} />
                                    <div className="absolute -bottom-10 left-8 border-4 border-white shadow-sm rounded-full overflow-hidden">
                                        <div className="w-24 h-24 lg:w-28 lg:h-28 bg-cover bg-center" style={{ backgroundImage: `url('${selectedStudent.photo}')` }} />
                                    </div>
                                </div>

                                <div className="pt-14 pb-6 px-8 flex flex-col md:flex-row justify-between items-end gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1.5">
                                            <h2 className="text-2xl lg:text-3xl font-black tracking-tighter text-gray-900">{selectedStudent.name}</h2>
                                            {selectedStudent.badge === 'Top 1%' && <span className="material-symbols-outlined text-amber-500 fill-current">stars</span>}
                                        </div>
                                        <p className="text-[15px] text-gray-500 font-medium mb-3">{selectedStudent.role}</p>
                                        <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">school</span>{selectedStudent.university}</div>
                                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">work</span>{selectedStudent.type}</div>
                                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">schedule</span>Available {selectedStudent.availability}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 w-full md:w-auto">
                                        <button
                                            onClick={() => toggleSave(selectedStudent.id)}
                                            className={`flex-1 md:flex-none px-6 py-3 font-bold text-xs rounded-lg border transition-all uppercase tracking-wider flex items-center justify-center gap-2 ${savedCandidates.includes(selectedStudent.id) ? 'bg-green-50 border-green-800 text-green-800 hover:bg-green-100' : 'bg-white text-gray-900 border-gray-200 hover:border-green-300 hover:bg-gray-50'}`}
                                        >
                                            <span className={`material-symbols-outlined text-[16px] ${savedCandidates.includes(selectedStudent.id) ? 'icon-filled' : ''}`}>bookmark</span>
                                            {savedCandidates.includes(selectedStudent.id) ? 'Saved' : 'Save'}
                                        </button>
                                        <button className="flex-1 md:flex-none px-6 py-3 bg-green-900 text-white font-bold text-xs rounded-lg shadow-sm hover:bg-green-800 transition-all uppercase tracking-wider flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-[16px]">mail</span>
                                            Connect
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 border-y border-gray-100 divide-x divide-gray-100">
                                    {[
                                        { val: selectedStudent.score.toString(), label: 'Overall Score', highlight: true },
                                        { val: (selectedStudent.score + 0.3).toFixed(1), label: 'Technical' },
                                        { val: selectedStudent.communication.toString(), label: 'Communication' },
                                        { val: (selectedStudent.score - 0.2).toFixed(1), label: 'Leadership' },
                                    ].map(({ val, label, highlight }) => (
                                        <div key={label} className="p-5 text-center bg-gray-50/20">
                                            <p className={`text-3xl font-black tracking-tighter ${highlight ? 'text-green-900' : 'text-gray-900'}`}>{val}</p>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-gray-100 bg-gray-50/50">
                                <div className="lg:col-span-2 space-y-6">
                                    <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                        <h3 className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-amber-700 text-base">person</span>
                                            Professional Summary
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Ambitious {selectedStudent.role} specializing in modern development stacks. Successfully completed 4 enterprise-grade sprint simulations at LiftUp, demonstrating proficiency in scalable architecture and agile methodologies. Passionate about building performance-driven applications and solving complex challenges.
                                        </p>
                                    </section>

                                    <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                        <h3 className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-5 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-amber-700 text-base">code</span>
                                            Technical Stack
                                        </h3>
                                        <div>
                                            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Core Skills Tested</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedStudent.skills.map((s) => (
                                                    <span key={s} className="px-3 py-1.5 bg-green-900 text-white rounded-lg text-xs font-bold shadow-sm">{s}</span>
                                                ))}
                                                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold">+ 4 more</span>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div className="space-y-6">
                                    <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                        <h3 className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-5">Simulation Metrics</h3>
                                        <div className="space-y-4">
                                            {[
                                                { label: 'Sprint Discipline', pct: 95 },
                                                { label: 'Task Completion', pct: 92 },
                                                { label: 'Deadline Adherence', pct: 100 },
                                            ].map(({ label, pct }) => (
                                                <div key={label}>
                                                    <div className="flex justify-between text-[11px] font-bold mb-1.5 text-gray-700"><span>{label}</span><span>{pct}%</span></div>
                                                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct === 100 ? '#b45309' : '#166534' }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                        <h3 className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-4">Feedback Snippet</h3>
                                        <div className="p-4 bg-green-50 rounded-lg text-[13px] text-green-900 font-medium leading-relaxed border-l-2 border-green-800">
                                            &ldquo;{selectedStudent.name.split(' ')[0]} consistently takes initiative during sprint roadblocks. Their ability to translate technical jargon for stakeholders is exceptional.&rdquo;
                                            <div className="mt-3 font-bold text-[10px] uppercase tracking-wider text-green-800 opacity-70">— Lead Evaluator, TechSim</div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
