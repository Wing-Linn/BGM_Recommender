import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

export function Analyzing() {
  const steps = [
    'Reading your emotional state...',
    'Scanning 60 songs across 15 genres...',
    'Matching energy and mood...',
    'Finding your perfect track...',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center gap-8"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="relative w-24 h-24"
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/20" />
        <div className="absolute inset-0 rounded-full border-t-2 border-white animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Music className="w-10 h-10 text-white" />
        </div>
      </motion.div>

      <div className="space-y-2 text-center">
        {steps.map((step, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.5, duration: 0.4 }}
            className="text-white/80 text-lg font-light"
          >
            {step}
          </motion.p>
        ))}
      </div>

      <motion.div
        className="flex gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-white"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
