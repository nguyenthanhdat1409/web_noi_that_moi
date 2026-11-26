'use client';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <html lang="vi">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#FBF8F3', color: '#231C17', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12 }}>Có lỗi xảy ra</h1>
          <p style={{ color: '#6A5D50', marginBottom: 24 }}>Ứng dụng gặp sự cố nghiêm trọng. Vui lòng thử lại.</p>
          <button onClick={reset} style={{ padding: '14px 28px', background: '#2E5E4E', color: '#fff', border: 0, borderRadius: 2, cursor: 'pointer', fontWeight: 600, fontSize: 14, letterSpacing: 1 }}>
            Thử lại
          </button>
        </div>
      </body>
    </html>
  );
}
