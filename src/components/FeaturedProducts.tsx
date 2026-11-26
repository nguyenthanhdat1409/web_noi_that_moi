'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS, PRODUCT_TABS, type Status } from '@/data/home';
import Icon from './Icon';
import { RevealSection } from './AnimatedSection';

gsap.registerPlugin(ScrollTrigger);

const tone: Record<Status, string> = {
  'Có sẵn tại showroom': 'tag-jade',
  'Mới về': 'tag-ink',
  'Nhận đặt làm': 'tag-terra',
};

export default function FeaturedProducts() {
  const [tab, setTab] = useState(PRODUCT_TABS[0].id);
  const gridRef = useRef<HTMLDivElement>(null);
  const prevTabRef = useRef(tab);

  const order = PRODUCT_TABS.find((t) => t.id === tab)!.order.split('');
  const list = order.map((id) => PRODUCTS.find((p) => p.id === id)!);

  // Animation lần đầu vào viewport
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cells = grid.querySelectorAll('.pcell');
    gsap.fromTo(
      cells,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  // Animation khi đổi tab
  useEffect(() => {
    if (prevTabRef.current === tab) return;
    prevTabRef.current = tab;
    const grid = gridRef.current;
    if (!grid) return;
    const cells = grid.querySelectorAll('.pcell');
    gsap.fromTo(
      cells,
      { opacity: 0, y: 20, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.055, ease: 'power3.out' }
    );
  }, [tab]);

  return (
    <section className="wrap section">
      <RevealSection>
        <div className="section-head split">
          <h2 className="h2">Sản phẩm nổi bật</h2>
          <div role="tablist" aria-label="Lọc sản phẩm" className="tabs">
            {PRODUCT_TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className="tab"
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </RevealSection>

      <div ref={gridRef} className="pgrid" role="tabpanel">
        {list.map((p) => (
          <article key={p.id} className="pcell card">
            <div className="pcell-top">
              <span className={`tag ${tone[p.status]}`}>{p.status}</span>
              <button
                className="icon-btn sm"
                aria-label={`Lưu ${p.name} vào yêu thích`}
              >
                <Icon name="heart" size={18} stroke={1.5} />
              </button>
            </div>
            <Link
              href={p.href}
              className="pcell-img pcell-img-placeholder"
              tabIndex={-1}
              aria-hidden="true"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M8.5 5 L9.5 3 h5 l1 2" />
              </svg>
            </Link>
            <h3 className="pcell-name">
              <Link href={p.href} className="card-title">{p.name}</Link>
            </h3>
            <p className="muted small">{p.code} · {p.material}</p>
            <div className="pcell-foot">
              <span>
                <span className="muted xsmall">Giá từ </span><b>[GIÁ]</b>
              </span>
              <Link href={p.href} className="link-more small">Xem chi tiết</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
