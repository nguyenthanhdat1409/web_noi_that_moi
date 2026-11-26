import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Tủ Sơn Màu & Bàn Thờ Gỗ Tự Nhiên Quận 2',
  description: 'Tủ sơn màu, bàn thờ đứng, tủ thờ gỗ tự nhiên – đặt làm theo màu và kích thước yêu cầu. Showroom nội thất gỗ tại 67 Xuân Thủy, Thảo Điền, Quận 2.',
  alternates: { canonical: '/tu-son-mau' },
  openGraph: { title: 'Tủ Sơn Màu & Bàn Thờ Gỗ Tự Nhiên | Linh\'s Furniture Quận 2', description: 'Tủ gỗ sơn màu tùy chỉnh, bàn thờ gỗ tự nhiên. Showroom 67 Xuân Thủy, Thảo Điền, Quận 2.' },
};
export default function TuSonMauPage() {
  return (
    <section className="wrap section" style={{ minHeight: '60vh' }}>
      <p className="kicker gold">Danh mục</p>
      <h1 className="h2">Tủ sơn màu & bàn thờ</h1>
      <p className="muted" style={{ marginTop: 12 }}>Danh mục sản phẩm đang được cập nhật. Ghé showroom 67 Xuân Thủy, Thảo Điền, Quận 2 để xem trực tiếp.</p>
    </section>
  );
}
