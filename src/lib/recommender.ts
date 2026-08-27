import type { MoodState, Recommendation, Song } from '@/types';
import { songs } from '@/data/songs';

export function recommend(state: MoodState): Recommendation[] {
  const results: Recommendation[] = songs.map((song) => {
    let score = 0;
    const reasons: string[] = [];

    // 1. Mood match (40% weight) — check if song.mood includes the emotion
    if (song.mood.includes(state.emotion)) {
      score += 40;
      reasons.push(`The mood "${state.emotion}" perfectly matches this song`);
    } else {
      // Partial credit for related moods
      const relatedMoods = getRelatedMoods(state.emotion);
      const overlap = song.mood.filter((m: string) => relatedMoods.includes(m));
      if (overlap.length > 0) {
        score += 20 * (overlap.length / relatedMoods.length);
        reasons.push(`Captures a ${overlap[0]} energy that fits your state`);
      }
    }

    // 2. Energy match (25% weight)
    const energyDiff = Math.abs(song.energy - state.energy);
    const energyScore = (1 - energyDiff / 10) * 25;
    score += energyScore;
    if (energyDiff <= 1) {
      reasons.push(`Energy level is right in sync with how you feel`);
    }

    // 3. Valence match (20% weight)
    const valenceDiff = Math.abs(song.valence - state.valence);
    const valenceScore = (1 - valenceDiff / 10) * 20;
    score += valenceScore;
    if (valenceDiff <= 1) {
      reasons.push(`Emotional intensity mirrors your current feelings`);
    }

    // 4. Context/tag overlap (15% weight)
    const tagOverlap = song.tags.filter((t: string) =>
      state.context.some((c: string) => t.includes(c) || c.includes(t))
    );
    if (tagOverlap.length > 0) {
      score += 15 * Math.min(tagOverlap.length / 2, 1);
      reasons.push(`Tagged for "${tagOverlap[0]}" — exactly your situation`);
    }

    // 5. Time of day bonus
    if (state.timeOfDay === 'night' && song.tags.includes('night')) {
      score += 5;
      reasons.push('Perfect for the late-night hour');
    }
    if (state.timeOfDay === 'morning' && song.valence >= 7) {
      score += 5;
      reasons.push('A great morning pick-me-up');
    }

    return { song, score: Math.round(score), reasons: reasons.slice(0, 3) };
  });

  return results.sort((a, b) => b.score - a.score).slice(0, 3);
}

function getRelatedMoods(emotion: string): string[] {
  const moodGroups: Record<string, string[]> = {
    happy: ['happy', 'energetic', 'playful', 'confident'],
    sad: ['sad', 'melancholic', 'emotional', 'heartbroken', 'lonely'],
    angry: ['angry', 'aggressive', 'rebellious', 'frustrated'],
    anxious: ['anxious', 'stressed', 'overwhelmed', 'calm'],
    calm: ['calm', 'peaceful', 'relaxed', 'dreamy'],
    motivated: ['motivated', 'determined', 'energetic', 'confident', 'focused'],
    focused: ['focused', 'calm', 'contemplative'],
    confident: ['confident', 'empowered', 'energetic', 'happy'],
    romantic: ['romantic', 'happy', 'dreamy', 'emotional'],
    nostalgic: ['nostalgic', 'melancholic', 'contemplative', 'dreamy'],
    contemplative: ['contemplative', 'melancholic', 'calm', 'nostalgic'],
    melancholic: ['melancholic', 'sad', 'contemplative', 'emotional'],
    dreamy: ['dreamy', 'calm', 'peaceful', 'ethereal'],
    cool: ['cool', 'calm', 'confident', 'nostalgic'],
    energetic: ['energetic', 'happy', 'motivated', 'confident'],
    playful: ['playful', 'happy', 'energetic'],
    lonely: ['lonely', 'sad', 'melancholic', 'contemplative'],
    heartbroken: ['heartbroken', 'sad', 'emotional', 'melancholic'],
    frustrated: ['frustrated', 'angry', 'stressed'],
    stressed: ['stressed', 'anxious', 'overwhelmed', 'frustrated'],
    overwhelmed: ['overwhelmed', 'anxious', 'stressed'],
    tired: ['tired', 'calm', 'peaceful'],
    neutral: ['calm', 'contemplative', 'peaceful'],
  };

  return moodGroups[emotion] ?? [emotion];
}
