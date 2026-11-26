import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Bàn Làm Việc & Kệ Sách Gỗ Tự Nhiên Quận 2',
  description: 'Bàn làm việc, kệ sách, tủ sách gỗ tự nhiên phong cách Đông Dương – đặt làm theo kích thước. Showroom nội thất Thảo Điền, Quận 2, TP.HCM.',
  alternates: { canonical: '/phong-lam-viec' },
  openGraph: { title: 'Bàn Làm Việc Gỗ Tự Nhiên | Linh\'s Furniture Thảo Điền Quận 2', description: 'Bàn làm việc, kệ sách gỗ tự nhiên phong cách Đông Dương. Showroom 67 Xuân Thủy, Thảo Điền, Quận 2.' },
};
export default function PhongLamViecPage() {
  return (
    <section className="wrap section" style={{ minHeight: '60vh' }}>
      <p className="kicker accent">Không gian</p>
      <h1 className="h2">Nội thất phòng làm việc</h1>
      <p className="muted" style={{ marginTop: 12 }}>Danh mục sản phẩm đang được cập nhật. Ghé showroom 67 Xuân Thủy, Thảo Điền, Quận 2 để xem trực tiếp.</p>
    </section>
  );
}
