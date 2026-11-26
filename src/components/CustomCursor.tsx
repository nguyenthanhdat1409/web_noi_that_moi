'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Ẩn cursor trên mobile/touch
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.documentElement.style.cursor = 'none';

    let mouseX = -100, mouseY = -100;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: 'power3.out' });
      gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.45, ease: 'power3.out' });
    };

    // Phóng to ring khi hover link/button
    const onEnter = () => {
      gsap.to(ring, { scale: 2.2, opacity: 0.5, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 0.4, duration: 0.3 });
    };
    const onLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    const bindHoverEls = () => {
      const els = document.querySelectorAll('a, button, [role="tab"], .card');
      els.forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
      return els;
    };

    let hoverEls = bindHoverEls();

    // Re-bind sau khi DOM thay đổi (tab switch, v.v.)
    const observer = new MutationObserver(() => {
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      hoverEls = bindHoverEls();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
      document.documentElement.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
