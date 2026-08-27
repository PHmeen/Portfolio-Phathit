// ==========================================================================
// NAVBAR COMPONENT (แถบเนวิเกชันด้านบน พร้อมระบบตรวจจับ Scroll & Mobile Menu)
// ==========================================================================

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
    // เก็บสถานะเปิด/ปิดเมนูบนหน้าจอมือถือ (Mobile Menu Open State)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // เก็บสถานะเซกชันที่ผู้ใช้กำลังดูอยู่บนหน้าจอ (Active Scroll Section State)
    const [activeSection, setActiveSection] = useState('home');

    // ระบบตรวจจับการ Scroll เพื่อเปลี่ยนสถานะ Active ของลิงก์อัตโนมัติ
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'education'];
            const scrollPosition = window.scrollY + 200;

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

    // รายการลิงก์เนวิเกชันทั้งหมดในหน้าเว็บ
    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Education', href: '#education', id: 'education' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full px-[9%] py-5 flex justify-between items-center z-50 bg-[#0a0f1d]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
            {/* โลโก้แบรนด์ Portfolio */}
            <a href="#home" className="text-2xl font-bold text-white tracking-wide">
                <span>Portfolio</span>
            </a>

            {/* เมนูการเชื่อมโยงสำหรับหน้าจอ Desktop */}
            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        className={`text-base font-medium transition-colors relative py-1 ${
                            activeSection === link.id ? 'text-[#18f7b8]' : 'text-slate-400 hover:text-[#18f7b8]'
                        }`}
                    >
                        {link.name}
                        {activeSection === link.id && (
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#18f7b8] rounded-full" />
                        )}
                    </a>
                ))}
            </nav>

            {/* ป้ายแสดงสถาบัน PSU Badge และปุ่มสลับเมนู Mobile */}
            <div className="flex items-center gap-4">
                <a
                    href="https://www.sci.psu.ac.th/academic-programs/bachelors-degree/bachelor-of-science-information-and-communication-technology/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#18f7b8]/40 transition-colors text-xs font-semibold text-slate-300"
                    title="Faculty of Science - ICT, Prince of Songkla University"
                >
                    <img
                        src="imgportfolio/psulogo.png"
                        alt="PSU Logo"
                        className="h-5 w-auto object-contain"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <span>ICT PSU</span>
                </a>

                {/* ปุ่มเปิด/ปิดเมนูสำหรับสมาร์ทโฟน (Mobile Menu Toggle Button) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#18f7b8] hover:border-[#18f7b8] transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* เมนูย่อยสำหรับสมาร์ทโฟน (Mobile Dropdown Menu) */}
            {isMenuOpen && (
                <nav className="absolute top-full left-0 w-full bg-[#0a0f1d]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col p-6 gap-4 md:hidden shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-lg font-medium transition-colors py-2 border-b border-white/5 ${
                                activeSection === link.id ? 'text-[#18f7b8]' : 'text-slate-400 hover:text-[#18f7b8]'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};
