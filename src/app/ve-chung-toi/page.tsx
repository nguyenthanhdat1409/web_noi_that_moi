import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Về Linh's Furniture – Nội thất Gỗ Thảo Điền từ 2016",
  description:
    "Linh's Furniture là showroom nội thất gỗ tự nhiên phong cách Đông Dương tại Thảo Điền, Quận 2, TP.HCM từ năm 2016. Chuyên giường, tủ, bàn ăn, bàn thờ gỗ có sẵn và đặt làm.",
  alternates: { canonical: '/ve-chung-toi' },
  openGraph: {
    title: "Về Linh's Furniture – Nội thất Gỗ Đông Dương Thảo Điền Quận 2",
    description:
      'Showroom nội thất gỗ tự nhiên tại Thảo Điền, Quận 2 từ năm 2016. Phong cách Đông Dương – có sẵn và đặt làm.',
  },
};

/* Camera SVG placeholder – dùng lại pattern giống các trang khác */
function CameraIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

const stats = [
  { number: '2016', label: 'Năm thành lập' },
  { number: '8+', label: 'Năm kinh nghiệm' },
  { number: '500+', label: 'Căn nhà đã trang trí' },
  { number: '50+', label: 'Mẫu có sẵn tại showroom' },
];

const values = [
  {
    icon: '🌳',
    title: 'Gỗ tự nhiên',
    desc: 'Ghi rõ chủng loại gỗ trên từng sản phẩm. Không dùng gỗ công nghiệp cho dòng chính.',
  },
  {
    icon: '✦',
    title: 'Thủ công',
    desc: 'Mỗi món đồ được đóng thủ công tại xưởng, kiểm tra kỹ trước khi giao.',
  },
  {
    icon: '📐',
    title: 'Theo yêu cầu',
    desc: 'Đặt làm theo đúng kích thước nhà bạn – chiều cao, chiều rộng, màu gỗ.',
  },
];

export default function VeChungToiPage() {
  return (
    <>
      {/* ===== 1. Hero ===== */}
      <section className="vct-hero">
        <div className="wrap vct-hero-in">
          <p className="kicker gold">Về chúng tôi</p>
          <h1 className="display vct-hero-h1">
            Giữ nét đẹp nhà Việt xưa,<br />
            <i>vừa vặn căn hộ hôm nay</i>
          </h1>
          <p className="vct-hero-lead">
            Từ năm 2016 ở Thảo Điền, Quận 2 – chúng tôi làm nội thất gỗ tự nhiên
            phong cách Đông Dương để sống cùng thời gian.
          </p>
        </div>
      </section>

      {/* ===== 2. Số liệu nổi bật ===== */}
      <section className="band section-band">
        <div className="wrap">
          <ul className="vct-stats" role="list">
            {stats.map(({ number, label }) => (
              <li key={label} className="vct-stat">
                <span className="vct-stat-num">{number}</span>
                <span className="vct-stat-label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 3. Câu chuyện ===== */}
      <section className="wrap section vct-story-section">
        <div className="vct-story-grid">
          {/* Placeholder ảnh */}
          <div className="vct-story-img-wrap">
            <div className="vct-placeholder vct-story-placeholder" aria-hidden="true">
              <CameraIcon />
              <span className="vct-placeholder-label">Ảnh câu chuyện</span>
            </div>
          </div>

          {/* Text */}
          <div className="vct-story-copy">
            <p className="kicker accent">Câu chuyện</p>
            <h2 className="h2">Bắt đầu từ một căn phòng</h2>
            <p className="vct-story-text">
              Linh&apos;s Furniture ra đời năm 2016 từ một ý tưởng đơn giản: đồ gỗ Việt đẹp
              không cần phải cầu kỳ hay đắt tiền. Chúng tôi chọn gỗ tự nhiên, đường chạm
              tiết chế, tay nắm đồng ấm – những chi tiết nhỏ làm nên sự khác biệt khi sống
              cùng mỗi ngày. Mỗi món đồ được làm để dùng lâu, có thể đặt theo đúng kích
              thước nhà bạn, và sẽ đẹp hơn theo thời gian.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 4. Giá trị cốt lõi ===== */}
      <section className="section-band">
        <div className="wrap">
          <div className="section-head center">
            <p className="kicker">Cam kết</p>
            <h2 className="h2">Giá trị cốt lõi</h2>
          </div>
          <ul className="vct-values" role="list">
            {values.map(({ icon, title, desc }) => (
              <li key={title} className="vct-value-card">
                <span className="vct-value-icon" aria-hidden="true">{icon}</span>
                <h3 className="vct-value-title">{title}</h3>
                <p className="vct-value-desc muted">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 5. Team / Showroom ===== */}
      <section className="vct-showroom">
        <div className="vct-showroom-placeholder" aria-hidden="true">
          <CameraIcon />
          <span className="vct-placeholder-label">Ảnh showroom</span>
        </div>
        <div className="vct-showroom-overlay">
          <div className="wrap vct-showroom-content">
            <p className="kicker light">Showroom</p>
            <h2 className="h2 h2-light vct-showroom-h2">
              Ghé thăm chúng tôi tại<br />
              <i>67 Xuân Thủy, Thảo Điền, Quận 2</i>
            </h2>
            <Link href="/lien-he" className="btn btn-outline-light btn-square vct-showroom-btn">
              Xem địa chỉ &amp; giờ mở cửa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
