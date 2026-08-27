// ==========================================================================
// FOOTER COMPONENT (ส่วนท้ายเว็บไซต์ พร้อมปุ่มลอย Scroll to Top)
// ==========================================================================

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
    // เก็บสถานะซ่อน/แสดงปุ่มลอย Back to Top
    const [showScrollTop, setShowScrollTop] = useState(false);

    // ตรวจจับระยะเลื่อนหน้าจอเพื่อแสดงปุ่มขึ้นบนสุดเมื่อเลื่อนลงเกิน 300px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ฟังก์ชันเลื่อนหน้าจอกลับขึ้นด้านบนสุดอย่างนุ่มนวล
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* แถบ Footer แสดงลิขสิทธิ์ */}
            <footer className="py-8 px-[9%] bg-[#050810]/95 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p className="text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} Phathit Nudam — Built with React, TypeScript & Tailwind CSS
                </p>
                <p className="text-slate-500 text-xs">
                    Designed for High-Performance & Clean UI/UX
                </p>
            </footer>

            {/* ปุ่มลอยสำหรับเลื่อนกลับขึ้นด้านบนสุด (Scroll To Top Floating Button) */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#18f7b8] text-[#051410] flex items-center justify-center text-lg shadow-[0_0_20px_rgba(24,247,184,0.4)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(24,247,184,0.8)] transition-all duration-300 z-50 ${
                    showScrollTop ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-90'
                }`}
                aria-label="Back to top"
                title="Back to top"
            >
                <ArrowUp size={22} />
            </button>
        </>
    );
};
