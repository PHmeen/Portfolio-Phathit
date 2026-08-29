import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import type { TranslationStructure } from '../data/translations';

interface EducationProps {
    t: TranslationStructure;
}

export const Education: React.FC<EducationProps> = ({ t }) => {
    return (
        <section id="education" className="py-24 px-4 sm:px-[9%] relative">
            <div className="text-center w-full mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/25 text-[var(--primary)] text-xs font-extrabold tracking-widest mb-3 shadow-[0_0_15px_var(--primary-glow)]">
                    <Briefcase size={14} />
                    <span>{t.education.badge}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                    {t.education.titlePart1} <span className="gradient-text">{t.education.titlePart2}</span>
                </h2>
                <p className="text-slate-400 text-base max-w-xl mx-auto">
                    {t.education.subtitle}
                </p>
            </div>

            <div className="max-w-3xl mx-auto relative pl-8 sm:pl-10 space-y-10 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[var(--primary)] before:via-[var(--accent)] before:to-[var(--secondary)]">
                <div className="glass-card rounded-3xl p-6 sm:p-8 relative">
                    <div className="absolute -left-[35px] sm:-left-[39px] top-8 w-5 h-5 rounded-full bg-[var(--primary)] border-4 border-[#070b14] shadow-[0_0_15px_var(--primary)]" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-block text-xs font-extrabold text-[var(--primary)] uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30">
                            {t.education.internBadge}
                        </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center">
                            <Briefcase size={18} />
                        </div>
                        <span>{t.education.internRole}</span>
                    </h3>

                    <h4 className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-1.5">
                        <MapPin size={14} className="text-[var(--primary)] shrink-0" />
                        <span>{t.education.internLoc}</span>
                    </h4>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {t.education.internDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">Next.js</span>
                        <span className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">TypeScript</span>
                        <span className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">Tailwind CSS</span>
                        <span className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">PHP / SQLite</span>
                    </div>
                </div>

                <div className="glass-card rounded-3xl p-6 sm:p-8 relative">
                    <div className="absolute -left-[35px] sm:-left-[39px] top-8 w-5 h-5 rounded-full bg-[var(--accent)] border-4 border-[#070b14] shadow-[0_0_15px_var(--accent)]" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-block text-xs font-extrabold text-[var(--accent)] uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
                            {t.education.eduBadge}
                        </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center">
                            <GraduationCap size={20} />
                        </div>
                        <span>{t.education.eduDegree}</span>
                    </h3>

                    <h4 className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-1.5">
                        <MapPin size={14} className="text-[var(--accent)] shrink-0" />
                        <span>{t.education.eduLoc}</span>
                    </h4>

                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-sm text-slate-200">
                        <span className="text-slate-400 font-semibold">{t.education.gpaxLabel}</span>
                        <span className="text-[var(--primary)] font-black text-lg">3.03</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
