'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade-in + slide-up khi section vào viewport
export function RevealSection({
  children,
  className = '',
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform, opacity', ...style }}>
      {children}
    </div>
  );
}

// Stagger children lần lượt khi vào viewport
export function StaggerReveal({
  children,
  className = '',
  stagger = 0.12,
  y = 36,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.children;
    if (!items.length) return;

    gsap.fromTo(
      items,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 86%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [stagger, y]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

// Chữ split line reveal theo từng dòng
export function RevealHeading({
  children,
  as: Tag = 'h2',
  className = '',
}: {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 32, skewY: 1.5 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={{ willChange: 'transform, opacity' }}>
      {children}
    </Tag>
  );
}

// Parallax wrapper – di chuyển chậm hơn trang khi scroll
export function ParallaxLayer({
  children,
  speed = 0.3,
  className = '',
}: {
  children?: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement ?? el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}

// Counter đếm số lên khi vào viewport
export function CountUp({
  to,
  suffix = '',
  duration = 2,
  className = '',
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: to,
      duration,
      ease: 'power2.out',
      onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  }, [to, duration, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}

// Image reveal với clip-path quét từ trái sang
export function ImageReveal({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.3,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className={className} style={{ willChange: 'clip-path', ...style }}>
      {children}
    </div>
  );
}

// Horizontal line draw từ trái sang phải
export function DrawLine({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLHRElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { scaleX: 0, transformOrigin: 'left' },
      {
        scaleX: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
      }
    );
  }, []);

  return <hr ref={ref} className={className} style={{ transformOrigin: 'left' }} />;
}
