import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { MoodState } from '@/types';

interface Props {
  mood: MoodState | null;
}

interface Palette {
  bg: string;
  blobs: string[];
  accent: string;
}

const palettes: Record<string, Palette> = {
  happy: { bg: 'from-yellow-400 via-orange-400 to-pink-400', blobs: ['#fbbf24', '#fb923c', '#f472b6'], accent: '#f59e0b' },
  sad: { bg: 'from-slate-600 via-blue-700 to-slate-800', blobs: ['#475569', '#1d4ed8', '#334155'], accent: '#3b82f6' },
  angry: { bg: 'from-red-700 via-red-900 to-slate-900', blobs: ['#dc2626', '#7f1d1d', '#1e293b'], accent: '#ef4444' },
  anxious: { bg: 'from-purple-500 via-indigo-600 to-slate-700', blobs: ['#7c3aed', '#4f46e5', '#334155'], accent: '#6366f1' },
  calm: { bg: 'from-teal-400 via-cyan-500 to-blue-500', blobs: ['#2dd4bf', '#06b6d4', '#3b82f6'], accent: '#14b8a6' },
  motivated: { bg: 'from-orange-500 via-red-500 to-slate-700', blobs: ['#f97316', '#ef4444', '#334155'], accent: '#f97316' },
  focused: { bg: 'from-slate-600 via-blue-700 to-indigo-800', blobs: ['#475569', '#1d4ed8', '#3730a3'], accent: '#3b82f6' },
  confident: { bg: 'from-amber-500 via-orange-600 to-slate-800', blobs: ['#f59e0b', '#ea580c', '#1e293b'], accent: '#f59e0b' },
  romantic: { bg: 'from-rose-400 via-pink-500 to-red-500', blobs: ['#fb7185', '#ec4899', '#ef4444'], accent: '#f43f5e' },
  nostalgic: { bg: 'from-amber-400 via-orange-500 to-slate-600', blobs: ['#fbbf24', '#f97316', '#475569'], accent: '#f59e0b' },
  contemplative: { bg: 'from-slate-500 via-indigo-700 to-slate-800', blobs: ['#64748b', '#4338ca', '#1e293b'], accent: '#6366f1' },
  melancholic: { bg: 'from-slate-500 via-blue-600 to-slate-700', blobs: ['#64748b', '#2563eb', '#334155'], accent: '#64748b' },
  dreamy: { bg: 'from-purple-400 via-indigo-400 to-cyan-400', blobs: ['#a78bfa', '#818cf8', '#22d3ee'], accent: '#a78bfa' },
  cool: { bg: 'from-slate-600 via-purple-700 to-slate-800', blobs: ['#475569', '#7c3aed', '#1e293b'], accent: '#7c3aed' },
  energetic: { bg: 'from-pink-400 via-orange-400 to-yellow-400', blobs: ['#f472b6', '#fb923c', '#fbbf24'], accent: '#ec4899' },
  playful: { bg: 'from-cyan-400 via-pink-400 to-yellow-400', blobs: ['#22d3ee', '#f472b6', '#fbbf24'], accent: '#ec4899' },
  lonely: { bg: 'from-slate-600 via-blue-800 to-slate-900', blobs: ['#475569', '#1e40af', '#0f172a'], accent: '#3b82f6' },
  heartbroken: { bg: 'from-slate-500 via-rose-700 to-slate-800', blobs: ['#64748b', '#be123c', '#1e293b'], accent: '#e11d48' },
  frustrated: { bg: 'from-orange-600 via-red-700 to-slate-800', blobs: ['#ea580c', '#dc2626', '#1e293b'], accent: '#f97316' },
  stressed: { bg: 'from-red-500 via-purple-600 to-slate-700', blobs: ['#ef4444', '#9333ea', '#334155'], accent: '#a855f7' },
  overwhelmed: { bg: 'from-indigo-500 via-purple-600 to-slate-700', blobs: ['#6366f1', '#9333ea', '#334155'], accent: '#818cf8' },
  tired: { bg: 'from-slate-500 via-indigo-600 to-slate-700', blobs: ['#64748b', '#4f46e5', '#334155'], accent: '#6366f1' },
  neutral: { bg: 'from-slate-400 via-blue-500 to-slate-600', blobs: ['#94a3b8', '#3b82f6', '#475569'], accent: '#64748b' },
};

export function DynamicBackground({ mood }: Props) {
  const palette = useMemo<Palette>(() => {
    if (!mood) return palettes.neutral;
    return palettes[mood.emotion] ?? palettes.neutral;
  }, [mood]);

  const blobs = useMemo(() => {
    const speed = mood ? (mood.energy / 10) * 20 + 10 : 15;
    return palette.blobs.map((color, i) => ({
      color,
      x: [`${10 + i * 25}%`, `${70 - i * 15}%`, `${20 + i * 20}%`],
      y: [`${15 + i * 20}%`, `${60 - i * 10}%`, `${30 + i * 15}%`],
      scale: [1, 1.3 + i * 0.2, 1],
      duration: speed + i * 5,
      delay: i * 2,
    }));
  }, [mood, palette]);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${palette.bg} transition-all duration-1000`}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen filter blur-[80px] opacity-60"
          style={{
            width: '40vw',
            height: '40vw',
            background: blob.color,
          }}
          animate={{
            x: blob.x,
            y: blob.y,
            scale: blob.scale,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: blob.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
