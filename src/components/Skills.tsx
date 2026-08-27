// ==========================================================================
// SKILLS COMPONENT (ส่วนแสดงรายการทักษะความสามารถแยกตามหมวดหมู่)
// ==========================================================================

import { Zap, Laptop, Server, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
    // ฟังก์ชันคืนค่าไอคอนตามประเภทหมวดหมู่
    const getCategoryIcon = (iconName: string) => {
        switch (iconName) {
            case 'laptop':
                return <Laptop className="text-[#18f7b8]" size={22} />;
            case 'server':
                return <Server className="text-[#18f7b8]" size={22} />;
            case 'wrench':
                return <Wrench className="text-[#18f7b8]" size={22} />;
            default:
                return <Zap className="text-[#18f7b8]" size={22} />;
        }
    };

    return (
        <section id="skills" className="py-24 px-[9%]">
            {/* ส่วนหัวข้อ Technical Skills */}
            <div className="text-center w-full mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18f7b8]/10 border border-[#18f7b8]/25 text-[#18f7b8] text-xs font-bold tracking-widest mb-3 shadow-[0_0_15px_rgba(24,247,184,0.15)]">
                    <Zap size={14} />
                    <span>MY TECH STACK</span>
                </div>
                <h2 className="text-4xl font-extrabold text-white mb-3">
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <p className="text-slate-400 text-base max-w-xl mx-auto">
                    Technologies, Frameworks, and Tools I Work With
                </p>
            </div>

            {/* ตารางแสดงหมวดหมู่ทักษะ 3 คอลัมน์ (Frontend, Backend, Tools) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {portfolioData.skillCategories.map((category, idx) => (
                    <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col">
                        {/* หัวหมวดหมู่ */}
                        <div className="flex items-center gap-3 text-xl font-bold text-white mb-6 pb-4 border-b border-white/5">
                            {getCategoryIcon(category.icon)}
                            <span>{category.title}</span>
                        </div>

                        {/* รายการทักษะย่อย (Skill Badges) */}
                        <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-sm font-medium hover:border-[#18f7b8]/40 hover:bg-[#18f7b8]/10 hover:text-[#18f7b8] hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    {skill.iconUrl && (
                                        <img
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            className="w-4 h-4 object-contain"
                                            onError={(e) => (e.currentTarget.style.display = 'none')}
                                        />
                                    )}
                                    <span>{skill.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
