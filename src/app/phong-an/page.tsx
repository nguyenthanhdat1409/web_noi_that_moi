import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Bàn Ăn & Nội thất Phòng Ăn Gỗ Tự Nhiên Quận 2',
  description: 'Bàn ăn, ghế ăn, tủ chén gỗ tự nhiên phong cách Đông Dương – có sẵn và đặt làm. Showroom nội thất gỗ tại Thảo Điền, Quận 2, TP.HCM.',
  alternates: { canonical: '/phong-an' },
  openGraph: { title: 'Bàn Ăn & Nội thất Phòng Ăn Gỗ Tự Nhiên | Linh\'s Furniture Quận 2', description: 'Bàn ăn gỗ tự nhiên, ghế ăn, tủ chén phong cách Đông Dương. Showroom 67 Xuân Thủy, Thảo Điền, Quận 2.' },
};
export default function PhongAnPage() {
  return (
    <section className="wrap section" style={{ minHeight: '60vh' }}>
      <p className="kicker accent">Không gian</p>
      <h1 className="h2">Nội thất phòng ăn</h1>
      <p className="muted" style={{ marginTop: 12 }}>Danh mục sản phẩm đang được cập nhật. Ghé showroom 67 Xuân Thủy, Thảo Điền, Quận 2 để xem trực tiếp.</p>
    </section>
  );
}
