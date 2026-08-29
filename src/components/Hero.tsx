import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Code, FileText, Mail, Phone, Sparkles, FolderCheck, Award, Briefcase } from 'lucide-react';
import type { TranslationStructure } from '../data/translations';
import { getAssetPath } from '../utils/assetPath';

interface HeroProps {
    onCopy: (text: string, label: string) => void;
    t: TranslationStructure;
}

export const Hero: React.FC<HeroProps> = ({ onCopy, t }) => {
    const el = useRef<HTMLSpanElement>(null);
    const typedRef = useRef<Typed | null>(null);

    useEffect(() => {
        if (!el.current) return;

        if (typedRef.current) {
            typedRef.current.destroy();
        }

        typedRef.current = new Typed(el.current, {
            strings: t.hero.typingStrings,
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1600,
            loop: true
        });

        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, [t.hero.typingStrings]);

    const stats = [
        { icon: Award, label: t.hero.stats.gpaxLabel, value: '3.03' },
        { icon: FolderCheck, label: t.hero.stats.projectsLabel, value: '3+' },
        { icon: Briefcase, label: t.hero.stats.internshipLabel, value: '1' }
    ];

    return (
        <section id="home" className="min-h-screen pt-36 pb-20 px-4 sm:px-[9%] flex flex-col items-center justify-center relative">
            <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
                <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-extrabold tracking-widest mb-6 shadow-[0_0_20px_var(--primary-glow)]">
                        <Sparkles size={14} className="animate-spin-slow" />
                        <span>{t.hero.roleBadge}</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight leading-none">
                        Phathit <span className="gradient-text">Nudam</span>
                    </h1>

                    <div className="text-xl sm:text-2xl font-medium text-slate-300 mb-6 min-h-[2.5rem] flex items-center">
                        <span>{t.hero.passionateAbout}&nbsp;</span>
                        <span ref={el} className="gradient-text font-bold"></span>
                    </div>

                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                        {t.hero.bio}
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[var(--primary)] text-[#051410] font-extrabold text-base shadow-[0_0_25px_var(--primary-glow)] hover:-translate-y-1 hover:shadow-[0_0_35px_var(--primary-glow)] transition-all duration-300"
                        >
                            <Code size={18} />
                            <span>{t.hero.exploreBtn}</span>
                        </a>
                        <a
                            href="Resume_Phathit.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/5 text-white font-bold text-base border border-white/15 hover:bg-white/15 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                        >
                            <FileText size={18} />
                            <span>{t.hero.resumeBtn}</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/PHmeen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[#051410] hover:-translate-y-1 hover:shadow-[0_0_20px_var(--primary-glow)] transition-all duration-300"
                            title="GitHub Profile"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="GitHub"
                                className="w-5 h-5 invert"
                            />
                        </a>
                        <button
                            onClick={() => onCopy('mean1940@gmail.com', 'Email')}
                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[#051410] hover:-translate-y-1 hover:shadow-[0_0_20px_var(--primary-glow)] transition-all duration-300"
                            title="Click to copy Email: mean1940@gmail.com"
                        >
                            <Mail size={20} />
                        </button>
                        <button
                            onClick={() => onCopy('0971590552', 'Phone')}
                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[#051410] hover:-translate-y-1 hover:shadow-[0_0_20px_var(--primary-glow)] transition-all duration-300"
                            title="Click to copy Phone: 097-159-0552"
                        >
                            <Phone size={20} />
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center items-center">
                    <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full blur-[100px] opacity-25 animate-pulse-glow -z-10" />

                    <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full p-2.5 bg-gradient-to-br from-white/20 via-white/5 to-[var(--primary)]/40 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative">
                        <img
                            src={getAssetPath("imgportfolio/Meen.svg")}
                            alt="Phathit Nudam Photo"
                            className="w-full h-full object-cover rounded-full animate-float shadow-inner"
                            onError={(e) => {
                                e.currentTarget.src = 'https://ui-avatars.com/api/?name=Phathit+Nudam&background=38bdf8&color=051410&size=300';
                            }}
                        />

                        <div className="absolute -bottom-2 -left-4 glass-panel px-4 py-2 rounded-2xl border border-white/20 shadow-xl flex items-center gap-2.5 animate-float" style={{ animationDelay: '1s' }}>
                            <span className="w-3 h-3 rounded-full bg-[var(--primary)] animate-ping" />
                            <span className="text-xs font-bold text-white uppercase tracking-wider">{t.hero.availableBadge}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-4xl grid grid-cols-3 gap-4 sm:gap-6 mt-16">
                {stats.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                        <div key={idx} className="glass-card rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center justify-center">
                            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/30 flex items-center justify-center mb-2">
                                <IconComp size={20} />
                            </div>
                            <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">{item.value}</span>
                            <span className="text-xs sm:text-sm text-slate-400 font-medium">{item.label}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
