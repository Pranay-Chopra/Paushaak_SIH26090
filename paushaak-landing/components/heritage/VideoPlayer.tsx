"use client";

import { useRef, useState } from "react";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VideoPlayer({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else container.requestFullscreen();
  };

  const seek = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div ref={containerRef} className="flex h-full w-full flex-col bg-[var(--h-bg)]">
      <video
        ref={videoRef}
        src={src}
        poster={poster || undefined}
        className="min-h-0 flex-1 bg-black"
        playsInline
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
      />

      <div className="flex items-center gap-3 border-t border-[var(--h-border)]/40 bg-[var(--h-bg)] px-4 py-3">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--h-navy)] text-[var(--h-bg)]"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
            {playing ? (
              <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
            ) : (
              <path d="M8 5v14l11-7z" className="translate-x-px" />
            )}
          </svg>
        </button>

        <span className="font-display-en w-10 flex-none text-xs text-[var(--h-ink-soft)]">
          {formatTime(currentTime)}
        </span>

        <input
          type="range"
          className="video-seek min-w-0 flex-1"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
          style={{
            background: `linear-gradient(to right, var(--h-navy) ${progress}%, var(--h-border) ${progress}%)`,
          }}
          aria-label="Seek"
        />

        <span className="font-display-en w-10 flex-none text-xs text-[var(--h-ink-soft)]">
          {formatTime(duration)}
        </span>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="flex-none text-[var(--h-ink-soft)] hover:text-[var(--h-navy)]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            {muted ? (
              <path d="M16.5 12A4.5 4.5 0 0 0 14 8v1.8l2.3 2.3c.13-.36.2-.72.2-1.1zM19 12c0 .94-.2 1.83-.54 2.64l1.51 1.51A8.9 8.9 0 0 0 21 12c0-4.28-3-7.86-7-8.75v2.06c2.89.86 5 3.54 5 6.69zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
            ) : (
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4-.91 7-4.49 7-8.77s-3-7.86-7-8.77z" />
            )}
          </svg>
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label="Fullscreen"
          className="flex-none text-[var(--h-ink-soft)] hover:text-[var(--h-navy)]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
