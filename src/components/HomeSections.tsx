import Image from 'next/image';
import Link from 'next/link';
import { COLLECTIONS, JOURNAL, SPACES, STYLES } from '@/data/home';
import BookingButton from './BookingButton';
import {
  CountUp,
  DrawLine,
  ImageReveal,
  ParallaxLayer,
  RevealHeading,
  RevealSection,
  StaggerReveal,
} from './AnimatedSection';
import SpacesCarousel from './SpacesCarousel';

// Hero được tách ra HeroAnimated (client component)
// File này export các section còn lại

export function FeaturedCollections() {
  const { main, small } = COLLECTIONS;
  return (
    <section id="bo-suu-tap" className="wrap section">
      <RevealSection>
        <div className="section-head split">
          <div>
            <p className="kicker accent">Bộ sưu tập</p>
            <RevealHeading as="h2" className="h2">Bộ sưu tập nổi bật</RevealHeading>
          </div>
          <p className="muted measure">
            Mỗi bộ sưu tập là một cách sống: chọn một bộ, xem trọn những món đi cùng nhau.
          </p>
        </div>
      </RevealSection>

      <div className="collections">
        <ImageReveal className="col-main-wrap">
          <Link href={main.href} className="col-main card col-placeholder" style={{ position: 'relative', display: 'block' }}>
            <span className="col-caption-placeholder">
              <span className="kicker light">{main.kicker}</span>
              <span className="col-title card-title">{main.name}</span>
              <span className="underline">Khám phá bộ sưu tập</span>
            </span>
          </Link>
        </ImageReveal>

        <StaggerReveal className="col-side" stagger={0.15}>
          {small.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className={`col-small card col-placeholder`}
            >
              <span className={`col-caption-placeholder ${c.cutout ? '' : ''}`}>
                <span className="kicker">{c.kicker}</span>
                <span className="col-title sm">{c.name}</span>
              </span>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

export function StyleExplorer() {
  return (
    <section className="band section-band">
      <div className="wrap">
        <RevealSection>
          <div className="section-head center">
            <p className="kicker accent">Phong cách nội thất</p>
            <RevealHeading as="h2" className="h2">
              Bạn thuộc về <i>phong cách</i> nào?
            </RevealHeading>
            <p className="muted">
              Chọn một phong cách để xem không gian mẫu và những sản phẩm được dùng trong đó.
            </p>
          </div>
        </RevealSection>

        <StaggerReveal className="styles rail" stagger={0.1} y={40}>
          {STYLES.map((s) => (
            <Link
              key={s.name}
              href={`/phong-cach/${s.name
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd')
                .replace(/\s+/g, '-')}`}
              className="style card"
            >
              <span className="style-arch style-arch-placeholder">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M8.5 5 L9.5 3 h5 l1 2" />
                </svg>
              </span>
              <span className="style-name card-title">{s.name}</span>
              <span className="muted small center-text">{s.desc}</span>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

export function ShopBySpace() {
  return (
    <section className="wrap section">
      <RevealSection>
        <div className="section-head split">
          <div>
            <p className="kicker accent">Không gian</p>
            <RevealHeading as="h2" className="h2">Khám phá không gian</RevealHeading>
          </div>
          <Link href="/san-pham" className="link-more">Tất cả sản phẩm</Link>
        </div>
      </RevealSection>
      <SpacesCarousel />
    </section>
  );
}

export function Journal() {
  const { main, side } = JOURNAL;
  return (
    <section className="wrap section">
      <RevealSection>
        <div className="section-head split">
          <div>
            <p className="kicker accent">Cảm hứng</p>
            <RevealHeading as="h2" className="h2">
              Không gian sống
            </RevealHeading>
          </div>
          <Link href="/cam-hung" className="link-more">Tất cả bài viết</Link>
        </div>
      </RevealSection>

      <div className="journal">
        <ImageReveal className="journal-main-wrap">
          <Link
            href={main.href}
            className="journal-main card journal-main-placeholder"
            style={{ display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'flex-end' }}
          >
            <span className="journal-note">
              <span className="kicker accent">{main.cat}</span>
              <span className="journal-title card-title">{main.title}</span>
              <span className="muted small">{main.desc}</span>
            </span>
          </Link>
        </ImageReveal>

        <StaggerReveal className="journal-side" stagger={0.14} y={28}>
          {side.map((j) => (
            <Link
              key={j.title}
              href={j.href}
              className="journal-item card"
            >
              <span className="journal-img journal-img-placeholder">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M8.5 5 L9.5 3 h5 l1 2" />
                </svg>
              </span>
              <span className="kicker accent">{j.cat}</span>
              <span className="journal-title sm card-title">{j.title}</span>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

export function BrandStory() {
  return (
    <section className="story">
      <div className="story-img-wrap story-img-placeholder">
        <div className="story-img story-img-empty">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="12" cy="12" r="3" />
            <path d="M8.5 5 L9.5 3 h5 l1 2" />
          </svg>
          <span className="story-img-label">Ảnh sắp cập nhật</span>
        </div>
      </div>

      <div className="story-copy">
        <RevealSection delay={0.1}>
          <p className="kicker gold">Về Linh&apos;s Furniture</p>
          <RevealHeading as="h2" className="h2 light">
            Giữ nét đẹp nhà Việt xưa, <i>vừa vặn</i> căn hộ hôm nay
          </RevealHeading>
          <p className="story-text">
            Từ năm 2016 ở Thảo Điền, Quận 2, Linh&apos;s theo đuổi một thẩm mỹ: gỗ trầm, đường chạm tiết
            chế, tay nắm đồng ấm. Mỗi món đồ được làm để dùng lâu, và có thể làm lại theo đúng kích
            thước nhà bạn.
          </p>
        </RevealSection>

        <DrawLine className="story-divider" />

        <StaggerReveal className="story-facts" stagger={0.15}>
          <div>
            <dt className="story-facts-dt">
              <CountUp to={2016} duration={1.6} className="display-num" />
            </dt>
            <dd>Bắt đầu ở Thảo Điền</dd>
          </div>
          <div>
            <dt className="story-facts-dt">Gỗ tự nhiên</dt>
            <dd>Ghi rõ trên từng sản phẩm</dd>
          </div>
          <div>
            <dt className="story-facts-dt">Theo yêu cầu</dt>
            <dd>Đổi kích thước, màu gỗ</dd>
          </div>
        </StaggerReveal>

        <RevealSection delay={0.2}>
          <Link href="/ve-chung-toi" className="btn btn-outline-light btn-square">
            Câu chuyện của chúng tôi
          </Link>
        </RevealSection>
      </div>
    </section>
  );
}

// Export Hero từ HeroAnimated để page.tsx dùng được cùng pattern
export { default as Hero } from './HeroAnimated';
