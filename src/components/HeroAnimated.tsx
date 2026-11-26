'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO_PICKS } from '@/data/home';
import BookingButton from './BookingButton';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

// 3 slide placeholder – sau này thay src + alt là xong
const SLIDES = [
  { src: '', alt: 'Ảnh 1 – Không gian phòng khách nội thất gỗ Đông Dương' },
  { src: '', alt: 'Ảnh 2 – Phòng ngủ gỗ tự nhiên tại showroom Thảo Điền' },
  { src: '', alt: 'Ảnh 3 – Bộ bàn ăn gỗ tự nhiên Linh\'s Furniture' },
];

const INTERVAL = 5000; // ms mỗi slide

export default function HeroAnimated() {
  const [current, setCurrent] = useState(0);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const kickerRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const picksRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Chuyển slide – cross-fade mượt bằng GSAP
  const goTo = (next: number) => {
    const prev = current;
    if (prev === next) return;
    const prevEl = slidesRef.current[prev];
    const nextEl = slidesRef.current[next];
    if (!prevEl || !nextEl) return;

    gsap.to(prevEl, { opacity: 0, scale: 1, duration: 1.2, ease: 'power2.inOut' });
    gsap.fromTo(nextEl,
      { opacity: 0, scale: 1.06 },
      { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.inOut' }
    );
    setCurrent(next);
  };

  // Auto-play
  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);
  };

  // Khi current thay đổi → animate + reset timer
  useEffect(() => {
    const prevIdx = (current - 1 + SLIDES.length) % SLIDES.length;
    const prevEl = slidesRef.current[prevIdx];
    const curEl = slidesRef.current[current];

    // Slide đầu tiên khi load – chỉ fade in nhẹ
    if (prevIdx === SLIDES.length - 1 && current === 0 && prevEl) {
      // reset tất cả về đúng state
      SLIDES.forEach((_, i) => {
        const el = slidesRef.current[i];
        if (el) gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: 1 });
      });
    } else if (prevEl && curEl) {
      gsap.to(prevEl, { opacity: 0, scale: 1, duration: 1.2, ease: 'power2.inOut' });
      gsap.fromTo(curEl,
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.inOut' }
      );
    }

    startTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Text intro animation khi load trang
  useEffect(() => {
    // Set trạng thái ban đầu cho các slides
    SLIDES.forEach((_, i) => {
      const el = slidesRef.current[i];
      if (el) gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.06 });
    });

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo(kickerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.5);
    tl.fromTo(h1Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, 0.7);
    tl.fromTo(leadRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8 }, 0.95);
    tl.fromTo(actionsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 1.15);
    if (picksRef.current) {
      tl.fromTo(
        picksRef.current.querySelectorAll('.pick'),
        { opacity: 0, y: 24, x: 12 },
        { opacity: 1, y: 0, x: 0, duration: 0.65, stagger: 0.1 },
        1.3
      );
    }

    // Parallax trên toàn bộ hero bg
    gsap.to('.hero-slides', {
      yPercent: 16,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDot = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrent(i);
  };

  return (
    <section ref={heroRef} className="hero">
      {/* Slideshow background */}
      <div className="hero-slides" aria-hidden="true">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            ref={(el) => { slidesRef.current[i] = el; }}
            className="hero-slide"
          >
            {slide.src ? (
              <Image src={slide.src} alt={slide.alt} fill priority={i === 0} sizes="100vw" className="hero-img" />
            ) : (
              <div className="hero-slide-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M8.5 5 L9.5 3 h5 l1 2" />
                </svg>
                <span>{slide.alt}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="hero-veil" aria-hidden="true" />

      {/* Dots */}
      <div className="hero-dots" aria-label="Chọn ảnh nền">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' hero-dot-active' : ''}`}
            onClick={() => handleDot(i)}
            aria-label={`Ảnh ${i + 1}`}
            aria-pressed={i === current}
          />
        ))}
      </div>

      {/* Content */}
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p ref={kickerRef} className="kicker" style={{ opacity: 0 }}>
            Nội thất gỗ · Thảo Điền, Quận 2 từ 2016
          </p>
          <h1 ref={h1Ref} className="display" style={{ opacity: 0 }}>
            Nội thất gỗ mang <i>hồn Đông Dương</i>
          </h1>
          <p ref={leadRef} className="lead" style={{ opacity: 0 }}>
            Gỗ trầm màu, tay nắm đồng, đường chạm mềm – làm ra để sống cùng bạn nhiều năm. Showroom tại 67 Xuân Thủy, Thảo Điền, Quận 2.
          </p>
          <div ref={actionsRef} className="actions" style={{ opacity: 0 }}>
            <Link href="#bo-suu-tap" className="btn btn-primary btn-square">
              Khám phá bộ sưu tập
            </Link>
            <BookingButton className="btn-text">Đặt lịch xem showroom</BookingButton>
          </div>
        </div>
        <div ref={picksRef} className="hero-picks desk-only">
          <p className="kicker small">Sản phẩm nổi bật</p>
          <div className="hero-picks-row">
            {HERO_PICKS.map((p) => (
              <Link key={p.code} href={p.href} className="pick card">
                <span className="pick-img pick-img-placeholder">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M8.5 5 L9.5 3 h5 l1 2" />
                  </svg>
                </span>
                <span className="pick-name">{p.name}</span>
                <span className="muted xsmall">{p.code} · Giá từ [GIÁ]</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
