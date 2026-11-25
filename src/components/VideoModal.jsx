import React, { useEffect } from 'react';
import { CalendarCheck, X } from 'lucide-react';

export default function VideoModal({ video, onClose, onBook }) {
  useEffect(() => {
    if (!video) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [video, onClose]);

  if (!video) return null;

  const youtubeId = video.youtubeId || 'Nfel6qdXrNI';
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Video player: ${video.title}`}
      onClick={onClose}
    >
      <div className="modal-panel modal-panel--dark" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close video player"
        >
          <X size={20} />
        </button>

        <div className="video-modal-frame">
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div
          style={{
            padding: '22px 28px 26px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div>
            <span style={{ fontSize: '0.76rem', color: '#E7BC48', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {video.tag}
            </span>
            <h3 className="font-serif" style={{ fontSize: '1.45rem', margin: '4px 0 6px' }}>
              {video.title}
            </h3>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.78)', fontSize: '0.94rem', maxWidth: '58ch' }}>
              {video.description}
            </p>
          </div>
          <button
            type="button"
            className="btn btn--primary btn--sm"
            onClick={() => {
              onClose();
              onBook(video.title);
            }}
          >
            <CalendarCheck size={16} aria-hidden="true" />
            <span>Book Mark Zinder</span>
          </button>
        </div>
      </div>
    </div>
  );
}
