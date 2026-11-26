import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Giường Gỗ & Nội thất Phòng Ngủ Đông Dương Quận 2',
  description: 'Giường gỗ tự nhiên, tủ đầu giường, tủ hộc phong cách Đông Dương – có sẵn và đặt làm theo kích thước. Showroom Thảo Điền, Quận 2, TP.HCM.',
  alternates: { canonical: '/phong-ngu' },
  openGraph: { title: 'Giường Gỗ Đông Dương & Nội thất Phòng Ngủ | Linh\'s Furniture Quận 2', description: 'Giường gỗ tự nhiên phong cách Đông Dương, tủ đầu giường. Showroom 67 Xuân Thủy, Thảo Điền, Quận 2.' },
};
export default function PhongNguPage() {
  return (
    <section className="wrap section" style={{ minHeight: '60vh' }}>
      <p className="kicker accent">Không gian</p>
      <h1 className="h2">Nội thất phòng ngủ</h1>
      <p className="muted" style={{ marginTop: 12 }}>Danh mục sản phẩm đang được cập nhật. Ghé showroom 67 Xuân Thủy, Thảo Điền, Quận 2 để xem trực tiếp.</p>
    </section>
  );
}
