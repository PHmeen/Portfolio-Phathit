import { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const currentProgress = (window.scrollY / totalHeight) * 100;
                setProgress(currentProgress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[101] pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] transition-all duration-150 shadow-[0_0_12px_var(--primary)]"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};
