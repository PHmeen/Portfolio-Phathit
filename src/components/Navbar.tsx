import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Globe } from 'lucide-react';
import type { Language, TranslationStructure } from '../data/translations';
import { getAssetPath } from '../utils/assetPath';

interface NavbarProps {
    lang: Language;
    onToggleLang: () => void;
    t: TranslationStructure;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, t }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);

            const sections = ['home', 'about', 'skills', 'projects', 'education'];
            const scrollPosition = window.scrollY + 220;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: '#home', id: 'home' },
        { name: t.nav.about, href: '#about', id: 'about' },
        { name: t.nav.skills, href: '#skills', id: 'skills' },
        { name: t.nav.projects, href: '#projects', id: 'projects' },
        { name: t.nav.education, href: '#education', id: 'education' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full px-4 sm:px-[8%] py-4 z-50 transition-all duration-300">
            <div className={`mx-auto max-w-7xl px-5 sm:px-8 py-3 rounded-full flex justify-between items-center transition-all duration-300 ${
                isScrolled
                    ? 'bg-[#060a14]/85 backdrop-blur-2xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
                    : 'bg-white/5 backdrop-blur-md border border-white/10'
            }`}>
                <a href="#home" className="text-xl sm:text-2xl font-black text-white tracking-wider flex items-center gap-2 group">
                    <span className="w-8 h-8 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/50 text-[var(--primary)] flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_var(--primary-glow)]">
                        <Sparkles size={16} />
                    </span>
                    <span>Portfolio</span>
                </a>

                {/* Desktop Nav links */}
                <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
                                    isActive
                                        ? 'text-[#040814] bg-[var(--primary)] shadow-[0_0_20px_var(--primary-glow)] font-bold'
                                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </nav>

                {/* Action Items: Language Switcher & PSU Tag */}
                <div className="flex items-center gap-3">
                    {/* Language Switcher Toggle Button */}
                    <button
                        onClick={onToggleLang}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/15 text-slate-100 text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)] group"
                        title={lang === 'en' ? 'สลับเป็นภาษาไทย' : 'Switch to English'}
                    >
                        <Globe size={14} className="text-[var(--primary)] group-hover:rotate-45 transition-transform" />
                        <span className="uppercase font-extrabold tracking-wider">
                            {lang === 'en' ? 'EN / TH' : 'TH / EN'}
                        </span>
                    </button>

                    {/* PSU Logo Badge */}
                    <a
                        href="https://www.sci.psu.ac.th/academic-programs/bachelors-degree/bachelor-of-science-information-and-communication-technology/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[var(--primary)]/40 transition-all text-xs font-bold text-slate-300 shadow-sm"
                        title="Faculty of Science - ICT, Prince of Songkla University"
                    >
                        <img
                            src={getAssetPath("imgportfolio/psulogo.png")}
                            alt="PSU Logo"
                            className="h-4 w-auto object-contain"
                            onError={(e) => (e.currentTarget.style.display = 'none')}
                        />
                        <span>ICT PSU</span>
                    </a>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:text-[var(--primary)] transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <nav className="mt-3 mx-auto max-w-md bg-[#060a14]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 flex flex-col gap-2 md:hidden shadow-2xl animate-modal">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-base font-semibold transition-all py-2.5 px-4 rounded-xl flex items-center justify-between ${
                                activeSection === link.id
                                    ? 'text-[#040814] bg-[var(--primary)] shadow-[0_0_15px_var(--primary-glow)] font-bold'
                                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            <span>{link.name}</span>
                            {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-[#040814]" />}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};
