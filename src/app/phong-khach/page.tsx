import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Nội thất Phòng Khách Gỗ Tự Nhiên Quận 2',
  description: 'Sofa gỗ, bàn cafe, kệ tivi, ghế đơn phong cách Đông Dương – gỗ tự nhiên có sẵn và đặt làm theo kích thước. Showroom tại Thảo Điền, Quận 2, TP.HCM.',
  alternates: { canonical: '/phong-khach' },
  openGraph: { title: 'Nội thất Phòng Khách Gỗ Tự Nhiên | Linh\'s Furniture Thảo Điền Quận 2', description: 'Sofa gỗ, bàn cafe, kệ tivi phong cách Đông Dương. Showroom 67 Xuân Thủy, Thảo Điền, Quận 2.' },
};
export default function PhongKhachPage() {
  return (
    <section className="wrap section" style={{ minHeight: '60vh' }}>
      <p className="kicker accent">Không gian</p>
      <h1 className="h2">Nội thất phòng khách</h1>
      <p className="muted" style={{ marginTop: 12 }}>Danh mục sản phẩm đang được cập nhật. Ghé showroom 67 Xuân Thủy, Thảo Điền, Quận 2 để xem trực tiếp.</p>
    </section>
  );
}
