// ==========================================================================
// EDUCATION COMPONENT (ส่วนแสดงประวัติการศึกษาและประสบการณ์ฝึกงาน Timeline)
// ==========================================================================

import { Briefcase, GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
    return (
        <section id="education" className="py-24 px-[9%]">
            {/* ส่วนหัวข้อ Education & Experience */}
            <div className="text-center w-full mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18f7b8]/10 border border-[#18f7b8]/25 text-[#18f7b8] text-xs font-bold tracking-widest mb-3 shadow-[0_0_15px_rgba(24,247,184,0.15)]">
                    <Briefcase size={14} />
                    <span>MY JOURNEY</span>
                </div>
                <h2 className="text-4xl font-extrabold text-white mb-3">
                    Education & <span className="gradient-text">Experience</span>
                </h2>
                <p className="text-slate-400 text-base max-w-xl mx-auto">
                    My Academic Journey and Professional Internship
                </p>
            </div>

            {/* ส่วนโครงสร้าง Timeline แสดงประวัติ (Timeline Wrapper) */}
            <div className="max-w-3xl mx-auto relative pl-6 border-l-2 border-gradient-to-b border-[#18f7b8] space-y-8">
                {/* ประสบการณ์ฝึกงาน (Internship Experience Card) */}
                <div className="glass-card rounded-2xl p-6 relative">
                    <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-[#18f7b8] border-4 border-[#0a0f1d] shadow-[0_0_10px_#18f7b8]" />
                    <span className="inline-block text-xs font-bold text-[#18f7b8] uppercase tracking-wider mb-2">
                        Internship Experience
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                        <Briefcase size={18} className="text-[#18f7b8]" />
                        <span>Full Stack Developer Intern</span>
                    </h3>
                    <h4 className="text-sm font-medium text-slate-400 mb-4">
                        Southern Regional Science Park, Prince of Songkla University
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        Collaborated on developing web applications, designing both Frontend and Backend systems, and
                        continuously exploring new technologies.
                    </p>
                </div>

                {/* ประวัติการศึกษามหาวิทยาลัย (University Academic Card) */}
                <div className="glass-card rounded-2xl p-6 relative">
                    <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-[#38bdf8] border-4 border-[#0a0f1d] shadow-[0_0_10px_#38bdf8]" />
                    <span className="inline-block text-xs font-bold text-[#38bdf8] uppercase tracking-wider mb-2">
                        2021 - Present
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                        <GraduationCap size={20} className="text-[#38bdf8]" />
                        <span>Bachelor of Science in Information and Communication Technology (ICT)</span>
                    </h3>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">
                        Prince of Songkla University (Hat Yai Campus)
                    </h4>
                    <div className="inline-flex items-center gap-2 text-sm text-slate-300">
                        <span>GPAX:</span>
                        <span className="text-[#18f7b8] font-bold text-base">3.03</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
