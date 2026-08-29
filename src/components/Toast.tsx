import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
    message: string | null;
    onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] animate-modal pointer-events-auto">
            <div className="glass-panel px-5 py-3 rounded-2xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[var(--primary)]/40 text-white">
                <div className="w-7 h-7 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                </div>
                <span className="text-sm font-medium text-slate-100">{message}</span>
                <button
                    onClick={onClose}
                    className="ml-2 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};
