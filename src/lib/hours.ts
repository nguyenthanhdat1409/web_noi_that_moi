import { HOURS } from '@/data/site';

/** Trạng thái mở cửa theo giờ Việt Nam (Asia/Ho_Chi_Minh), không phụ thuộc múi giờ máy khách. */
export function getOpenStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(now);
  const wd = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon';
  const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(wd);
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0) + Number(parts.find((p) => p.type === 'minute')?.value ?? 0) / 60;
  const today = HOURS[dow];
  const isOpen = !!today && hour >= today.open && hour < today.close;
  let text: string;
  if (isOpen) text = `Đang mở cửa · đến ${today!.close}:00 hôm nay`;
  else if (today && hour < today.open) text = `Chưa mở cửa · mở lúc ${today.open}:00 hôm nay`;
  else text = 'Đã đóng cửa · mở lại 9:00 sáng mai';
  return { isOpen, text, dow, hour };
}
