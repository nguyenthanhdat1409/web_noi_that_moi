'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <section className="wrap notfound">
      <h1 className="h2">Có lỗi xảy ra</h1>
      <p className="muted">Trang gặp sự cố. Thử tải lại hoặc quay về trang chủ.</p>
      <div className="actions" style={{ marginTop: 24 }}>
        <button className="btn btn-primary btn-square" onClick={reset}>Thử lại</button>
        <Link href="/" className="btn-text">Về trang chủ</Link>
      </div>
    </section>
  );
}
