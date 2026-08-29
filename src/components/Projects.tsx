import { FolderOpen, ExternalLink, Code, Lock, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import type { TranslationStructure } from '../data/translations';

interface ProjectsProps {
    onSelectProject: (project: Project) => void;
    t: TranslationStructure;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, t }) => {
    const projects = portfolioData.projects;

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
        <section id="projects" className="py-24 px-4 sm:px-[9%] flex flex-col items-center relative">
            <div className="text-center w-full mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/25 text-[var(--primary)] text-xs font-extrabold tracking-widest mb-3 shadow-[0_0_15px_var(--primary-glow)]">
                    <FolderOpen size={14} />
                    <span>{t.projects.badge}</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
                    {t.projects.titlePart1} <span className="gradient-text">{t.projects.titlePart2}</span>
                </h2>
                <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
                    {t.projects.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {projects.map((project: Project) => {
                    const transItem = t.projects.items[project.id];
                    const projectTitle = transItem?.title || project.title;
                    const projectDesc = transItem?.description || project.description;

                    return (
                        <div
                            key={project.id}
                            className="glass-card rounded-3xl overflow-hidden flex flex-col group hover:border-[var(--primary)]/60 hover:shadow-[0_16px_50px_var(--primary-glow)] transition-all duration-300 relative"
                        >
                            <div className="w-full bg-[#0d1424] border-b border-white/10 flex flex-col overflow-hidden">
                                <div className="h-10 px-4 bg-[#080d18] border-b border-white/10 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block shadow-[0_0_8px_rgba(255,95,86,0.4)]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block shadow-[0_0_8px_rgba(255,189,46,0.4)]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block shadow-[0_0_8px_rgba(39,201,63,0.4)]" />
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono tracking-tight truncate max-w-[200px] group-hover:border-[var(--primary)]/40 transition-colors">
                                        <Lock size={10} className="text-[var(--primary)] shrink-0" />
                                        <span className="truncate">{project.demo ? project.demo.replace('https://', '').replace(/\/$/, '') : 'localhost:3000'}</span>
                                    </div>
                                    <button
                                        onClick={() => onSelectProject(project)}
                                        className="p-1 text-slate-400 hover:text-[var(--primary)] transition-colors"
                                        title="Expand project details"
                                    >
                                        <Maximize2 size={13} />
                                    </button>
                                </div>

                                <div
                                    onClick={() => onSelectProject(project)}
                                    className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#0a0f1d] flex items-center justify-center p-3 cursor-pointer group/img"
                                >
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={projectTitle}
                                            className="w-full h-full object-contain rounded-xl group-hover/img:scale-105 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/5"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <Code size={48} className="text-[var(--primary)]" />
                                    )}

                                    <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="px-4 py-2 rounded-full bg-[var(--primary)] text-[#051410] font-bold text-xs flex items-center gap-2 shadow-lg">
                                            <Maximize2 size={14} />
                                            <span>{t.projects.quickViewBtn}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center justify-between gap-2 mb-2">
                                    <h3
                                        onClick={() => onSelectProject(project)}
                                        className="text-xl font-extrabold text-white group-hover:text-[var(--primary)] transition-colors leading-snug cursor-pointer"
                                    >
                                        {projectTitle}
                                    </h3>
                                    <span className="text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[var(--primary)] shrink-0">
                                        {project.category}
                                    </span>
                                </div>

                                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 flex-grow">
                                    {projectDesc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tIdx) => {
                                        const iconUrl = getTechIconUrl(tag);
                                        return (
                                            <span
                                                key={tIdx}
                                                className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium group-hover:border-[var(--primary)]/30 group-hover:text-white transition-all duration-200"
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

                                <div className="flex items-center gap-3 mt-auto pt-2">
                                    <button
                                        onClick={() => onSelectProject(project)}
                                        className="py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs hover:bg-white/15 hover:text-white transition-all flex items-center gap-1.5"
                                        title="View full specs"
                                    >
                                        <Maximize2 size={14} />
                                        <span className="hidden sm:inline">{t.projects.detailsBtn}</span>
                                    </button>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[var(--primary)] text-[#051410] font-extrabold text-xs shadow-[0_0_20px_var(--primary-glow)] hover:scale-[1.02] transition-all duration-200"
                                        >
                                            <ExternalLink size={14} />
                                            <span>{t.projects.liveDemoBtn}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
