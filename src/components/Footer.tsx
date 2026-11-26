import Image from 'next/image';
import Link from 'next/link';
import { HOURS_TEXT, SITE } from '@/data/site';
import Icon from './Icon';

const products = [['Phòng khách', '/phong-khach'], ['Phòng ăn', '/phong-an'], ['Phòng ngủ', '/phong-ngu'], ['Phòng làm việc', '/phong-lam-viec'], ['Tủ sơn màu', '/tu-son-mau'], ['Bàn thờ', '/ban-tho'], ['Mền gối nhung', '/men-goi-nhung']];
const support = [['Về chúng tôi', '/ve-chung-toi'], ['Liên hệ', '/lien-he'], ['Chính sách mua hàng', '/chinh-sach/mua-hang'], ['Giao hàng & lắp đặt', '/chinh-sach/giao-hang'], ['Đổi trả & bảo hành', '/chinh-sach/doi-tra-bao-hanh'], ['Bảo mật dữ liệu', '/chinh-sach/bao-mat']];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Image src="/images/logo.png" alt="Linh's Furniture" width={177} height={30} />
          <p className="footer-about">Nội thất gỗ phong cách Đông Dương, có sẵn và đặt làm theo yêu cầu. Thảo Điền, từ 2016.</p>
          <div className="social">
            <a href={SITE.facebook} aria-label="Facebook Linh's Furniture" className="icon-btn bordered"><Icon name="fb" size={18} /></a>
            <a href={SITE.instagram} aria-label="Instagram linhfurniture67" className="icon-btn bordered"><Icon name="ig" size={18} /></a>
          </div>
        </div>
        <nav aria-label="Danh mục sản phẩm"><p className="footer-h">Sản phẩm</p>{products.map(([t, h]) => <Link key={h} href={h}>{t}</Link>)}</nav>
        <nav aria-label="Về Linh's và hỗ trợ"><p className="footer-h">Về Linh&apos;s &amp; hỗ trợ</p>{support.map(([t, h]) => <Link key={h} href={h}>{t}</Link>)}</nav>
        <div>
          <p className="footer-h">Showroom</p>
          <address>{SITE.address}<br />{HOURS_TEXT}<br /><a href={`tel:${SITE.phone}`}><b>{SITE.phoneDisplay}</b></a> (gọi, Zalo)<br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></address>
          <a href={SITE.maps} target="_blank" rel="noopener" className="link-more">Chỉ đường</a>
        </div>
      </div>
      <div className="footer-legal">
        <div className="wrap footer-legal-in">
          <span>{SITE.company} · MST {SITE.taxId} · © 2016 – {new Date().getFullYear()} {SITE.name}</span>
          <span className="placeholder-box">Logo Đã thông báo Bộ Công Thương</span>
        </div>
      </div>
    </footer>
  );
}
