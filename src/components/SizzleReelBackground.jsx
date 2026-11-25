import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const REEL_SCENES = [
  {
    src: '/images/hero-stage-speaker.jpg',
    label: 'Clip 1/3 · Energetic Stage Opening & Humor',
    zoomFrom: 1.02,
    zoomTo: 1.1,
    panXFrom: 0,
    panXTo: -26,
  },
  {
    src: '/images/cruise-theater-packed.jpg',
    label: 'Clip 2/3 · Packing 1,000-Seat Cruise Theaters',
    zoomFrom: 1.04,
    zoomTo: 1.12,
    panXFrom: -14,
    panXTo: 16,
  },
  {
    src: '/images/sizzle-future-trends.jpg',
    label: 'Clip 3/3 · History, AI & Future Breakthroughs',
    zoomFrom: 1.03,
    zoomTo: 1.11,
    panXFrom: 12,
    panXTo: -18,
  },
];

const SCENE_DURATION_MS = 5500;
const FADE_DURATION_MS = 900;

export default function SizzleReelBackground() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = isPaused;
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isPaused]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1280;
    canvas.height = 720;

    let cancelled = false;
    let rafId = null;
    const loadedImages = new Array(REEL_SCENES.length).fill(null);

    REEL_SCENES.forEach((scene, idx) => {
      const img = new Image();
      img.src = scene.src;
      img.onload = () => {
        loadedImages[idx] = img;
      };
    });

    if (!prefersReducedMotion && typeof canvas.captureStream === 'function' && videoRef.current) {
      try {
        const stream = canvas.captureStream(30);
        videoRef.current.srcObject = stream;
        videoRef.current.play().then(() => {
          if (!cancelled) setVideoReady(true);
        }).catch(() => {});
      } catch {
        // Fallback smoothly keeps canvas visible beneath scrim
      }
    }

    let elapsed = 0;
    let lastTs = null;
    let lastReportedIdx = 0;

    const drawImageCover = (img, zoom, panX, alpha) => {
      if (!img) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      const cw = canvas.width;
      const ch = canvas.height;
      const imgRatio = img.width / img.height;
      const canvasRatio = cw / ch;

      let baseW, baseH;
      if (imgRatio > canvasRatio) {
        baseH = ch;
        baseW = ch * imgRatio;
      } else {
        baseW = cw;
        baseH = cw / imgRatio;
      }

      const drawW = baseW * zoom;
      const drawH = baseH * zoom;
      const dx = (cw - drawW) / 2 + panX;
      const dy = (ch - drawH) / 2;

      ctx.drawImage(img, dx, dy, drawW, drawH);
      ctx.restore();
    };

    const renderFrame = (now) => {
      if (cancelled) return;
      if (lastTs === null) lastTs = now;
      const dt = Math.max(0, Math.min(100, now - lastTs));
      lastTs = now;

      if (!pausedRef.current && !prefersReducedMotion) {
        elapsed = Math.max(0, elapsed + dt);
      }

      const totalLoop = SCENE_DURATION_MS * REEL_SCENES.length;
      const loopTime = ((elapsed % totalLoop) + totalLoop) % totalLoop;
      const idx = Math.max(
        0,
        Math.min(REEL_SCENES.length - 1, Math.floor(loopTime / SCENE_DURATION_MS))
      );
      const sceneTime = loopTime % SCENE_DURATION_MS;
      const progress = sceneTime / SCENE_DURATION_MS;

      if (idx !== lastReportedIdx) {
        lastReportedIdx = idx;
        setActiveSceneIdx(idx);
      }

      const currScene = REEL_SCENES[idx] || REEL_SCENES[0];
      const nextIdx = (idx + 1) % REEL_SCENES.length;
      const nextScene = REEL_SCENES[nextIdx] || REEL_SCENES[0];

      ctx.fillStyle = '#06101d';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const currZoom = currScene.zoomFrom + (currScene.zoomTo - currScene.zoomFrom) * progress;
      const currPan = currScene.panXFrom + (currScene.panXTo - currScene.panXFrom) * progress;
      drawImageCover(loadedImages[idx], currZoom, currPan, 1);

      if (sceneTime > SCENE_DURATION_MS - FADE_DURATION_MS) {
        const fadeT = (sceneTime - (SCENE_DURATION_MS - FADE_DURATION_MS)) / FADE_DURATION_MS;
        drawImageCover(loadedImages[nextIdx], nextScene.zoomFrom, nextScene.panXFrom, fadeT);
      }

      // Subtle warm golden stage spotlight sheen
      const sweepX = canvas.width * (0.58 + 0.12 * Math.sin(elapsed * 0.0005));
      const grad = ctx.createRadialGradient(sweepX, 110, 20, sweepX, 340, 620);
      grad.addColorStop(0, 'rgba(231, 188, 72, 0.14)');
      grad.addColorStop(1, 'rgba(6, 16, 29, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rafId = requestAnimationFrame(renderFrame);
    };

    rafId = requestAnimationFrame(renderFrame);

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="sizzle-bg" aria-hidden="true">
      <img
        src="/images/hero-stage-speaker.jpg"
        alt=""
        className="sizzle-bg__poster"
      />
      <canvas
        ref={canvasRef}
        className="sizzle-bg__poster"
        style={{ opacity: videoReady ? 0 : 1 }}
      />
      <video
        ref={videoRef}
        className={`sizzle-bg__video ${videoReady ? 'sizzle-bg__video--ready' : ''}`}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-stage-speaker.jpg"
      />
      <div className="sizzle-bg__scrim" />
    </div>
  );
}
