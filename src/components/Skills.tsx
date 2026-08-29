import { Zap, Laptop, Server, Wrench, Code2, Lightbulb, TrendingUp, Users, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { TranslationStructure } from '../data/translations';

interface SkillsProps {
    t: TranslationStructure;
}

export const Skills: React.FC<SkillsProps> = ({ t }) => {
    const getCategoryIcon = (iconName: string) => {
        switch (iconName) {
            case 'laptop':
                return <Laptop className="text-[var(--primary)]" size={22} />;
            case 'server':
                return <Server className="text-[var(--primary)]" size={22} />;
            case 'wrench':
                return <Wrench className="text-[var(--primary)]" size={22} />;
            default:
                return <Zap className="text-[var(--primary)]" size={22} />;
        }
    };

    const getCategoryTitle = (idx: number, fallback: string) => {
        if (idx === 0) return t.skills.categoryFrontend;
        if (idx === 1) return t.skills.categoryBackend;
        if (idx === 2) return t.skills.categoryTools;
        return fallback;
    };

    const getSkillIcon = (skillName: string) => {
        const name = skillName.toLowerCase();
        if (name.includes('antigravity')) return <Terminal size={15} className="text-[var(--primary)] shrink-0" />;
        if (name.includes('design')) return <Lightbulb size={15} className="text-amber-400 shrink-0" />;
        if (name.includes('growth')) return <TrendingUp size={15} className="text-sky-400 shrink-0" />;
        if (name.includes('collaborat')) return <Users size={15} className="text-cyan-400 shrink-0" />;
        return <Code2 size={15} className="text-[var(--primary)] shrink-0" />;
    };

    return (
        <section id="skills" className="py-24 px-4 sm:px-[9%] relative">
            <div className="text-center w-full mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/25 text-[var(--primary)] text-xs font-extrabold tracking-widest mb-3 shadow-[0_0_15px_var(--primary-glow)]">
                    <Zap size={14} />
                    <span>{t.skills.badge}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                    {t.skills.titlePart1} <span className="gradient-text">{t.skills.titlePart2}</span>
                </h2>
                <p className="text-slate-400 text-base max-w-xl mx-auto">
                    {t.skills.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {portfolioData.skillCategories.map((category, idx) => (
                    <div key={idx} className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">
                                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center">
                                    {getCategoryIcon(category.icon)}
                                </div>
                                <span>{getCategoryTitle(idx, category.title)}</span>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/15 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                                    >
                                        {skill.iconUrl ? (
                                            <img
                                                src={skill.iconUrl}
                                                alt={skill.name}
                                                className="w-4 h-4 object-contain"
                                                onError={(e) => (e.currentTarget.style.display = 'none')}
                                            />
                                        ) : (
                                            getSkillIcon(skill.name)
                                        )}
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
