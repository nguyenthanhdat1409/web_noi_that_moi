import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="wrap notfound">
      <h1 className="h2">Trang đang trong quá trình xây dựng</h1>
      <p className="muted">Nội dung sẽ sớm được cập nhật. Bạn có thể quay lại trang chủ hoặc xem bộ sưu tập.</p>
      <div className="actions"><Link href="/" className="btn btn-primary btn-square">Về trang chủ</Link><Link href="/#bo-suu-tap" className="btn-text">Xem bộ sưu tập</Link></div>
    </section>
  );
}
