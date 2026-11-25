import React, { useEffect } from 'react';
import { CheckCircle2, Clock, Sparkles, Users, X } from 'lucide-react';

export default function TopicDetailModal({ topic, onClose, onBook }) {
  useEffect(() => {
    if (!topic) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [topic, onClose]);

  if (!topic) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Keynote outline: ${topic.title}`}
      onClick={onClose}
    >
      <div className="modal-panel" style={{ maxWidth: 680 }} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close modal-close--light"
          onClick={onClose}
          aria-label="Close topic details"
        >
          <X size={20} />
        </button>

        <div
          style={{
            background: 'linear-gradient(135deg, #0B1B32 0%, #152E54 100%)',
            color: '#FFFFFF',
            padding: '34px 36px 28px',
            borderTopLeftRadius: 'var(--radius-lg)',
            borderTopRightRadius: 'var(--radius-lg)',
          }}
        >
          <span className="eyebrow eyebrow--light">
            PILLAR {topic.number} · {topic.tag}
          </span>
          <h3
            className="font-serif"
            style={{ fontSize: '2rem', lineHeight: 1.18, margin: '12px 0 10px' }}
          >
            {topic.title}
          </h3>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
            {topic.subtitle}
          </p>
        </div>

        <div style={{ padding: '30px 36px 36px' }}>
          <p style={{ marginTop: 0, color: 'var(--charcoal-800)', fontSize: '1.05rem' }}>
            {topic.description}
          </p>

          <div
            style={{
              padding: '18px 20px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--ivory-50)',
              border: '1px solid var(--ivory-200)',
              marginBottom: 22,
              fontSize: '0.96rem',
              color: 'var(--navy-900)',
            }}
          >
            <strong style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Sparkles size={16} color="#D9641E" aria-hidden="true" />
              Stage Approach:
            </strong>{' '}
            {topic.outlineIntro}
          </div>

          <h4
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--slate-500)',
              margin: '0 0 12px',
            }}
          >
            Audience Takeaways
          </h4>

          <ul className="check-list" style={{ marginTop: 0, marginBottom: 26 }}>
            {topic.takeaways.map((point) => (
              <li key={point}>
                <CheckCircle2 size={18} color="#D9641E" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              padding: '16px 0',
              borderTop: '1px solid var(--ivory-200)',
              borderBottom: '1px solid var(--ivory-200)',
              marginBottom: 24,
              fontSize: '0.92rem',
              color: 'var(--slate-600)',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <Clock size={16} color="#B8860B" aria-hidden="true" />
              {topic.duration}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <Users size={16} color="#B8860B" aria-hidden="true" />
              {topic.idealFor}
            </span>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                onClose();
                onBook(topic.title);
              }}
            >
              Book This Keynote
            </button>
            <button type="button" className="btn btn--outline-navy" onClick={onClose}>
              Back to Topics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
