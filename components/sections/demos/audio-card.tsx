"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AudioCardProps {
  audioSrc: string;
  title?: string;
}

/**
 * AudioCard Component
 * A minimal, WhatsApp-style audio player with a simulated waveform visualizer.
 * Adapts to the project's custom theme variables.
 */
export function AudioCard({ audioSrc, title }: AudioCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Generate deterministic bar heights to avoid hydration mismatch (SSR vs CSR)
  const bars = useMemo(() => {
    return Array.from({ length: 45 }, (_, i) => {
      // Deterministic "random" heights based on index
      const pseudoRandom = Math.abs(Math.sin(i + 1) * 10000) % 1;
      return Math.floor(pseudoRandom * 50) + 15;
    });
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      const current = audio.currentTime;
      const total = audio.duration || 1;
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const clickPercent = Math.max(0, Math.min(1, x / width));

    audio.currentTime = clickPercent * audio.duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="caleb-card  w-[clamp(20rem,40vw,24rem)]    flex flex-col gap-3 group">
      {title && (
        <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60 ml-1">
          {title}
        </span>
      )}

      <div className="flex items-center gap-4">
        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={audioSrc}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
        />

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-text text-bg hover:scale-105 active:scale-95 transition-all focus:outline-none shadow-md cursor-pointer"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <Pause size={20} fill="currentColor" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="ml-1"
              >
                <Play size={20} fill="currentColor" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Visualizer & Timer Container */}
        <div className="flex-1 flex flex-col justify-center gap-2 overflow-hidden">
          {/* The Waveform Visualizer */}
          <div
            className="h-10 flex items-center gap-[3px] cursor-pointer touch-none select-none relative focus:outline-none focus-visible:ring-2 focus-visible:ring-text-muted "
            onClick={handleSeek}
            title="Click or use arrow keys to seek"
            role="slider"
            tabIndex={0}
            aria-label="Audio progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            onKeyDown={(e) => {
              const audio = audioRef.current;
              if (!audio) return;

              if (e.key === "ArrowRight") {
                e.preventDefault();
                audio.currentTime = Math.min(
                  audio.duration,
                  audio.currentTime + 5,
                );
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                audio.currentTime = Math.max(0, audio.currentTime - 5);
              } else if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                togglePlay();
              }
            }}
          >
            {bars.map((height, index) => {
              const percentIndex = (index / bars.length) * 100;
              const isActive = percentIndex < progress;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    height: isPlaying
                      ? `${height}%`
                      : `${Math.max(15, height * 0.6)}%`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className={`flex-1 rounded-full ${
                    isActive ? "bg-text" : "bg-text-muted opacity-20"
                  }`}
                />
              );
            })}
          </div>

          {/* Time Display */}
          <div className="flex justify-between text-[10px] font-bold text-text-muted/50 select-none font-mono tracking-tighter uppercase">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
