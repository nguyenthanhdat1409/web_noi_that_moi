import type { Metadata } from 'next';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: "Liên hệ & Showroom Nội thất Quận 2 | Linh's Furniture",
  description:
    "Showroom nội thất gỗ Linh's Furniture tại 67 Xuân Thủy, Thảo Điền, Quận 2, TP.HCM. Mở cửa Thứ 2–Thứ 7: 9:00–19:00, Chủ nhật: 9:00–18:00. Gọi 0902 317 767 hoặc đặt lịch xem hàng online.",
  alternates: { canonical: '/lien-he' },
  openGraph: {
    title: "Showroom Nội thất Gỗ Thảo Điền Quận 2 | Linh's Furniture",
    description:
      'Ghé xem trực tiếp giường, tủ, bàn ăn gỗ tự nhiên tại 67 Xuân Thủy, Thảo Điền, Quận 2. Mở cửa cả tuần.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: SITE.name,
  url: SITE.url,
  telephone: '+84902317767',
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '67 Xuân Thủy',
    addressLocality: 'Thảo Điền, Quận 2',
    addressRegion: 'TP. Hồ Chí Minh',
    postalCode: '700000',
    addressCountry: 'VN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  hasMap: SITE.maps,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '09:00',
      closes: '18:00',
    },
  ],
};

export default function LienHePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="wrap section lienhe-wrap">
        <div className="lienhe-grid">

          {/* Cột trái – thông tin */}
          <div className="lienhe-info">
            <p className="kicker accent">Liên hệ &amp; Showroom</p>
            <h1 className="h2">
              Ghé thăm chúng tôi<br />
              <i>tại Thảo Điền, Quận 2</i>
            </h1>
            <p className="lienhe-lead">
              Showroom trưng bày đầy đủ giường, tủ, bàn ăn, bàn thờ gỗ tự nhiên.
              Bạn có thể sờ chất gỗ, xem màu thật và hỏi về đặt làm theo kích thước.
            </p>

            <address className="lienhe-address">
              <div className="lienhe-row">
                <span className="lienhe-label">Địa chỉ</span>
                <span>
                  <strong>67 Xuân Thủy, Phường An Khánh</strong><br />
                  Thảo Điền, Quận 2, TP. Hồ Chí Minh
                </span>
              </div>
              <div className="lienhe-row">
                <span className="lienhe-label">Giờ mở cửa</span>
                <span>
                  Thứ 2 – Thứ 7: <strong>9:00 – 19:00</strong><br />
                  Chủ nhật: <strong>9:00 – 18:00</strong>
                </span>
              </div>
              <div className="lienhe-row">
                <span className="lienhe-label">Điện thoại</span>
                <span>
                  <a href={`tel:${SITE.phone}`} className="lienhe-phone">
                    {SITE.phoneDisplay}
                  </a>
                  <span className="muted small"> (gọi &amp; Zalo)</span>
                </span>
              </div>
              <div className="lienhe-row">
                <span className="lienhe-label">Email</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </address>

            <div className="lienhe-actions">
              <a
                href={SITE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-square"
              >
                Chỉ đường Google Maps
              </a>
              <a
                href={SITE.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-square"
              >
                Nhắn Zalo
              </a>
            </div>
          </div>

          {/* Cột phải – bản đồ */}
          <div className="lienhe-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d106.7313128!3d10.803745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTGluaCdzIEZ1cm5pdHVyZQ!5e0!3m2!1svi!2svn!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ showroom Linh's Furniture – 67 Xuân Thủy, Thảo Điền, Quận 2"
            />
          </div>
        </div>

        {/* FAQ nhanh */}
        <div className="lienhe-faq">
          <h2 className="h2 lienhe-faq-title">Câu hỏi thường gặp</h2>
          <div className="lienhe-faq-grid">
            {[
              {
                q: 'Có cần đặt lịch trước khi ghé showroom không?',
                a: 'Không cần – bạn có thể ghé bất kỳ lúc nào trong giờ mở cửa. Tuy nhiên nếu muốn tư vấn riêng về đặt làm theo kích thước, đặt lịch trước giúp chúng tôi chuẩn bị tốt hơn.',
              },
              {
                q: 'Showroom có sản phẩm mẫu không hay chỉ nhận đặt?',
                a: 'Showroom trưng bày hơn 50 món có sẵn, bạn có thể mua và mang về ngay. Ngoài ra chúng tôi nhận đặt làm theo kích thước và màu gỗ theo yêu cầu.',
              },
              {
                q: 'Có giao hàng và lắp đặt tại nhà không?',
                a: 'Có – miễn phí giao hàng và lắp đặt trong nội khu Quận 2 và Thủ Đức. Các quận khác trong TP.HCM có phí vận chuyển tùy khoảng cách.',
              },
              {
                q: 'Thời gian làm hàng đặt mất bao lâu?',
                a: 'Thông thường 3–5 tuần tuỳ độ phức tạp và loại gỗ. Chúng tôi sẽ xác nhận thời gian cụ thể khi nhận đơn.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="lienhe-faq-item">
                <h3 className="lienhe-faq-q">{q}</h3>
                <p className="lienhe-faq-a">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
