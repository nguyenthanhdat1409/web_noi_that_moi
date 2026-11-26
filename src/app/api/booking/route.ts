import { NextResponse } from 'next/server';

// Nhận lịch hẹn xem showroom. GĐ1: lưu vào Payload CMS (collection "lich-hen") và gửi thông báo cho nhân viên.
export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data || !/^0\d{9}$/.test(String(data.phone || '').replace(/\s/g, ''))) {
    return NextResponse.json({ ok: false, error: 'Số điện thoại không hợp lệ' }, { status: 400 });
  }
  console.log('[booking]', { name: data.name, phone: data.phone, product: data.product, date: data.date, time: data.time });
  return NextResponse.json({ ok: true });
}
