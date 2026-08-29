import { X, ExternalLink, Code, CheckCircle2, Lock } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-modal">
            <div className="absolute inset-0" onClick={onClose} />

            <div className="glass-panel w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/15 max-h-[90vh] flex flex-col">
                <div className="h-12 px-5 bg-[#080d18] border-b border-white/10 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                            <Lock size={12} className="text-[var(--primary)]" />
                            {project.title} — Detail Overview
                        </span>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                    <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-[#0d1424] border border-white/10 flex items-center justify-center p-4 group">
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain rounded-xl shadow-lg"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        ) : (
                            <Code size={56} className="text-[var(--primary)]" />
                        )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 mb-2">
                                {project.category} Project
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                                {project.title}
                            </h3>
                        </div>

                        <div className="flex items-center gap-3">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 py-2.5 px-6 rounded-xl bg-[var(--primary)] text-[#051410] font-extrabold text-xs shadow-[0_0_20px_var(--primary-glow)] hover:scale-105 transition-all"
                                >
                                    <ExternalLink size={16} />
                                    <span>{project.demoText || 'Live Demo'}</span>
                                </a>
                            )}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
                            Overview & Architecture
                        </h4>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            {project.longDescription || project.description}
                        </p>
                    </div>

                    {project.features && project.features.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                                Key Highlights & Features
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-slate-200 text-xs sm:text-sm">
                                        <CheckCircle2 size={16} className="text-[var(--primary)] shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div>
                        <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                            Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
