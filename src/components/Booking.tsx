'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { HOURS, SITE } from '@/data/site';
import { getOpenStatus } from '@/lib/hours';
import Icon from './Icon';

type Ctx = { open: (product?: string) => void };
const BookingCtx = createContext<Ctx>({ open: () => {} });
export const useBooking = () => useContext(BookingCtx);

const SLOTS = ['9:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
const DOW = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

function buildDays() {
  const st = getOpenStatus();
  const start = HOURS[st.dow] && st.hour >= (HOURS[st.dow]!.close - 1) ? 1 : 0;
  const base = new Date();
  return Array.from({ length: 6 }, (_, i) => {
    const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i + start);
    const rel = i + start;
    return {
      rel,
      dow: d.getDay(),
      label: rel === 0 ? 'Hôm nay' : rel === 1 ? 'Ngày mai' : DOW[d.getDay()],
      date: `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`,
      iso: d.toISOString().slice(0, 10),
      hourNow: st.hour,
    };
  });
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [product, setProduct] = useState('');
  const [days, setDays] = useState<ReturnType<typeof buildDays>>([]);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(0);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const open = useCallback((p?: string) => {
    setProduct(p ?? '');
    setDays(buildDays());
    setDay(0); setSlot(0); setDone(false); setError('');
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [isOpen]);

  const chosen = days[day];
  const slots = useMemo(() => {
    if (!chosen) return [];
    const close = HOURS[chosen.dow]?.close ?? 19;
    return SLOTS.filter((t) => parseInt(t, 10) < close && !(chosen.rel === 0 && parseInt(t, 10) <= chosen.hourNow));
  }, [chosen]);
  const label = chosen ? `${slots[slot] ?? slots[0] ?? ''} ${chosen.rel === 0 ? 'hôm nay' : chosen.rel === 1 ? 'ngày mai' : chosen.date}` : '';

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const phone = String(fd.get('phone') || '').trim();
    if (!/^0\d{9}$/.test(phone.replace(/\s/g, ''))) { setError('Số điện thoại cần đủ 10 số, bắt đầu bằng 0.'); return; }
    setSending(true); setError('');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fd.get('name'), phone, product: fd.get('product'), date: chosen?.iso, time: slots[slot] }),
      });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      setError('Chưa gửi được lịch. Vui lòng thử lại hoặc gọi ' + SITE.phoneDisplay + '.');
    } finally { setSending(false); }
  }

  return (
    <BookingCtx.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <h2 id="booking-title" className="modal-title">Đặt lịch xem showroom</h2>
                <p className="muted small">{SITE.addressShort}</p>
              </div>
              <button className="icon-btn" aria-label="Đóng" onClick={() => setOpen(false)}><Icon name="close" size={22} /></button>
            </div>
            {!done ? (
              <form className="modal-body" onSubmit={submit}>
                <fieldset className="choice-group">
                  <legend>Ngày</legend>
                  <div className="chips scroll-x">
                    {days.map((d, i) => (
                      <button type="button" key={d.iso} aria-pressed={day === i} className="chip-day" onClick={() => { setDay(i); setSlot(0); }}>
                        <span className="muted small">{d.label}</span><b>{d.date}</b>
                      </button>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="choice-group">
                  <legend>Giờ</legend>
                  <div className="slot-grid">
                    {slots.map((t, i) => (
                      <button type="button" key={t} aria-pressed={slot === i} className="chip-slot" onClick={() => setSlot(i)}>{t}</button>
                    ))}
                  </div>
                </fieldset>
                <div className="form-grid">
                  <label>Họ và tên<input name="name" autoComplete="name" required /></label>
                  <label>Số điện thoại / Zalo<input name="phone" type="tel" autoComplete="tel" required /></label>
                  <label className="span-2">Món bạn muốn xem (không bắt buộc)<input name="product" defaultValue={product} placeholder="VD: giường gỗ, tủ sơn màu" /></label>
                </div>
                {error && <p className="form-error" role="alert">{error}</p>}
                <button className="btn btn-primary btn-block" disabled={sending || !slots.length}>{sending ? 'Đang gửi…' : `Xác nhận lịch ${label}`}</button>
              </form>
            ) : (
              <div className="modal-body center">
                <div className="done-icon"><Icon name="check" size={26} stroke={2.4} /></div>
                <p className="done-title">Đã đặt lịch {label}</p>
                <p className="muted">Linh&apos;s sẽ nhắn Zalo xác nhận trong giờ làm việc.</p>
                <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noopener">Mở chỉ đường Google Maps</a>
              </div>
            )}
          </div>
        </div>
      )}
    </BookingCtx.Provider>
  );
}
