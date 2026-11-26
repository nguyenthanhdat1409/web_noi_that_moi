// Thông tin dùng chung toàn web. Sau này lấy từ admin (Payload CMS → Global "Cài đặt doanh nghiệp").
export const SITE = {
  name: "Linh's Furniture",
  url: 'https://linhfurniture.com',
  company: 'Công ty TNHH Một Thành Viên Đồ Gỗ Linh',
  taxId: '0319174441',
  phone: '0902317767',
  phoneDisplay: '0902 317 767',
  email: 'linhnguyen@linhfurniture.com',
  zalo: 'https://zalo.me/0902317767',
  maps: 'https://www.google.com/maps/place/Linh%27s+Furniture/@10.803745,106.7313128,17z',
  address: '67 Xuân Thủy, Phường An Khánh, TP.HCM',
  addressShort: '67 Xuân Thủy, Thảo Điền, Q.2',
  geo: { lat: 10.803745, lng: 106.7313128 },
  facebook: 'https://www.facebook.com/linhsfurniture/',
  instagram: 'https://www.instagram.com/linhfurniture67/',
  promo: 'Miễn phí giao hàng & lắp đặt nội khu Quận 2, Thủ Đức · Ghé showroom 67 Xuân Thủy, Thảo Điền',
};

// Giờ mở cửa theo thứ trong tuần (0 = Chủ nhật).
export const HOURS: Record<number, { open: number; close: number } | null> = {
  0: { open: 9, close: 18 },
  1: { open: 9, close: 19 },
  2: { open: 9, close: 19 },
  3: { open: 9, close: 19 },
  4: { open: 9, close: 19 },
  5: { open: 9, close: 19 },
  6: { open: 9, close: 19 },
};
export const HOURS_TEXT = 'Thứ 2 – Thứ 7: 9:00 – 19:00 · Chủ nhật: 9:00 – 18:00';

export const NAV = [
  { label: 'Bộ sưu tập', href: '/#bo-suu-tap' },
  { label: 'Phong cách', href: '/phong-cach' },
  { label: 'Không gian', href: '/khong-gian' },
  { label: 'Cảm hứng', href: '/cam-hung' },
  { label: 'Về chúng tôi', href: '/ve-chung-toi' },
  { label: 'Liên hệ', href: '/lien-he' },
];

export const MEGA = [
  { title: 'Phòng khách', href: '/phong-khach', img: '/images/cafe727.webp', items: ['Sofa 2–3 chỗ', 'Sofa góc chữ L', 'Sofa gỗ – daybed', 'Ghế đơn', 'Bàn console', 'Bàn cafe', 'Kệ tivi', 'Bàn bên'] },
  { title: 'Phòng ăn', href: '/phong-an', img: '/images/ban851.webp', items: ['Bàn ăn', 'Ghế ăn', 'Tủ chén'] },
  { title: 'Phòng ngủ', href: '/phong-ngu', img: '/images/bed.webp', items: ['Giường gỗ', 'Giường bọc vải', 'Tủ đầu giường – tủ hộc'] },
  { title: 'Phòng làm việc', href: '/phong-lam-viec', img: '/images/desk.webp', items: ['Bàn làm việc', 'Kệ sách – tủ sách'] },
  { title: 'Tủ sơn màu & bàn thờ', href: '/tu-son-mau', img: '/images/tu819.webp', items: ['Tủ sơn màu', 'Bàn thờ đứng', 'Tủ thờ'] },
  { title: 'Phụ kiện trang trí', href: '/phu-kien', img: '/images/den42.webp', items: ['Đèn gốm', 'Đèn', 'Tượng gỗ', 'Gương', 'Gốm sứ', 'Đôn – ghế băng', 'Tranh trang trí'] },
];

export const slug = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
