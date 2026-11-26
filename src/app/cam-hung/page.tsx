import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cảm hứng Nội thất Gỗ Đông Dương | Linh\'s Furniture',
  description:
    'Góc nhìn về cách bố trí, phối màu và chọn đồ gỗ cho căn nhà của bạn – từ phòng ngủ Đông Dương đến góc làm việc tại nhà, do đội ngũ Linh\'s Furniture tuyển chọn.',
  alternates: { canonical: '/cam-hung' },
  openGraph: {
    title: 'Cảm hứng Nội thất Gỗ Đông Dương | Linh\'s Furniture',
    description:
      'Bài viết về bố trí căn hộ, phối đồ gỗ, lựa màu tủ sơn và nhận biết phong cách Đông Dương thật sự.',
  },
};

const FILTER_TABS = [
  'Tất cả',
  'Bố trí căn hộ',
  'Phối đồ',
  'Màu sắc',
  'Phong cách',
] as const;

interface Article {
  cat: string;
  title: string;
  desc: string;
  href: string;
}

const ARTICLES: Article[] = [
  {
    cat: 'Bố trí căn hộ',
    title: 'Phòng ngủ Đông Dương trong căn hộ hai phòng ngủ',
    desc: 'Chọn giường, tủ đầu giường và ánh sáng sao cho ấm mà không nặng nề.',
    href: '/cam-hung/phong-ngu-dong-duong',
  },
  {
    cat: 'Phối đồ',
    title: 'Gối nhung và giường gỗ: phối màu sao cho ấm',
    desc: 'Màu nhung đậm hay nhạt, kẻ hay trơn – cách chọn gối phù hợp với giường gỗ tự nhiên.',
    href: '/cam-hung/goi-nhung-giuong-go',
  },
  {
    cat: 'Màu sắc',
    title: 'Tủ sơn màu: chọn màu nào cho phòng khách?',
    desc: 'Từ cam đỏ đến xanh rêu – cách chọn màu tủ làm điểm nhấn mà không lố.',
    href: '/cam-hung/chon-mau-tu-son',
  },
  {
    cat: 'Bố trí căn hộ',
    title: 'Phòng ăn nhỏ dưới 12m²: chọn bàn ăn gỗ nào?',
    desc: 'Bàn tròn hay chữ nhật, chân xéo hay chân thẳng – tất cả phụ thuộc vào hình dáng phòng.',
    href: '/cam-hung/ban-an-phong-nho',
  },
  {
    cat: 'Phong cách',
    title: '5 dấu hiệu nhận biết nội thất Đông Dương thật sự',
    desc: 'Không phải cứ gỗ tối màu là Đông Dương. Những chi tiết nhỏ mới là thứ tạo nên phong cách.',
    href: '/cam-hung/nhan-biet-noi-that-dong-duong',
  },
  {
    cat: 'Bố trí căn hộ',
    title: 'Góc làm việc tại nhà: đủ ánh sáng, đủ gọn',
    desc: 'Bàn gỗ tự nhiên, kệ sách thấp và một cây đèn bàn – công thức căn bản cho home office.',
    href: '/cam-hung/goc-lam-viec-tai-nha',
  },
];

function CameraIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export default function CamHungPage() {
  return (
    <>
      {/* ── Page header ── */}
      <header className="ch-header wrap">
        <p className="kicker">Cảm hứng</p>
        <h1 className="display" style={{ marginBottom: 0 }}>
          Không gian sống
        </h1>
        <p className="lead ch-lead">
          Góc nhìn về cách bố trí, phối màu và chọn đồ gỗ cho căn nhà của bạn.
        </p>
      </header>

      {/* ── Filter tabs ── */}
      <div className="wrap ch-tabs-wrap" role="navigation" aria-label="Lọc bài viết">
        <div className="tabs" role="tablist">
          {FILTER_TABS.map((label, i) => (
            <button
              key={label}
              role="tab"
              className="tab"
              aria-selected={i === 0}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Articles grid ── */}
      <main className="wrap ch-grid-wrap">
        <div className="ch-grid">
          {ARTICLES.map((article) => (
            <article key={article.href} className="ch-card card">
              {/* Placeholder image */}
              <div className="ch-img-wrap">
                <div className="ch-img-placeholder">
                  <CameraIcon />
                  <span className="ch-img-label">Ảnh minh hoạ</span>
                </div>
              </div>

              {/* Card body */}
              <div className="ch-card-body">
                <p className="kicker kicker--small accent" style={{ marginBottom: 8 }}>
                  {article.cat}
                </p>
                <h2 className="ch-card-title card-title">
                  <Link href={article.href} className="ch-card-title-link">
                    {article.title}
                  </Link>
                </h2>
                <p className="ch-card-desc muted">{article.desc}</p>
                <Link href={article.href} className="link-more ch-read-more">
                  Đọc tiếp
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* ── CTA ── */}
      <section className="ch-cta-band band section-band" aria-label="Liên hệ tư vấn">
        <div className="wrap center-text">
          <h2 className="h2 ch-cta-heading">
            Có câu hỏi về nội thất cho căn nhà của bạn?
          </h2>
          <div className="ch-cta-actions">
            <Link href="/lien-he" className="btn btn-primary btn-square">
              Ghé showroom tư vấn
            </Link>
            <Link href="/san-pham" className="btn-text">
              Xem sản phẩm
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
