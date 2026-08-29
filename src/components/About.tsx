import { User, Mail, Phone, Calendar, Award, Copy } from 'lucide-react';
import type { TranslationStructure } from '../data/translations';

interface AboutProps {
    onCopy: (text: string, label: string) => void;
    t: TranslationStructure;
}

export const About: React.FC<AboutProps> = ({ onCopy, t }) => {
    return (
        <section id="about" className="py-24 px-4 sm:px-[9%] relative">
            <div className="text-center w-full mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/25 text-[var(--primary)] text-xs font-extrabold tracking-widest mb-3 shadow-[0_0_15px_var(--primary-glow)]">
                    <User size={14} />
                    <span>{t.about.badge}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                    {t.about.titlePart1} <span className="gradient-text">{t.about.titlePart2}</span>
                </h2>
                <p className="text-slate-400 text-base max-w-xl mx-auto">
                    {t.about.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="glass-card rounded-3xl p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/30 flex items-center justify-center">
                            <User size={22} />
                        </div>
                        <span>{t.about.generalTitle}</span>
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                            <span className="text-slate-400 font-medium text-sm">{t.about.nicknameLabel}</span>
                            <span className="text-white font-semibold text-base">{t.about.nicknameValue}</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                            <span className="text-slate-400 font-medium text-sm flex items-center gap-2">
                                <Award size={16} className="text-[var(--primary)]" /> {t.about.ageLabel}
                            </span>
                            <span className="text-white font-semibold text-base">{t.about.ageValue}</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                            <span className="text-slate-400 font-medium text-sm flex items-center gap-2">
                                <Calendar size={16} className="text-[var(--primary)]" /> {t.about.birthDateLabel}
                            </span>
                            <span className="text-white font-semibold text-base">{t.about.birthDateValue}</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5">
                            <span className="text-slate-400 font-medium text-sm">{t.about.statusLabel}</span>
                            <span className="text-[var(--primary)] font-semibold text-base">{t.about.statusValue}</span>
                        </div>
                    </div>
                </div>

                <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/30 flex items-center justify-center">
                                <Phone size={22} />
                            </div>
                            <span>{t.about.contactTitle}</span>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-[var(--primary)]/40 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t.about.emailLabel}</span>
                                        <a href="mailto:mean1940@gmail.com" className="text-white font-semibold text-sm sm:text-base hover:text-[var(--primary)] transition-colors">
                                            mean1940@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={() => onCopy('mean1940@gmail.com', t.about.emailLabel)}
                                    className="p-2.5 rounded-xl bg-white/5 hover:bg-[var(--primary)] hover:text-[#051410] text-slate-300 transition-all"
                                    title={t.about.copyTooltip}
                                >
                                    <Copy size={16} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-[var(--primary)]/40 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t.about.phoneLabel}</span>
                                        <a href="tel:0971590552" className="text-white font-semibold text-sm sm:text-base hover:text-[var(--primary)] transition-colors">
                                            097-159-0552
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={() => onCopy('0971590552', t.about.phoneLabel)}
                                    className="p-2.5 rounded-xl bg-white/5 hover:bg-[var(--primary)] hover:text-[#051410] text-slate-300 transition-all"
                                    title={t.about.copyTooltip}
                                >
                                    <Copy size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
