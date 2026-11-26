import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro, Playfair_Display } from 'next/font/google';
import { BookingProvider } from '@/components/Booking';
import ContactFab from '@/components/ContactFab';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SmoothScroll from '@/components/SmoothScroll';
import { SITE } from '@/data/site';
import './globals.css';

const display = Playfair_Display({ subsets: ['latin', 'vietnamese'], weight: ['500', '600'], style: ['normal', 'italic'], variable: '--font-display', display: 'swap' });
const body = Be_Vietnam_Pro({ subsets: ['latin', 'vietnamese'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Nội thất gỗ Đông Dương Quận 2 | Showroom Thảo Điền | Linh's Furniture", template: "%s | Linh's Furniture" },
  description: 'Showroom nội thất gỗ tự nhiên tại 67 Xuân Thủy, Thảo Điền, Quận 2 TP.HCM. Giường, tủ, bàn ăn, bàn thờ phong cách Đông Dương – có sẵn và đặt làm theo kích thước từ 2016. Mở cửa cả tuần.',
  keywords: ['nội thất quận 2', 'nội thất thảo điền', 'nội thất gỗ tự nhiên', 'nội thất đông dương', 'showroom nội thất quận 2', 'giường gỗ thảo điền', 'tủ gỗ quận 2', 'bàn ăn gỗ tự nhiên', 'nội thất gỗ hcm', "linh's furniture"],
  alternates: { canonical: '/', languages: { vi: '/', en: '/en', 'x-default': '/' } },
  openGraph: { type: 'website', locale: 'vi_VN', siteName: SITE.name, images: ['/images/hero.webp'], title: "Nội thất gỗ Đông Dương – Showroom Thảo Điền Quận 2 | Linh's Furniture", description: 'Giường, tủ, bàn ăn gỗ tự nhiên phong cách Đông Dương. Showroom 67 Xuân Thủy, Thảo Điền, Quận 2. Có sẵn và đặt làm theo yêu cầu.' },
};
export const viewport: Viewport = { themeColor: '#FBF8F3', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo.png`,
  image: `${SITE.url}/images/hero.webp`,
  telephone: '+84902317767',
  email: SITE.email,
  description: 'Showroom nội thất gỗ tự nhiên phong cách Đông Dương tại Thảo Điền, Quận 2, TP.HCM. Chuyên giường, tủ, bàn ăn, bàn thờ gỗ – có sẵn và đặt làm theo kích thước từ năm 2016.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '67 Xuân Thủy',
    addressLocality: 'Thảo Điền, Quận 2',
    addressRegion: 'TP. Hồ Chí Minh',
    postalCode: '700000',
    addressCountry: 'VN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  hasMap: SITE.maps,
  priceRange: '₫₫₫',
  currenciesAccepted: 'VND',
  paymentAccepted: 'Cash, Bank Transfer',
  areaServed: ['Quận 2', 'Thảo Điền', 'An Phú', 'Thủ Đức', 'TP. Hồ Chí Minh'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:00', closes: '18:00' },
  ],
  sameAs: [SITE.facebook, SITE.instagram],
  foundingDate: '2016',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="skip">Bỏ qua menu</a>
        <SmoothScroll>
          <CustomCursor />
          <BookingProvider>
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <ContactFab />
          </BookingProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
