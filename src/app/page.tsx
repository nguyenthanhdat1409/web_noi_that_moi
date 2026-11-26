import type { Metadata } from 'next';
import FeaturedProducts from '@/components/FeaturedProducts';
import { BrandStory, FeaturedCollections, Hero, Journal, ShopBySpace, StyleExplorer } from '@/components/HomeSections';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Showroom Linh\'s Furniture ở đâu tại Quận 2?',
      acceptedAnswer: { '@type': 'Answer', text: 'Showroom tại 67 Xuân Thủy, Phường An Khánh, Thảo Điền, Quận 2, TP. Hồ Chí Minh. Mở cửa Thứ 2 – Thứ 7: 9:00–19:00, Chủ nhật: 9:00–18:00.' },
    },
    {
      '@type': 'Question',
      name: 'Linh\'s Furniture có nhận đặt làm nội thất theo kích thước không?',
      acceptedAnswer: { '@type': 'Answer', text: 'Có – chúng tôi nhận đặt làm giường, tủ, bàn ăn, bàn thờ theo kích thước và màu gỗ theo yêu cầu. Thời gian sản xuất thông thường 3–5 tuần.' },
    },
    {
      '@type': 'Question',
      name: 'Nội thất tại Linh\'s Furniture dùng loại gỗ gì?',
      acceptedAnswer: { '@type': 'Answer', text: 'Chúng tôi sử dụng gỗ tự nhiên (gỗ gõ đỏ, căm xe, hương, óc chó tùy dòng sản phẩm) và ghi rõ chủng loại gỗ trên từng sản phẩm. Không dùng gỗ công nghiệp cho dòng chính.' },
    },
    {
      '@type': 'Question',
      name: 'Có giao hàng và lắp đặt tại nhà không?',
      acceptedAnswer: { '@type': 'Answer', text: 'Có – miễn phí giao hàng và lắp đặt trong nội khu Quận 2 và Thủ Đức. Các quận khác trong TP.HCM có phí vận chuyển tùy khoảng cách.' },
    },
    {
      '@type': 'Question',
      name: 'Nội thất phong cách Đông Dương có phù hợp với căn hộ hiện đại không?',
      acceptedAnswer: { '@type': 'Answer', text: 'Phù hợp – các sản phẩm của Linh\'s Furniture được thiết kế với tỉ lệ vừa vặn căn hộ từ 60–150m², đường chạm tiết chế, kích thước tùy chỉnh nên dễ phối với không gian đương đại.' },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <FeaturedCollections />
      <StyleExplorer />
      <ShopBySpace />
      <FeaturedProducts />
      <Journal />
      <BrandStory />
    </>
  );
}
