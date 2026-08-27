import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shuffle } from 'lucide-react';
import { quickStates } from '@/lib/analyzer';

interface Props {
  onSubmit: (text: string) => void;
}

export function StateInput({ onSubmit }: Props) {
  const [text, setText] = useState('');
  const quicks = quickStates();

  const handleSubmit = () => {
    if (text.trim().length > 0) {
      onSubmit(text.trim());
    }
  };

  const surpriseMe = () => {
    const random = quicks[Math.floor(Math.random() * quicks.length)];
    setText(random.text);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold text-white mb-3 tracking-tight"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          Vibe Check
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-white/80 font-light"
        >
          Tell me how you're feeling. I'll find the perfect song.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl"
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSubmit();
          }}
          placeholder="I feel like I'm floating through a rainy night, nostalgic and a little melancholic..."
          className="w-full bg-white/5 rounded-2xl p-4 text-white placeholder-white/40 text-base resize-none focus:outline-none focus:ring-2 focus:ring-white/30 transition-all border border-white/10"
          rows={4}
          autoFocus
        />

        <div className="flex items-center justify-between mt-4 gap-3">
          <button
            onClick={surpriseMe}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors px-3 py-2 rounded-xl hover:bg-white/10"
          >
            <Shuffle className="w-4 h-4" />
            Surprise me
          </button>
          <motion.button
            whileHover={{ scale: text.trim() ? 1.03 : 1 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSubmit}
            disabled={!text.trim()}
            className="flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-2xl disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
          >
            <Sparkles className="w-5 h-5" />
            Recommend
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-6"
      >
        <p className="text-white/50 text-sm text-center mb-3">Or try a quick vibe:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {quicks.map((q) => (
            <motion.button
              key={q.label}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setText(q.text)}
              className="bg-white/10 backdrop-blur-md text-white/90 text-sm px-4 py-2 rounded-full border border-white/15 hover:bg-white/20 transition-colors"
            >
              <span className="mr-1.5">{q.emoji}</span>
              {q.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
