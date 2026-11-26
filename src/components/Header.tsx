'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MEGA, NAV, SITE } from '@/data/site';
import { useBooking } from './Booking';
import Icon from './Icon';
import OpenStatus from './OpenStatus';

export default function Header() {
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const booking = useBooking();

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setDrawer(false); setMega(false); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [drawer]);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <OpenStatus />
          <span className="desk-only truncate">{SITE.promo}</span>
          <span className="topbar-right">
            <Link href="/lien-he" className="desk-only icon-link"><Icon name="pin" size={15} />{SITE.addressShort}</Link>
            <a href={`tel:${SITE.phone}`} className="icon-link strong"><Icon name="phone" size={14} />{SITE.phoneDisplay}</a>
          </span>
        </div>
      </div>

      <header className="header" onMouseLeave={() => setMega(false)}>
        <div className="wrap header-in">
          <button className="icon-btn narrow-only" aria-label="Mở menu" onClick={() => setDrawer(true)}><Icon name="menu" size={22} stroke={1.7} /></button>
          <Link href="/" aria-label="Linh's Furniture – về trang chủ" className="logo">
            <Image src="/images/logo.png" alt="Linh's Furniture" width={177} height={30} priority />
          </Link>
          <nav aria-label="Menu chính" className="nav wide-only">
            <button className="nav-link" aria-expanded={mega} onMouseEnter={() => setMega(true)} onClick={() => setMega(!mega)}>
              Sản phẩm <Icon name="down" size={12} stroke={2} />
            </button>
            {NAV.map((n) => <Link key={n.label} href={n.href} className="nav-link">{n.label}</Link>)}
          </nav>
          <div className="header-actions">
            <Link href="/tim-kiem" className="icon-btn" aria-label="Tìm kiếm sản phẩm"><Icon name="search" /></Link>
            <Link href="/en" hrefLang="en" className="icon-btn desk-only lang" aria-label="Switch to English">EN</Link>
            <Link href="/gio-hang" className="icon-btn" aria-label="Giỏ hàng"><Icon name="bag" /></Link>
          </div>
        </div>
        {mega && (
          <div className="mega wide-only">
            <div className="wrap mega-in">
              {MEGA.map((c) => (
                <div key={c.title} className="mega-col">
                  <Link href={c.href} className="mega-thumb card"><Image src={c.img} alt="" fill sizes="180px" /></Link>
                  <Link href={c.href} className="mega-title">{c.title}</Link>
                  {c.items.map((it) => <Link key={it} href={c.href} className="mega-item">{it}</Link>)}
                </div>
              ))}
              <Link href="/lien-he" className="mega-promo card">
                <Image src="/images/hero.webp" alt="" fill sizes="320px" />
                <span className="mega-promo-text">
                  <span className="kicker light">Ghé showroom</span>
                  <span className="mega-promo-title">Xem tận tay giường, tủ, bàn ăn ở 67 Xuân Thủy</span>
                  <span className="underline">Xem trang showroom</span>
                </span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {drawer && (
        <div className="drawer-wrap">
          <button className="drawer-backdrop" aria-label="Đóng menu" onClick={() => setDrawer(false)} />
          <nav className="drawer" aria-label="Menu">
            <div className="drawer-head">
              <Image src="/images/logo.png" alt="Linh's Furniture" width={141} height={24} />
              <button className="icon-btn" aria-label="Đóng menu" onClick={() => setDrawer(false)}><Icon name="close" stroke={1.8} /></button>
            </div>
            <form className="drawer-search" action="/tim-kiem" role="search">
              <Icon name="search" size={18} />
              <label className="sr-only" htmlFor="m-search">Tìm sản phẩm</label>
              <input id="m-search" name="q" type="search" placeholder="Tìm giường, tủ, mã C836A…" />
            </form>
            <p className="drawer-label">Mua theo phòng</p>
            <div className="drawer-rooms">
              {MEGA.map((c) => (
                <Link key={c.title} href={c.href} className="drawer-room card" onClick={() => setDrawer(false)}>
                  <span className="drawer-room-img"><Image src={c.img} alt="" fill sizes="112px" /></span>{c.title}
                </Link>
              ))}
            </div>
            <div className="drawer-links">
              {NAV.map((n) => (
                <Link key={n.label} href={n.href} className="drawer-link" onClick={() => setDrawer(false)}>
                  <span>{n.label}</span><Icon name="right" size={16} stroke={1.8} />
                </Link>
              ))}
            </div>
            <div className="drawer-foot">
              <div className="drawer-card">
                <OpenStatus />
                <p className="small">{SITE.addressShort}</p>
                <div className="drawer-actions">
                  <button className="btn btn-primary btn-sm" onClick={() => { setDrawer(false); booking.open(); }}>Đặt lịch xem showroom</button>
                  <a className="icon-btn bordered" href={SITE.maps} target="_blank" rel="noopener" aria-label="Chỉ đường"><Icon name="pin" size={18} /></a>
                  <a className="icon-btn bordered" href={`tel:${SITE.phone}`} aria-label={`Gọi ${SITE.phoneDisplay}`}><Icon name="phone" size={18} /></a>
                </div>
              </div>
              <Link href="/en" hrefLang="en" className="drawer-en">English</Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
