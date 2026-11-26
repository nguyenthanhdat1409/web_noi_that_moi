'use client';
import { useBooking } from './Booking';

export default function BookingButton({ className = 'btn btn-primary', product, children = 'Đặt lịch xem showroom' }: { className?: string; product?: string; children?: React.ReactNode }) {
  const { open } = useBooking();
  return <button type="button" className={className} onClick={() => open(product)}>{children}</button>;
}
