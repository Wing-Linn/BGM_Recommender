import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { DynamicBackground } from '@/components/DynamicBackground';
import { StateInput } from '@/components/StateInput';
import { Analyzing } from '@/components/Analyzing';
import { ResultDisplay } from '@/components/ResultDisplay';
import { analyzeState } from '@/lib/analyzer';
import { recommend } from '@/lib/recommender';
import { generatePersona, generateMovieScene } from '@/lib/generators';
import type { MoodState, Recommendation, Persona, MovieScene, AppPhase } from '@/types';

function App() {
  const [phase, setPhase] = useState<AppPhase>('input');
  const [mood, setMood] = useState<MoodState | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [persona, setPersona] = useState<Persona | null>(null);
  const [movieScene, setMovieScene] = useState<MovieScene | null>(null);

  const handleSubmit = (text: string) => {
    setPhase('analyzing');
    const analyzed = analyzeState(text);
    const recs = recommend(analyzed);
    const p = generatePersona(analyzed);
    const scene = generateMovieScene(analyzed);

    setTimeout(() => {
      setMood(analyzed);
      setRecommendations(recs);
      setPersona(p);
      setMovieScene(scene);
      setPhase('result');
    }, 2500);
  };

  const handleRestart = () => {
    setPhase('input');
    setMood(null);
    setRecommendations([]);
    setPersona(null);
    setMovieScene(null);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <DynamicBackground mood={phase === 'result' ? mood : null} />
      <div className="w-full max-w-2xl relative z-10">
        <AnimatePresence mode="wait">
          {phase === 'input' && <StateInput key="input" onSubmit={handleSubmit} />}
          {phase === 'analyzing' && <Analyzing key="analyzing" />}
          {phase === 'result' && mood && persona && movieScene && (
            <ResultDisplay
              key="result"
              recommendations={recommendations}
              mood={mood}
              persona={persona}
              movieScene={movieScene}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
