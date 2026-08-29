import { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const onMouseMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;
            const isClickable = 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' || 
                target.closest('a') !== null || 
                target.closest('button') !== null ||
                target.classList.contains('glass-card');
            
            setIsHovered(isClickable);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            <div
                className="fixed pointer-events-none z-[100] w-2.5 h-2.5 rounded-full bg-[var(--primary)] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-[0_0_10px_var(--primary)]"
                style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`
                }}
            />
            <div
                className="fixed pointer-events-none z-[99] w-10 h-10 rounded-full border border-[var(--primary)]/40 bg-[var(--primary)]/5 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
                style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
                    borderColor: isHovered ? 'var(--primary)' : 'rgba(255, 255, 255, 0.25)',
                    backgroundColor: isHovered ? 'rgba(var(--primary-rgb), 0.15)' : 'transparent'
                }}
            />
        </>
    );
};
