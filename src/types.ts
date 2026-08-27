export interface Song {
  id: string;
  title: string;
  artist: string;
  album?: string;
  year: number;
  genre: string;
  mood: string[];
  energy: number; // 1-10
  valence: number; // 1-10 (happiness/sadness)
  tempo: number; // BPM
  tags: string[];
  link?: string;
  coverColor: string; // gradient seed
}

export interface MoodState {
  emotion: string;
  energy: number; // 1-10
  valence: number; // 1-10
  context: string[];
  timeOfDay: string;
  keywords: string[];
}

export interface Recommendation {
  song: Song;
  score: number;
  reasons: string[];
}

export interface Persona {
  name: string;
  description: string;
  emoji: string;
}

export interface MovieScene {
  title: string;
  description: string;
  emoji: string;
}

export type AppPhase = 'input' | 'analyzing' | 'result';
