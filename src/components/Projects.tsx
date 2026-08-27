// ==========================================================================
// PROJECTS COMPONENT (คอมโพเนนต์แสดงรายการผลงานดีไซน์กรอบ Browser Window Shell พร้อมไอคอนเทคโนโลยี)
// ==========================================================================

import { FolderOpen, ExternalLink, Code, Lock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
    // ฟังก์ชันดึง URL ไอคอนประจำเทคโนโลยีอัตโนมัติ
    const getTechIconUrl = (tagName: string): string | null => {
        const name = tagName.toLowerCase();
        if (name.includes('react')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg';
        if (name.includes('typescript')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg';
        if (name.includes('tailwind')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg';
        if (name.includes('next')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg';
        if (name.includes('vite')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg';
        if (name.includes('html')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg';
        if (name.includes('css')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg';
        if (name.includes('js') || name.includes('javascript')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg';
        if (name.includes('php')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg';
        if (name.includes('sqlite')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg';
        if (name.includes('node')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg';
        return null;
    };

    return (
        <section id="projects" className="py-24 px-[9%] flex flex-col items-center">
            {/* ส่วนหัวข้อหลัก Featured Projects */}
            <div className="text-center w-full mb-14">
                {/* ป้ายเรืองแสง MY PORTFOLIO */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18f7b8]/10 border border-[#18f7b8]/25 text-[#18f7b8] text-xs font-bold tracking-widest mb-3 shadow-[0_0_15px_rgba(24,247,184,0.15)]">
                    <FolderOpen size={14} />
                    <span>MY PORTFOLIO</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
                    A collection of web applications built with modern technologies & clean architecture
                </p>
            </div>

            {/* ตารางแสดงการ์ดผลงานทั้งหมด (Projects Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {portfolioData.projects.map((project: Project) => (
                    <div
                        key={project.id}
                        className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-[#18f7b8]/50 hover:shadow-[0_12px_40px_rgba(24,247,184,0.18)] transition-all duration-300 relative"
                    >
                        {/* กรอบพรีวิวสไตล์หน้าต่างเบราว์เซอร์ (Browser Shell Mockup Frame) */}
                        <div className="w-full bg-[#0d1424] border-b border-white/10 flex flex-col overflow-hidden">
                            {/* แถบด้านบนเบราว์เซอร์ (macOS Dots Window Header) */}
                            <div className="h-9 px-4 bg-[#080d18] border-b border-white/10 flex items-center justify-between">
                                {/* ปุ่มจุด 3 สี macOS */}
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block shadow-[0_0_8px_rgba(255,95,86,0.4)]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block shadow-[0_0_8px_rgba(255,189,46,0.4)]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block shadow-[0_0_8px_rgba(39,201,63,0.4)]" />
                                </div>
                                {/* ช่องที่อยู่ URL แบบ SSL Secured Badge */}
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono tracking-tight truncate max-w-[210px] group-hover:border-[#18f7b8]/30 transition-colors">
                                    <Lock size={10} className="text-[#18f7b8] shrink-0" />
                                    <span className="truncate">{project.demo ? project.demo.replace('https://', '').replace(/\/$/, '') : 'localhost:3000'}</span>
                                </div>
                                <div className="w-8" />
                            </div>

                            {/* ตัวรูปภาพพรีวิวภายในกรอบเบราว์เซอร์ (Browser Content Body) */}
                            <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#0a0f1d] flex items-center justify-center p-3">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain rounded-xl group-hover:scale-[1.03] transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/5"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            if (e.currentTarget.nextElementSibling) {
                                                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                                            }
                                        }}
                                    />
                                ) : null}

                                {/* ไอคอนสำรองกรณีไม่มีรูปภาพ */}
                                <div className={`flex items-center justify-center ${project.image ? 'hidden' : 'flex'}`}>
                                    <Code size={48} className="text-[#18f7b8]" />
                                </div>
                            </div>
                        </div>

                        {/* ส่วนเนื้อหารายละเอียดของโปรเจกต์ (Project Body) */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#18f7b8] transition-colors leading-snug">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            {/* แท็กเทคโนโลยีที่ใช้ พร้อมไอคอนประกอบ (Tech Tags with Icons) */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, tIdx) => {
                                    const iconUrl = getTechIconUrl(tag);
                                    return (
                                        <span
                                            key={tIdx}
                                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium group-hover:border-[#18f7b8]/30 group-hover:text-[#18f7b8] transition-all duration-200"
                                        >
                                            {iconUrl && (
                                                <img
                                                    src={iconUrl}
                                                    alt={tag}
                                                    className="w-3.5 h-3.5 object-contain"
                                                    onError={(e) => (e.currentTarget.style.display = 'none')}
                                                />
                                            )}
                                            <span>{tag}</span>
                                        </span>
                                    );
                                })}
                            </div>

                            {/* ปุ่มลิงก์ไปยัง GitHub และ Live Demo */}
                            <div className="flex items-center gap-3 mt-auto pt-2">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-[#18f7b8] hover:text-[#051410] hover:border-[#18f7b8] transition-all duration-200"
                                    >
                                        <Code size={15} />
                                        <span>Code Repo</span>
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#18f7b8]/10 border border-[#18f7b8]/30 text-[#18f7b8] font-semibold text-xs hover:bg-[#18f7b8] hover:text-[#051410] shadow-[0_0_15px_rgba(24,247,184,0.15)] transition-all duration-200"
                                    >
                                        <ExternalLink size={15} />
                                        <span>{project.demoText || 'Live Demo'}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
