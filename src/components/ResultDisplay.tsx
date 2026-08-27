import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Heart, Share2, RotateCcw, ChevronDown, ChevronUp, Film, User, Sparkles } from 'lucide-react';
import type { Recommendation, MoodState, Persona, MovieScene } from '@/types';

interface Props {
  recommendations: Recommendation[];
  mood: MoodState;
  persona: Persona;
  movieScene: MovieScene;
  onRestart: () => void;
}

export function ResultDisplay({ recommendations, mood, persona, movieScene, onRestart }: Props) {
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [shared, setShared] = useState(false);
  const top = recommendations[0];
  const alternatives = recommendations.slice(1);

  const handleShare = async () => {
    const text = `My vibe right now: ${mood.emotion} (energy ${mood.energy}/10). Vibe Check recommended "${top.song.title}" by ${top.song.artist}. What's your vibe?`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'My Vibe Check', text });
      } else {
        await navigator.clipboard.writeText(text);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch {
      // user cancelled share — no action needed
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Mood summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-6"
      >
        <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Your vibe</p>
        <h2 className="text-3xl font-bold text-white capitalize">{mood.emotion}</h2>
        <div className="flex items-center justify-center gap-4 mt-2 text-white/70 text-sm">
          <span>Energy: {mood.energy}/10</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>Mood: {mood.valence}/10</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="capitalize">{mood.timeOfDay}</span>
        </div>
      </motion.div>

      {/* Main song card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl"
      >
        <div className="flex items-start gap-4">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${top.song.coverColor} flex items-center justify-center flex-shrink-0 shadow-lg`}
          >
            <Music className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-bold text-white truncate">{top.song.title}</h3>
            <p className="text-lg text-white/80 truncate">{top.song.artist}</p>
            <p className="text-sm text-white/50 mt-1">
              {top.song.genre} · {top.song.year}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {top.song.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Match score */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${top.score}%` }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden"
        >
          <div className="h-full bg-gradient-to-r from-white/60 to-white rounded-full" />
        </motion.div>
        <p className="text-right text-white/50 text-xs mt-1">{top.score}% match</p>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowWhy(!showWhy)}
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Why this song?
            {showWhy ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors"
          >
            <Share2 className="w-4 h-4" />
            {shared ? 'Copied!' : 'Share'}
          </motion.button>
        </div>

        {/* Why this song */}
        <AnimatePresence>
          {showWhy && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-2">
                {top.reasons.map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-white/70 text-sm"
                  >
                    <Heart className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/50" />
                    {reason}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Persona & Movie Scene */}
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/15"
        >
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-xs uppercase tracking-wider">Your Persona</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{persona.emoji}</span>
            <h4 className="text-lg font-semibold text-white">{persona.name}</h4>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">{persona.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/15"
        >
          <div className="flex items-center gap-2 mb-2">
            <Film className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-xs uppercase tracking-wider">Your Movie Scene</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{movieScene.emoji}</span>
            <h4 className="text-lg font-semibold text-white">{movieScene.title}</h4>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">{movieScene.description}</p>
        </motion.div>
      </div>

      {/* Alternatives */}
      {alternatives.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setShowAlternatives(!showAlternatives)}
            className="w-full flex items-center justify-between text-white/70 text-sm bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl transition-colors"
          >
            <span>More recommendations ({alternatives.length})</span>
            {showAlternatives ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <AnimatePresence>
            {showAlternatives && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-2 mt-2">
                  {alternatives.map((rec, i) => (
                    <motion.div
                      key={rec.song.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rec.song.coverColor} flex items-center justify-center flex-shrink-0`}>
                        <Music className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{rec.song.title}</p>
                        <p className="text-white/60 text-sm truncate">{rec.song.artist}</p>
                      </div>
                      <span className="text-white/50 text-sm flex-shrink-0">{rec.score}%</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Restart */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onRestart}
        className="w-full mt-6 flex items-center justify-center gap-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl transition-colors border border-white/15"
      >
        <RotateCcw className="w-5 h-5" />
        Check another vibe
      </motion.button>
    </motion.div>
  );
}
