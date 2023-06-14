import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useAnimate, usePresence, stagger } from 'framer-motion';

function Reveal({ color = 'bg-emerald-400' }: { color?: string }) {
  return (
    <div
      className={`reveal h-screen w-full top-0 left-0 z-50 transform translate-x-full absolute ${color}`}
      style={{
        background: color 
      }}
    />
  );
}

export default function Revealer({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    const exitAnimation = async () => {
      document.body.style.overflow = 'hidden';
      
      await animate('.reveal', { x: ['100%', '0%'] }, { delay: stagger(0.06), ease: 'easeOut' });

      // hide old page when reveal cover full screen, so new page content can be see after the reveal scaleX to 0.
      await animate('.hidden-content', { display: 'none', scale: 0 });
      
      // make page scrollable before the reveler slide to left
      document.body.style.overflow = 'auto';
      window.scrollTo(0, 0);

      await animate('.reveal-container', { scaleX: 0, transformOrigin: 'left' });

      if(safeToRemove) {
        safeToRemove();
      }
    };

    if (!isPresent) {
      exitAnimation();
    }
  }, [isPresent]);

  return (
    <div
      className="h-full w-full"
      ref={scope}
    >      
      <div className={`content w-full h-full ${isPresent ? 'active-content' : 'hidden-content'}`}>
        {children}
      </div>
      
      <div className="reveal-container fixed inset-0 pointer-events-none overflow-hidden">
        <Reveal />
        <Reveal color="bg-amber-200" />
        <Reveal color="bg-indigo-300" />
      </div>
    </div>
  );
}
