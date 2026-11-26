import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Về Linh\'s Furniture – Nội thất Gỗ Thảo Điền từ 2016',
  description: 'Linh\'s Furniture là showroom nội thất gỗ tự nhiên phong cách Đông Dương tại Thảo Điền, Quận 2, TP.HCM từ năm 2016. Chuyên giường, tủ, bàn ăn, bàn thờ gỗ có sẵn và đặt làm.',
  alternates: { canonical: '/ve-chung-toi' },
  openGraph: { title: 'Về Linh\'s Furniture – Nội thất Gỗ Đông Dương Thảo Điền Quận 2', description: 'Showroom nội thất gỗ tự nhiên tại Thảo Điền, Quận 2 từ năm 2016. Phong cách Đông Dương – có sẵn và đặt làm.' },
};
export default function VeChungToiPage() {
  return (
    <section className="wrap section" style={{ minHeight: '60vh' }}>
      <p className="kicker gold">Về chúng tôi</p>
      <h1 className="h2">Linh&apos;s Furniture</h1>
      <p className="muted" style={{ marginTop: 12 }}>Nội dung đang được cập nhật.</p>
    </section>
  );
}
