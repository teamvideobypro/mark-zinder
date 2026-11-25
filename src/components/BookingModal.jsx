import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';

export default function BookingModal({ open, contextLabel, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const isCruiseContext =
    contextLabel?.toLowerCase().includes('cruise') ||
    contextLabel?.toLowerCase().includes('sea');

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Book Mark Zinder"
      onClick={onClose}
    >
      <div className="modal-panel" style={{ maxWidth: 660 }} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close modal-close--light"
          onClick={onClose}
          aria-label="Close booking dialog"
        >
          <X size={20} />
        </button>

        <div
          style={{
            background: 'linear-gradient(135deg, #0B1B32 0%, #152E54 100%)',
            color: '#FFFFFF',
            padding: '32px 34px 26px',
            borderTopLeftRadius: 'var(--radius-lg)',
            borderTopRightRadius: 'var(--radius-lg)',
          }}
        >
          <span className="eyebrow eyebrow--light">Speaking &amp; Cruise Enrichment Desk</span>
          <h3 className="font-serif" style={{ fontSize: '1.9rem', margin: '10px 0 8px' }}>
            Book Mark Zinder
          </h3>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.84)', fontSize: '0.98rem' }}>
            {contextLabel
              ? `Inquiry focus: ${contextLabel}. Expect a personal reply within one business day.`
              : 'Request sailing dates, keynote availability, or a tailored sea-day enrichment series.'}
          </p>
        </div>

        <div style={{ padding: '28px 34px 34px' }}>
          <BookingForm
            compact
            defaultEventType={
              isCruiseContext
                ? 'Cruise Ship Enrichment Series'
                : 'Corporate / Executive Keynote'
            }
          />
        </div>
      </div>
    </div>
  );
}
