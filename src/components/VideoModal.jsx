import React, { useEffect, useState } from 'react';
import { CalendarCheck, Pause, Play, Sparkles, X } from 'lucide-react';

export default function VideoModal({ video, onClose, onBook }) {
  const [chapterIdx, setChapterIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setChapterIdx(0);
    setPlaying(true);
    setProgress(0);
  }, [video?.id]);

  useEffect(() => {
    if (!video) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [video, onClose]);

  useEffect(() => {
    if (!video || !playing) return undefined;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setChapterIdx((c) => (c + 1) % video.chapters.length);
          return 0;
        }
        return prev + 2;
      });
    }, 110);
    return () => clearInterval(interval);
  }, [video, playing]);

  if (!video) return null;

  const activeChapter = video.chapters[chapterIdx] || video.chapters[0];

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Promo video player: ${video.title}`}
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

        {/* Simulated HD Promo Stage */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '16 / 9',
            overflow: 'hidden',
            backgroundColor: '#040B14',
          }}
        >
          <img
            src={activeChapter.image}
            alt={activeChapter.label}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: playing ? 'scale(1.06)' : 'scale(1.0)',
              transition: 'transform 6s ease-out',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(6,16,29,0.35) 0%, rgba(6,16,29,0.2) 45%, rgba(6,16,29,0.92) 100%)',
            }}
          />

          {/* Top Reel Pill */}
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: 22,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(6, 16, 29, 0.8)',
              border: '1px solid rgba(231, 188, 72, 0.4)',
              color: '#F3D57A',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={13} aria-hidden="true" />
            <span>{video.tag} · {video.duration}</span>
          </div>

          {/* Stage Transcript Quote */}
          <div
            style={{
              position: 'absolute',
              left: 28,
              right: 28,
              bottom: 58,
              maxWidth: '64ch',
            }}
          >
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#F59451',
                marginBottom: 6,
              }}
            >
              {activeChapter.time} · {activeChapter.label}
            </div>
            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                lineHeight: 1.4,
                color: '#FFFFFF',
                margin: 0,
                textShadow: '0 2px 12px rgba(0,0,0,0.65)',
              }}
            >
              {activeChapter.caption}
            </p>
          </div>

          {/* Video Controls Bar */}
          <div
            style={{
              position: 'absolute',
              left: 20,
              right: 20,
              bottom: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause promo video' : 'Play promo video'}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: 'none',
                background: 'linear-gradient(135deg, #EA782E, #D4A017)',
                color: '#06101D',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>

            <div
              style={{
                flex: 1,
                height: 6,
                borderRadius: 999,
                background: 'rgba(255,255,255,0.2)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #E7BC48, #EA782E)',
                  transition: 'width 0.1s linear',
                }}
              />
            </div>

            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.78)', fontVariantNumeric: 'tabular-nums' }}>
              Chapter {chapterIdx + 1} / {video.chapters.length}
            </span>
          </div>
        </div>

        {/* Chapters & Action Footer */}
        <div style={{ padding: '26px 28px 30px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 18,
              marginBottom: 20,
            }}
          >
            <div>
              <h3 className="font-serif" style={{ fontSize: '1.55rem', margin: '0 0 6px' }}>
                {video.title}
              </h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.76)', fontSize: '0.96rem' }}>
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: 12,
            }}
          >
            {video.chapters.map((ch, idx) => {
              const isActive = idx === chapterIdx;
              return (
                <button
                  key={ch.label}
                  type="button"
                  onClick={() => {
                    setChapterIdx(idx);
                    setProgress(0);
                    setPlaying(true);
                  }}
                  style={{
                    textAlign: 'left',
                    padding: '12px 14px',
                    borderRadius: 12,
                    border: isActive
                      ? '1px solid #E7BC48'
                      : '1px solid rgba(255,255,255,0.12)',
                    background: isActive
                      ? 'rgba(212, 160, 23, 0.16)'
                      : 'rgba(255,255,255,0.04)',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: '#E7BC48', fontWeight: 700 }}>
                    {ch.time} · CHAPTER {idx + 1}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, marginTop: 2 }}>
                    {ch.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
