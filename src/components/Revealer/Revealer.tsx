import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
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
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    const startAnimation = async () => {
      await animate('.content', { opacity: [0, 1] }, { bounce: 0, duration: 0.3 });
    };

    const exitAnimation = async () => {
      setCanScroll(false);
      await animate('.content', { opacity: [1, 0] }, { duration: 0.3 });
      await animate('.reveal', { x: ['100%', '0%'] }, { delay: stagger(0.06), bounce: 0 })
      await animate('.reveal', { x: '0%' }, { bounce: 0 });
      await animate('.reveal-container', { scaleX: 0, transformOrigin: 'left' }, { bounce: 0, delay: 0.14 });

      if(safeToRemove) {
        safeToRemove();
      }
    };

    if (isPresent) {
      startAnimation();
      setCanScroll(true);
      return;
    }

    exitAnimation();
  }, [isPresent]);

  useEffect(() => {
    if (canScroll) {
      document.body.style.overflowY = 'revert';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }, [canScroll]);

  return (
    <div
      className="h-full w-full bg-slate-800 text-white"
      ref={scope}
    >
      <div className="reveal-container fixed inset-0 pointer-events-none overflow-hidden">
        <Reveal />
        <Reveal color="bg-amber-200" />
        <Reveal color="bg-indigo-300" />
      </div>
      
      <div className="content w-full h-full opacity-0">
        {children}
      </div>
    </div>
  );
}
