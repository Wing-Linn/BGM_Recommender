import type { MoodState } from '@/types';

interface KeywordMapping {
  emotion: string;
  energy: number;
  valence: number;
  context: string[];
}

const keywordMap: Record<string, KeywordMapping> = {
  // Happy
  'happy': { emotion: 'happy', energy: 7, valence: 9, context: ['joy'] },
  'great': { emotion: 'happy', energy: 7, valence: 9, context: ['joy'] },
  'amazing': { emotion: 'happy', energy: 8, valence: 10, context: ['joy'] },
  'awesome': { emotion: 'happy', energy: 8, valence: 10, context: ['joy'] },
  'excited': { emotion: 'excited', energy: 9, valence: 9, context: ['excitement'] },
  'good': { emotion: 'happy', energy: 6, valence: 8, context: ['content'] },
  'joyful': { emotion: 'happy', energy: 7, valence: 10, context: ['joy'] },
  'wonderful': { emotion: 'happy', energy: 6, valence: 9, context: ['joy'] },
  'fantastic': { emotion: 'happy', energy: 8, valence: 10, context: ['joy'] },
  'cheerful': { emotion: 'happy', energy: 7, valence: 9, context: ['joy'] },
  'delighted': { emotion: 'happy', energy: 7, valence: 9, context: ['joy'] },
  'thrilled': { emotion: 'excited', energy: 9, valence: 9, context: ['excitement'] },
  'ecstatic': { emotion: 'excited', energy: 10, valence: 10, context: ['excitement'] },
  'grateful': { emotion: 'happy', energy: 5, valence: 8, context: ['gratitude'] },
  'blessed': { emotion: 'happy', energy: 5, valence: 9, context: ['gratitude'] },
  'content': { emotion: 'calm', energy: 4, valence: 7, context: ['contentment'] },
  'sunny': { emotion: 'happy', energy: 7, valence: 9, context: ['weather'] },
  'playful': { emotion: 'playful', energy: 7, valence: 9, context: ['play'] },
  'silly': { emotion: 'playful', energy: 6, valence: 8, context: ['play'] },
  'fun': { emotion: 'playful', energy: 7, valence: 9, context: ['play'] },

  // Sad
  'sad': { emotion: 'sad', energy: 3, valence: 2, context: ['sorrow'] },
  'depressed': { emotion: 'sad', energy: 2, valence: 1, context: ['sorrow'] },
  'unhappy': { emotion: 'sad', energy: 3, valence: 2, context: ['sorrow'] },
  'down': { emotion: 'sad', energy: 3, valence: 2, context: ['sorrow'] },
  'blue': { emotion: 'sad', energy: 3, valence: 2, context: ['sorrow'] },
  'miserable': { emotion: 'sad', energy: 2, valence: 1, context: ['sorrow'] },
  'heartbroken': { emotion: 'heartbroken', energy: 2, valence: 1, context: ['heartbreak'] },
  'devastated': { emotion: 'heartbroken', energy: 2, valence: 1, context: ['heartbreak'] },
  'lonely': { emotion: 'lonely', energy: 3, valence: 2, context: ['loneliness'] },
  'alone': { emotion: 'lonely', energy: 3, valence: 2, context: ['loneliness'] },
  'empty': { emotion: 'sad', energy: 2, valence: 2, context: ['emptiness'] },
  'hurt': { emotion: 'sad', energy: 3, valence: 2, context: ['pain'] },
  'crying': { emotion: 'sad', energy: 2, valence: 1, context: ['tears'] },
  'tears': { emotion: 'sad', energy: 2, valence: 1, context: ['tears'] },
  'grief': { emotion: 'sad', energy: 2, valence: 1, context: ['grief'] },
  'grieving': { emotion: 'sad', energy: 2, valence: 1, context: ['grief'] },
  'rejected': { emotion: 'heartbroken', energy: 2, valence: 1, context: ['rejection'] },
  'dumped': { emotion: 'heartbroken', energy: 3, valence: 1, context: ['breakup'] },
  'breakup': { emotion: 'heartbroken', energy: 3, valence: 1, context: ['breakup'] },
  'broke up': { emotion: 'heartbroken', energy: 3, valence: 1, context: ['breakup'] },

  // Angry
  'angry': { emotion: 'angry', energy: 9, valence: 1, context: ['anger'] },
  'mad': { emotion: 'angry', energy: 9, valence: 1, context: ['anger'] },
  'furious': { emotion: 'angry', energy: 10, valence: 1, context: ['anger'] },
  'rage': { emotion: 'angry', energy: 10, valence: 1, context: ['rage'] },
  'pissed': { emotion: 'angry', energy: 9, valence: 1, context: ['anger'] },
  'irritated': { emotion: 'angry', energy: 7, valence: 2, context: ['irritation'] },
  'annoyed': { emotion: 'angry', energy: 7, valence: 2, context: ['irritation'] },
  'frustrated': { emotion: 'frustrated', energy: 7, valence: 2, context: ['frustration'] },
  'frustration': { emotion: 'frustrated', energy: 7, valence: 2, context: ['frustration'] },
  'fed up': { emotion: 'frustrated', energy: 7, valence: 2, context: ['frustration'] },
  'hate': { emotion: 'angry', energy: 8, valence: 1, context: ['anger'] },
  'resentful': { emotion: 'angry', energy: 7, valence: 2, context: ['resentment'] },
  'bitter': { emotion: 'angry', energy: 6, valence: 2, context: ['bitterness'] },
  'rebellious': { emotion: 'rebellious', energy: 8, valence: 3, context: ['rebellion'] },
  'defiant': { emotion: 'rebellious', energy: 8, valence: 3, context: ['rebellion'] },

  // Anxious / Stressed
  'anxious': { emotion: 'anxious', energy: 6, valence: 3, context: ['anxiety'] },
  'anxiety': { emotion: 'anxious', energy: 6, valence: 3, context: ['anxiety'] },
  'worried': { emotion: 'anxious', energy: 5, valence: 3, context: ['worry'] },
  'nervous': { emotion: 'anxious', energy: 6, valence: 3, context: ['nervousness'] },
  'stressed': { emotion: 'stressed', energy: 7, valence: 2, context: ['stress'] },
  'stress': { emotion: 'stressed', energy: 7, valence: 2, context: ['stress'] },
  'overwhelmed': { emotion: 'overwhelmed', energy: 6, valence: 2, context: ['overwhelm'] },
  'panic': { emotion: 'anxious', energy: 8, valence: 1, context: ['panic'] },
  'panicking': { emotion: 'anxious', energy: 8, valence: 1, context: ['panic'] },
  'tense': { emotion: 'anxious', energy: 6, valence: 3, context: ['tension'] },
  'afraid': { emotion: 'anxious', energy: 5, valence: 2, context: ['fear'] },
  'scared': { emotion: 'anxious', energy: 5, valence: 2, context: ['fear'] },
  'dread': { emotion: 'anxious', energy: 5, valence: 2, context: ['fear'] },

  // Calm / Relaxed
  'calm': { emotion: 'calm', energy: 3, valence: 6, context: ['calm'] },
  'relaxed': { emotion: 'calm', energy: 3, valence: 7, context: ['relaxation'] },
  'relax': { emotion: 'calm', energy: 3, valence: 7, context: ['relaxation'] },
  'peaceful': { emotion: 'calm', energy: 2, valence: 7, context: ['peace'] },
  'peace': { emotion: 'calm', energy: 2, valence: 7, context: ['peace'] },
  'serene': { emotion: 'calm', energy: 2, valence: 8, context: ['peace'] },
  'tranquil': { emotion: 'calm', energy: 2, valence: 8, context: ['peace'] },
  'chill': { emotion: 'calm', energy: 4, valence: 7, context: ['relaxation'] },
  'cozy': { emotion: 'calm', energy: 3, valence: 7, context: ['comfort'] },
  'comfortable': { emotion: 'calm', energy: 3, valence: 7, context: ['comfort'] },
  'zen': { emotion: 'calm', energy: 2, valence: 8, context: ['meditation'] },
  'meditate': { emotion: 'calm', energy: 2, valence: 7, context: ['meditation'] },
  'meditation': { emotion: 'calm', energy: 2, valence: 7, context: ['meditation'] },
  'breathing': { emotion: 'calm', energy: 2, valence: 7, context: ['meditation'] },
  'breathe': { emotion: 'calm', energy: 2, valence: 7, context: ['meditation'] },
  'restful': { emotion: 'calm', energy: 2, valence: 7, context: ['rest'] },
  'sleepy': { emotion: 'calm', energy: 2, valence: 6, context: ['sleep'] },
  'tired': { emotion: 'tired', energy: 2, valence: 4, context: ['fatigue'] },
  'exhausted': { emotion: 'tired', energy: 1, valence: 3, context: ['fatigue'] },
  'sleep': { emotion: 'calm', energy: 1, valence: 6, context: ['sleep'] },

  // Motivated / Focused
  'motivated': { emotion: 'motivated', energy: 8, valence: 7, context: ['motivation'] },
  'motivation': { emotion: 'motivated', energy: 8, valence: 7, context: ['motivation'] },
  'determined': { emotion: 'motivated', energy: 8, valence: 7, context: ['determination'] },
  'driven': { emotion: 'motivated', energy: 8, valence: 7, context: ['determination'] },
  'focused': { emotion: 'focused', energy: 6, valence: 6, context: ['focus'] },
  'focus': { emotion: 'focused', energy: 6, valence: 6, context: ['focus'] },
  'concentrate': { emotion: 'focused', energy: 6, valence: 6, context: ['focus'] },
  'productive': { emotion: 'focused', energy: 7, valence: 7, context: ['productivity'] },
  'grind': { emotion: 'motivated', energy: 9, valence: 6, context: ['hustle'] },
  'grinding': { emotion: 'motivated', energy: 9, valence: 6, context: ['hustle'] },
  'hustle': { emotion: 'motivated', energy: 9, valence: 6, context: ['hustle'] },
  'workout': { emotion: 'motivated', energy: 10, valence: 7, context: ['exercise'] },
  'exercise': { emotion: 'motivated', energy: 9, valence: 7, context: ['exercise'] },
  'gym': { emotion: 'motivated', energy: 9, valence: 7, context: ['exercise'] },
  'run': { emotion: 'motivated', energy: 9, valence: 7, context: ['exercise'] },
  'running': { emotion: 'motivated', energy: 9, valence: 7, context: ['exercise'] },
  'study': { emotion: 'focused', energy: 5, valence: 6, context: ['study'] },
  'studying': { emotion: 'focused', energy: 5, valence: 6, context: ['study'] },
  'work': { emotion: 'focused', energy: 6, valence: 6, context: ['work'] },
  'working': { emotion: 'focused', energy: 6, valence: 6, context: ['work'] },
  'flow': { emotion: 'focused', energy: 7, valence: 7, context: ['flow'] },
  'in the zone': { emotion: 'focused', energy: 7, valence: 7, context: ['flow'] },

  // Confident / Empowered
  'confident': { emotion: 'confident', energy: 7, valence: 8, context: ['confidence'] },
  'powerful': { emotion: 'confident', energy: 8, valence: 8, context: ['power'] },
  'strong': { emotion: 'confident', energy: 8, valence: 8, context: ['strength'] },
  'empowered': { emotion: 'confident', energy: 8, valence: 8, context: ['empowerment'] },
  'invincible': { emotion: 'confident', energy: 9, valence: 9, context: ['power'] },
  'proud': { emotion: 'confident', energy: 7, valence: 8, context: ['pride'] },
  'fearless': { emotion: 'confident', energy: 8, valence: 8, context: ['courage'] },
  'bold': { emotion: 'confident', energy: 7, valence: 8, context: ['confidence'] },
  'unstoppable': { emotion: 'confident', energy: 9, valence: 9, context: ['power'] },

  // Romantic
  'love': { emotion: 'romantic', energy: 5, valence: 8, context: ['love'] },
  'in love': { emotion: 'romantic', energy: 5, valence: 9, context: ['love'] },
  'loving': { emotion: 'romantic', energy: 5, valence: 8, context: ['love'] },
  'romantic': { emotion: 'romantic', energy: 4, valence: 8, context: ['romance'] },
  'crush': { emotion: 'romantic', energy: 6, valence: 8, context: ['crush'] },
  'flirty': { emotion: 'romantic', energy: 6, valence: 8, context: ['flirtation'] },
  'infatuated': { emotion: 'romantic', energy: 6, valence: 9, context: ['infatuation'] },
  'tender': { emotion: 'romantic', energy: 3, valence: 8, context: ['tenderness'] },
  'intimate': { emotion: 'romantic', energy: 4, valence: 8, context: ['intimacy'] },
  'passionate': { emotion: 'romantic', energy: 7, valence: 8, context: ['passion'] },

  // Nostalgic / Contemplative
  'nostalgic': { emotion: 'nostalgic', energy: 4, valence: 5, context: ['nostalgia'] },
  'nostalgia': { emotion: 'nostalgic', energy: 4, valence: 5, context: ['nostalgia'] },
  'reflective': { emotion: 'contemplative', energy: 3, valence: 5, context: ['reflection'] },
  'contemplative': { emotion: 'contemplative', energy: 3, valence: 5, context: ['reflection'] },
  'thinking': { emotion: 'contemplative', energy: 3, valence: 5, context: ['reflection'] },
  'pensive': { emotion: 'contemplative', energy: 3, valence: 4, context: ['reflection'] },
  'wistful': { emotion: 'nostalgic', energy: 3, valence: 4, context: ['nostalgia'] },
  'remembering': { emotion: 'nostalgic', energy: 3, valence: 5, context: ['memory'] },
  'memory': { emotion: 'nostalgic', energy: 3, valence: 5, context: ['memory'] },
  'memories': { emotion: 'nostalgic', energy: 3, valence: 5, context: ['memory'] },

  // Melancholic
  'melancholic': { emotion: 'melancholic', energy: 3, valence: 3, context: ['melancholy'] },
  'melancholy': { emotion: 'melancholic', energy: 3, valence: 3, context: ['melancholy'] },
  'bittersweet': { emotion: 'melancholic', energy: 4, valence: 4, context: ['melancholy'] },
  'somber': { emotion: 'melancholic', energy: 2, valence: 2, context: ['melancholy'] },

  // Dreamy
  'dreamy': { emotion: 'dreamy', energy: 4, valence: 6, context: ['dream'] },
  'dream': { emotion: 'dreamy', energy: 3, valence: 6, context: ['dream'] },
  'dreaming': { emotion: 'dreamy', energy: 3, valence: 6, context: ['dream'] },
  'ethereal': { emotion: 'dreamy', energy: 3, valence: 6, context: ['dream'] },
  'float': { emotion: 'dreamy', energy: 3, valence: 6, context: ['dream'] },
  'floating': { emotion: 'dreamy', energy: 3, valence: 6, context: ['dream'] },
  'space': { emotion: 'dreamy', energy: 3, valence: 5, context: ['space'] },

  // Cool
  'cool': { emotion: 'cool', energy: 6, valence: 6, context: ['cool'] },
  'chill vibing': { emotion: 'cool', energy: 5, valence: 7, context: ['vibing'] },
  'vibing': { emotion: 'cool', energy: 5, valence: 7, context: ['vibing'] },
  'vibe': { emotion: 'cool', energy: 5, valence: 7, context: ['vibing'] },

  // Party / Social
  'party': { emotion: 'energetic', energy: 10, valence: 9, context: ['party'] },
  'dancing': { emotion: 'energetic', energy: 9, valence: 9, context: ['dance'] },
  'dance': { emotion: 'energetic', energy: 9, valence: 9, context: ['dance'] },
  'celebrating': { emotion: 'energetic', energy: 9, valence: 9, context: ['celebration'] },
  'celebrate': { emotion: 'energetic', energy: 9, valence: 9, context: ['celebration'] },
  'clubbing': { emotion: 'energetic', energy: 10, valence: 9, context: ['party'] },

  // Tired / Low energy
  'lazy': { emotion: 'tired', energy: 2, valence: 5, context: ['laziness'] },
  'burnt out': { emotion: 'tired', energy: 1, valence: 2, context: ['burnout'] },
  'burnout': { emotion: 'tired', energy: 1, valence: 2, context: ['burnout'] },
  'drained': { emotion: 'tired', energy: 1, valence: 3, context: ['fatigue'] },
  'worn out': { emotion: 'tired', energy: 1, valence: 3, context: ['fatigue'] },
};

const timePatterns: { regex: RegExp; time: string }[] = [
  { regex: /\b(morning|dawn|sunrise|early)\b/i, time: 'morning' },
  { regex: /\b(afternoon|noon|midday)\b/i, time: 'afternoon' },
  { regex: /\b(evening|dusk|sunset)\b/i, time: 'evening' },
  { regex: /\b(night|midnight|late night|2am|3am|late)\b/i, time: 'night' },
];

const negationWords = ['not', 'no', 'never', "don't", 'cannot', "can't", 'wasn\'t', 'isn\'t'];

function detectTimeOfDay(text: string): string {
  for (const { regex, time } of timePatterns) {
    if (regex.test(text)) return time;
  }
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}

export function analyzeState(text: string): MoodState {
  const lower = text.toLowerCase().trim();
  const words = lower.split(/\s+/);
  const matchedKeywords: string[] = [];
  const emotions: { emotion: string; energy: number; valence: number; context: string[] }[] = [];
  const allContexts: string[] = [];

  // Scan for multi-word phrases first (longer matches take priority)
  const sortedKeys = Object.keys(keywordMap).sort((a, b) => b.length - a.length);
  let consumed = new Set<number>();

  for (const key of sortedKeys) {
    const idx = lower.indexOf(key);
    if (idx !== -1) {
      // Check negation
      const beforeIdx = lower.slice(0, idx).trim().split(/\s+/).slice(-2).join(' ');
      const isNegated = negationWords.some((w) => beforeIdx.endsWith(w));

      if (!isNegated) {
        const mapping = keywordMap[key];
        emotions.push(mapping);
        matchedKeywords.push(key);
        allContexts.push(...mapping.context);
        // Mark these words as consumed
        const keyWords = key.split(/\s+/);
        const startWordIdx = lower.slice(0, idx).split(/\s+/).length - 1;
        for (let i = 0; i < keyWords.length; i++) {
          consumed.add(startWordIdx + i);
        }
      }
    }
  }

  // Aggregate
  if (emotions.length === 0) {
    // No keywords found — produce a neutral state
    return {
      emotion: 'neutral',
      energy: 5,
      valence: 5,
      context: ['general'],
      timeOfDay: detectTimeOfDay(lower),
      keywords: [],
    };
  }

  // Weighted average — more specific emotions (further from 5) dominate
  const totalWeight = emotions.reduce((sum, e) => sum + Math.abs(e.energy - 5) + Math.abs(e.valence - 5) + 1, 0);
  const energy = emotions.reduce((sum, e) => sum + e.energy * (Math.abs(e.energy - 5) + 1), 0) / totalWeight;
  const valence = emotions.reduce((sum, e) => sum + e.valence * (Math.abs(e.valence - 5) + 1), 0) / totalWeight;

  // Pick the dominant emotion (the one with the most extreme valence)
  const dominant = emotions.reduce((max, e) =>
    Math.abs(e.valence - 5) + Math.abs(e.energy - 5) > Math.abs(max.valence - 5) + Math.abs(max.energy - 5) ? e : max
  );

  // Deduplicate contexts
  const uniqueContexts = [...new Set(allContexts)];

  return {
    emotion: dominant.emotion,
    energy: Math.round(Math.max(1, Math.min(10, energy))),
    valence: Math.round(Math.max(1, Math.min(10, valence))),
    context: uniqueContexts,
    timeOfDay: detectTimeOfDay(lower),
    keywords: matchedKeywords,
  };
}

export function quickStates(): { label: string; emoji: string; text: string }[] {
  return [
    { label: 'Happy & Energetic', emoji: '⚡', text: 'I feel amazing and full of energy, ready to take on the world!' },
    { label: 'Calm & Reflective', emoji: '🌙', text: 'I feel peaceful and contemplative, just thinking about life' },
    { label: 'Heartbroken', emoji: '💔', text: 'I just went through a breakup and feel completely heartbroken' },
    { label: 'Stressed & Overwhelmed', emoji: '😰', text: 'I am overwhelmed with stress and anxiety from work' },
    { label: 'Romantic', emoji: '❤️', text: 'I am deeply in love and feeling romantic' },
    { label: 'Motivated to Grind', emoji: '🔥', text: 'I am determined and motivated to crush my workout' },
    { label: 'Nostalgic', emoji: '📼', text: 'I feel nostalgic, remembering the good old days' },
    { label: 'Angry', emoji: '😤', text: 'I am furious and angry and need to let off some steam' },
    { label: 'Dreamy', emoji: '✨', text: 'I feel dreamy and ethereal, like floating in space' },
    { label: 'Focused', emoji: '🎯', text: 'I need to focus and concentrate on studying for my exam' },
  ];
}
