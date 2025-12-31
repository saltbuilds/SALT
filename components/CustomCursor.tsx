
import React, { useEffect, useState, useRef } from 'react';
import { COLORS } from '../constants';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
      
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const updateFollower = () => {
      // Smooth trailing physics - slightly adjusted for the larger mass
      const speed = 1;
      followerX += (mouseX - followerX) * speed;
      followerY += (mouseY - followerY) * speed;
      
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      requestAnimationFrame(updateFollower);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, [data-cursor]');
      
      if (interactive) {
        setIsHovering(true);
        const text = interactive.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    const animationFrame = requestAnimationFrame(updateFollower);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Center Dot - Now larger and more visible */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference shadow-sm"
        style={{ backgroundColor: COLORS.AQUA }}
      />
      
      {/* Outer Follower Ring - Larger scale and stronger presence */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1) flex items-center justify-center overflow-hidden
          ${isHovering ? 'w-32 h-32 border-none' : 'w-14 h-14 border-2 border-aqua/60'}
          ${isClicking ? 'scale-60' : 'scale-100'}
        `}
        style={{ 
          backgroundColor: isHovering ? `${COLORS.AQUA}40` : 'transparent',
          backdropFilter: isHovering ? 'blur(8px)' : 'none',
          boxShadow: isHovering ? `0 20px 40px rgba(129, 199, 212, 0.2)` : 'none'
        }}
      >
        {cursorText && (
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-navy animate-in fade-in zoom-in slide-in-from-bottom-2 duration-500">
            {cursorText}
          </span>
        )}
      </div>

      <style>{`
        body, button, a {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          .pointer-events-none { display: none !important; }
          body, button, a { cursor: auto !important; }
        }
      `}</style>
    </div>
  );
};

export default CustomCursor;
