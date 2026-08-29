import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="py-10 px-4 sm:px-[9%] bg-[#050810]/95 backdrop-blur-2xl border-t border-white/10 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <div>
                        <p className="text-slate-300 text-sm font-medium">
                            &copy; {new Date().getFullYear()} <span className="text-white font-bold">Phathit Nudam</span> — Built with React 19, TypeScript & Tailwind CSS
                        </p>
                        <p className="text-slate-400 text-xs mt-1">
                            Designed with modern Glassmorphism UI tokens & responsive interaction
                        </p>
                    </div>

                </div>
            </footer>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[var(--primary)] text-[#051410] flex items-center justify-center shadow-[0_0_25px_var(--primary-glow)] hover:scale-110 hover:shadow-[0_0_35px_var(--primary-glow)] transition-all duration-300 z-50 ${
                    showScrollTop ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-75'
                }`}
                aria-label="Back to top"
                title="Scroll back to top"
            >
                <ArrowUp size={20} className="stroke-[3]" />
            </button>
        </>
    );
};
