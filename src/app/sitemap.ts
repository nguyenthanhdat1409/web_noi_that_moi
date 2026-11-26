import type { MetadataRoute } from 'next';
import { SITE } from '@/data/site';

const BASE = SITE.url;
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                                   lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/san-pham`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/phong-khach`,                  lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${BASE}/phong-ngu`,                    lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${BASE}/phong-an`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${BASE}/phong-lam-viec`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${BASE}/tu-son-mau`,                   lastModified: now, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${BASE}/ban-tho`,                      lastModified: now, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${BASE}/men-goi-nhung`,                lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/phong-cach`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/cam-hung`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.7  },
    { url: `${BASE}/ve-chung-toi`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/lien-he`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/chinh-sach/mua-hang`,          lastModified: now, changeFrequency: 'yearly',  priority: 0.4  },
    { url: `${BASE}/chinh-sach/giao-hang`,         lastModified: now, changeFrequency: 'yearly',  priority: 0.4  },
    { url: `${BASE}/chinh-sach/doi-tra-bao-hanh`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.4  },
  ];

  // GĐ2: bổ sung URL sản phẩm và bài viết lấy động từ CMS
  return staticPages;
}
