'use client';
import { useEffect, useState } from 'react';
import { getOpenStatus } from '@/lib/hours';

/** Hiển thị trạng thái mở cửa; tính ở trình duyệt để luôn đúng giờ thực, cập nhật mỗi phút. */
export default function OpenStatus({ className = '' }: { className?: string }) {
  const [s, setS] = useState<ReturnType<typeof getOpenStatus> | null>(null);
  useEffect(() => {
    const tick = () => setS(getOpenStatus());
    tick();
    const t = setInterval(tick, 60_000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className={`status ${s?.isOpen ? 'is-open' : 'is-closed'} ${className}`} aria-live="polite">
      <span className="status-dot" aria-hidden="true" />
      {s ? s.text : 'Giờ mở cửa: 9:00 – 19:00'}
    </span>
  );
}
