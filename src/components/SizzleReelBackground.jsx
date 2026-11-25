import React from 'react';

const HERO_VIDEO_ID = 'Nfel6qdXrNI';

export default function SizzleReelBackground() {
  const embedSrc = `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`;

  return (
    <div className="hero-video-bg" aria-hidden="true">
      <div className="hero-arch-grid" />
      <iframe
        className="hero-video-bg__iframe"
        src={embedSrc}
        title="Mark Zinder Hero Background Video"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
      />
      <div className="hero-video-bg__scrim" />
    </div>
  );
}
