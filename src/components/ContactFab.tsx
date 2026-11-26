'use client';
import { useRef, useState } from 'react';
import { SITE } from '@/data/site';
import { useBooking } from './Booking';
import Icon from './Icon';

export default function ContactFab() {
  const [open, setOpen] = useState(false);
  const booking = useBooking();
  const fabRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={fabRef} className="fab">
      {/* Menu – dùng visibility+opacity thay vì conditional render để tránh layout jump */}
      <div className={`fab-menu${open ? ' fab-menu-open' : ''}`} aria-hidden={!open}>
        <a className="fab-item" href={SITE.zalo} target="_blank" rel="noopener noreferrer">
          Chat Zalo
          <span className="fab-dot zalo" aria-hidden="true">Z</span>
        </a>
        <a className="fab-item" href={`tel:${SITE.phone}`}>
          {SITE.phoneDisplay}
          <span className="fab-dot ink" aria-hidden="true"><Icon name="phone" size={18} /></span>
        </a>
        <button
          className="fab-item"
          onClick={() => { setOpen(false); booking.open(); }}
        >
          Đặt lịch xem showroom
          <span className="fab-dot accent" aria-hidden="true"><Icon name="calendar" size={18} /></span>
        </button>
      </div>

      <button
        className="fab-main fab-main-contact"
        aria-expanded={open}
        aria-label={open ? 'Đóng liên hệ nhanh' : 'Liên hệ nhanh: Zalo, gọi, đặt lịch'}
        onClick={() => setOpen(!open)}
      >
        {open
          ? <Icon name="close" size={22} stroke={2} />
          : <><Icon name="phone" size={20} /><span className="fab-main-label">Liên hệ</span></>
        }
      </button>
    </div>
  );
}
