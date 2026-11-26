'use client';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SPACES } from '@/data/home';
import Icon from './Icon';

const GAP = 20;
const AUTO_SPEED = 0.4; // px/frame

export default function SpacesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tickerFnRef = useRef<((time: number, deltaTime: number, frame: number) => void) | null>(null);
  const pausedRef = useRef(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const syncArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    syncArrows();
    el.addEventListener('scroll', syncArrows, { passive: true });
    const ro = new ResizeObserver(syncArrows);
    ro.observe(el);

    // Autoplay bằng ticker function – lưu reference để remove đúng
    const tick = () => {
      if (pausedRef.current) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 2) {
        // về đầu mượt
        gsap.to(el, { scrollLeft: 0, duration: 0.8, ease: 'power2.inOut', onUpdate: syncArrows });
      } else {
        el.scrollLeft += AUTO_SPEED;
      }
    };

    tickerFnRef.current = tick;
    gsap.ticker.add(tick);

    return () => {
      el.removeEventListener('scroll', syncArrows);
      ro.disconnect();
      if (tickerFnRef.current) {
        gsap.ticker.remove(tickerFnRef.current);
        tickerFnRef.current = null;
      }
    };
  }, [syncArrows]);

  const move = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.sc-card');
    const step = card ? card.offsetWidth + GAP : 280;
    gsap.to(el, {
      scrollLeft: el.scrollLeft + (dir === 'next' ? step : -step),
      duration: 0.65,
      ease: 'power3.out',
      onUpdate: syncArrows,
    });
  };

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return (
    <div
      className="sc-wrap"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <button
        className="sc-btn sc-btn-prev"
        onClick={() => move('prev')}
        disabled={!canPrev}
        aria-label="Xem không gian trước"
      >
        <Icon name="left" size={18} stroke={2} />
      </button>

      <div ref={trackRef} className="sc-track">
        {SPACES.map((s) => (
          <Link key={s.name} href={s.href} className="sc-card card">
            <span className="sc-img space-img-empty">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M8.5 5 L9.5 3 h5 l1 2" />
              </svg>
              <span className="space-img-label">Ảnh sắp cập nhật</span>
            </span>
            <span className="sc-name card-title">{s.name}</span>
          </Link>
        ))}
      </div>

      <button
        className="sc-btn sc-btn-next"
        onClick={() => move('next')}
        disabled={!canNext}
        aria-label="Xem không gian tiếp theo"
      >
        <Icon name="right" size={18} stroke={2} />
      </button>
    </div>
  );
}
