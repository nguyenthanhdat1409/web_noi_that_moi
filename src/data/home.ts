// Nội dung trang chủ. Sau này lấy từ admin (Payload CMS → trình dựng trang theo khối).
export type Status = 'Có sẵn tại showroom' | 'Mới về' | 'Nhận đặt làm';

export const HERO_PICKS = [
  { name: 'Tủ gỗ 3 cánh tay nắm đồng', code: 'C815C', img: '/images/tu815.webp', alt: 'Tủ gỗ 3 cánh tay nắm đồng mã C815C tại showroom Linh\'s Furniture Thảo Điền', href: '/san-pham/tu-go-3-canh-c815c' },
  { name: 'Bàn cafe vuông có kệ', code: 'C440', img: '/images/cafe440.webp', alt: 'Bàn cafe vuông gỗ tự nhiên có kệ dưới mã C440', href: '/san-pham/ban-cafe-c440' },
  { name: 'Bàn ăn chân xéo', code: 'C852', img: '/images/ban852.webp', alt: 'Bàn ăn gỗ chân xéo mã C852 phong cách Đông Dương', href: '/san-pham/ban-an-c852' },
];

export const COLLECTIONS = {
  main: { name: 'Giường gỗ Đông Dương', kicker: 'Bộ sưu tập phòng ngủ', img: '/images/g3.webp', alt: 'Bộ sưu tập giường gỗ Đông Dương – phòng ngủ nội thất gỗ tự nhiên tại Linh\'s Furniture Quận 2', href: '/phong-ngu/giuong-go' },
  small: [
    { name: 'Tủ sơn màu', kicker: 'Điểm nhấn màu sắc', img: '/images/tu819.webp', alt: 'Tủ gỗ sơn màu cam đỏ 4 cánh tay nắm đồng mã C819 – nội thất Thảo Điền', href: '/tu-son-mau', cutout: true, pos: 'center' },
    { name: 'Mền gối nhung', kicker: 'May theo kích thước', img: '/images/g2.webp', alt: 'Mền gối nhung phối cùng giường gỗ Đông Dương – Linh\'s Furniture', href: '/men-goi-nhung', cutout: false, pos: 'center 72%' },
  ],
};

export const STYLES = [
  { name: 'Đông Dương', desc: 'Gỗ trầm, màn voan, tay nắm đồng', img: '/images/bed4.webp', alt: 'Không gian phòng ngủ phong cách Đông Dương – gỗ trầm màu, tay nắm đồng' },
  { name: 'Đương đại', desc: 'Đường nét gọn, tranh trừu tượng', img: '/images/c836b.webp', alt: 'Không gian nội thất phong cách đương đại – đường nét gọn, tranh trừu tượng' },
  { name: 'Mộc mạc', desc: 'Nắng, gỗ mộc, vải thô', img: '/images/g1.webp', alt: 'Phòng ngủ phong cách mộc mạc – gỗ tự nhiên sáng màu, vải thô' },
  { name: 'Tối giản', desc: 'Ít món, tỉ lệ chuẩn, nhiều khoảng thở', img: '/images/c485.webp', alt: 'Không gian nội thất tối giản – ít món đồ, tỉ lệ chuẩn, nhiều khoảng thở' },
];

export const SPACES = [
  { name: 'Phòng khách', href: '/phong-khach', img: '/images/cafe727.webp', alt: 'Nội thất phòng khách gỗ tự nhiên – bàn cafe, ghế sofa phong cách Đông Dương', cutout: false },
  { name: 'Phòng ăn', href: '/phong-an', img: '/images/ban851.webp', alt: 'Bàn ăn tròn gỗ chân xéo phòng ăn tại showroom Linh\'s Furniture Quận 2', cutout: true },
  { name: 'Phòng ngủ', href: '/phong-ngu', img: '/images/c780.webp', alt: 'Giường gỗ Đông Dương phòng ngủ – nội thất gỗ tự nhiên Thảo Điền', cutout: false },
  { name: 'Phòng làm việc', href: '/phong-lam-viec', img: '/images/desk.webp', alt: 'Bàn làm việc gỗ tự nhiên chân thanh mảnh – nội thất phòng làm việc', cutout: true },
  { name: 'Góc trang trí', href: '/phu-kien', img: '/images/den42.webp', alt: 'Đèn gốm và phụ kiện trang trí góc nhà phong cách Đông Dương', cutout: false },
];

export type Product = { id: string; name: string; code: string; material: string; status: Status; img: string; alt?: string; href: string };
export const PRODUCTS: Product[] = [
  { id: 'a', name: 'Tủ gỗ 3 cánh tay nắm đồng', code: 'C815C', material: 'Gỗ tự nhiên, tay nắm đồng', status: 'Có sẵn tại showroom', img: '/images/tu815.webp', alt: 'Tủ gỗ tự nhiên 3 cánh tay nắm đồng mã C815C – có sẵn tại showroom Thảo Điền Quận 2', href: '/san-pham/tu-go-3-canh-c815c' },
  { id: 'b', name: 'Bàn cafe vuông có kệ dưới', code: 'C440', material: 'Gỗ tự nhiên, nâu trầm', status: 'Có sẵn tại showroom', img: '/images/cafe440.webp', alt: 'Bàn cafe vuông gỗ tự nhiên nâu trầm có kệ dưới mã C440', href: '/san-pham/ban-cafe-c440' },
  { id: 'c', name: 'Bàn ăn chân xéo', code: 'C852', material: 'Gỗ tự nhiên, nâu trầm', status: 'Mới về', img: '/images/ban852.webp', alt: 'Bàn ăn gỗ tự nhiên nâu trầm chân xéo mã C852 – mới về tại Linh\'s Furniture', href: '/san-pham/ban-an-c852' },
  { id: 'd', name: 'Bàn ăn tròn chân xéo', code: 'C851', material: 'Gỗ tự nhiên, nâu trầm', status: 'Mới về', img: '/images/ban851.webp', alt: 'Bàn ăn tròn gỗ tự nhiên chân xéo mã C851 phong cách Đông Dương', href: '/san-pham/ban-an-tron-c851' },
  { id: 'e', name: 'Tủ sơn màu cam đỏ 4 cánh', code: 'C819', material: 'Gỗ sơn màu, tay nắm đồng', status: 'Nhận đặt làm', img: '/images/tu819.webp', alt: 'Tủ sơn màu cam đỏ 4 cánh tay nắm đồng mã C819 – đặt làm theo màu yêu cầu', href: '/san-pham/tu-son-mau-c819' },
  { id: 'f', name: 'Bàn thờ đứng đầu cuốn', code: 'C753F', material: 'Gỗ tự nhiên, nâu trầm', status: 'Nhận đặt làm', img: '/images/tho753f.webp', alt: 'Bàn thờ đứng gỗ tự nhiên đầu cuốn mã C753F – đặt làm theo kích thước', href: '/san-pham/ban-tho-c753f' },
  { id: 'g', name: 'Bàn làm việc chân thanh mảnh', code: 'C806', material: 'Gỗ tự nhiên, nâu trầm', status: 'Có sẵn tại showroom', img: '/images/desk.webp', alt: 'Bàn làm việc gỗ tự nhiên chân thanh mảnh mã C806 – có sẵn tại showroom', href: '/san-pham/ban-lam-viec-c806' },
  { id: 'h', name: 'Bàn thờ đứng mặt cong', code: 'C753H', material: 'Gỗ tự nhiên, nâu trầm', status: 'Nhận đặt làm', img: '/images/tho753h.webp', alt: 'Bàn thờ đứng gỗ tự nhiên mặt cong mã C753H – đặt làm theo kích thước nhà', href: '/san-pham/ban-tho-c753h' },
];
export const PRODUCT_TABS = [
  { id: 'noibat', label: 'Nổi bật', order: 'abecgdfh' },
  { id: 'moi', label: 'Mới về', order: 'cdabegfh' },
  { id: 'cosan', label: 'Có sẵn tại showroom', order: 'abgcdefh' },
];

export const JOURNAL = {
  main: { cat: 'Bố trí căn hộ', title: 'Phòng ngủ Đông Dương trong căn hộ hai phòng ngủ', desc: 'Chọn giường, tủ đầu giường và ánh sáng sao cho ấm mà không nặng nề.', img: '/images/c780.webp', alt: 'Phòng ngủ phong cách Đông Dương trong căn hộ – giường gỗ tự nhiên tủ đầu giường', href: '/cam-hung/phong-ngu-dong-duong' },
  side: [
    { cat: 'Phối đồ', title: 'Gối nhung và giường gỗ: phối màu sao cho ấm', img: '/images/g5.webp', alt: 'Gối nhung phối cùng giường gỗ Đông Dương – gợi ý phối màu nội thất phòng ngủ', href: '/cam-hung/goi-nhung-giuong-go', cutout: false },
    { cat: 'Màu sắc', title: 'Tủ sơn màu: chọn màu nào cho phòng khách?', img: '/images/tu819.webp', alt: 'Tủ sơn màu cam đỏ trong phòng khách – gợi ý chọn màu tủ gỗ nội thất', href: '/cam-hung/chon-mau-tu-son', cutout: true },
  ],
};
