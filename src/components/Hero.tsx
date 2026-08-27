// ==========================================================================
// HERO COMPONENT (ส่วนต้อนรับหลัก พร้อมแอนิเมชัน Typed.js และรูปโปรไฟล์)
// ==========================================================================

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Code, FileText, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
    // อ้างอิง Element สำหรับแสดงอนิเมชันพิมพ์ตัวอักษร Typed.js
    const el = useRef<HTMLSpanElement>(null);

    // กำหนดการทำงานของ Typed.js พิมพ์สลับข้อความอัตโนมัติ
    useEffect(() => {
        if (!el.current) return;

        const typed = new Typed(el.current, {
            strings: portfolioData.typingStrings,
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="min-h-screen pt-36 pb-16 px-[9%] flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* ฝั่งซ้าย: ข้อมูลต้อนรับและปุ่ม Action */}
            <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* ป้ายบอกบทบาท (Section Badge Tag) */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18f7b8]/10 border border-[#18f7b8]/25 text-[#18f7b8] text-xs font-bold tracking-widest mb-6 shadow-[0_0_15px_rgba(24,247,184,0.15)]">
                    <Code size={14} />
                    <span>FULL STACK DEVELOPER</span>
                </div>

                {/* ชื่อผู้ใช้งาน */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                    Phathit Nudam
                </h1>

                {/* ข้อความอนิเมชันพิมพ์อัตโนมัติ (Typed.js Animation) */}
                <div className="text-xl md:text-2xl font-medium text-slate-300 mb-6 min-h-[2.5rem]">
                    I am passionate about <span ref={el} className="gradient-text font-semibold"></span>
                </div>

                {/* บทสรุปแนะนำตัวสั้นๆ */}
                <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                    I am currently a 4th-year undergraduate student majoring in Information and Communication Technology (ICT)
                    at Prince of Songkla University. I have a strong interest in Full Stack Web Development and am always
                    eager to learn new technologies and collaborate on team projects.
                </p>

                {/* ปุ่มการทำงานหลัก (Call to Action Buttons) */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#18f7b8] text-[#051410] font-bold text-base shadow-[0_0_20px_rgba(24,247,184,0.3)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(24,247,184,0.6)] transition-all duration-300"
                    >
                        <Code size={18} />
                        <span>View Projects</span>
                    </a>
                    <a
                        href="Resume_Phathit.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/5 text-white font-bold text-base border border-[#18f7b8]/40 hover:bg-[#18f7b8]/10 hover:border-[#18f7b8] hover:text-[#18f7b8] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,247,184,0.3)] transition-all duration-300"
                    >
                        <FileText size={18} />
                        <span>View Resume</span>
                    </a>
                </div>

                {/* ไอคอนลิงก์ Social Media */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/PHmeen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#18f7b8] hover:border-[#18f7b8] hover:text-[#051410] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,247,184,0.3)] transition-all duration-300"
                        title="GitHub Profile"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            className="w-5 h-5 invert"
                        />
                    </a>
                    <a
                        href="mailto:mean1940@gmail.com"
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#18f7b8] hover:border-[#18f7b8] hover:text-[#051410] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,247,184,0.3)] transition-all duration-300"
                        title="Personal Email"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="tel:0971590552"
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#18f7b8] hover:border-[#18f7b8] hover:text-[#051410] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,247,184,0.3)] transition-all duration-300"
                        title="Phone"
                    >
                        <Phone size={20} />
                    </a>
                </div>
            </div>

            {/* ฝั่งขวา: รูปภาพโปรไฟล์ทรงกลมพร้อมแสงเรืองแสง */}
            <div className="relative flex justify-center items-center">
                {/* แสง Glow วงกลมด้านหลัง */}
                <div className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-[#18f7b8] to-[#6366f1] rounded-full blur-[90px] opacity-30 -z-10" />

                {/* กรอบและรูปโปรไฟล์ */}
                <div className="w-[280px] h-[280px] md:w-[330px] md:h-[330px] rounded-full p-2 bg-gradient-to-br from-[#18f7b8]/60 to-[#6366f1]/60 shadow-2xl">
                    <img
                        src="imgportfolio/Meen.svg"
                        alt="Phathit Nudam Photo"
                        className="w-full h-full object-cover rounded-full animate-float"
                        onError={(e) => {
                            e.currentTarget.src = 'https://ui-avatars.com/api/?name=Phathit+Nudam&background=18f7b8&color=051410&size=300';
                        }}
                    />
                </div>
            </div>
        </section>
    );
};
