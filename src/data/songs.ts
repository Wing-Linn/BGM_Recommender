import type { Song } from '@/types';

export const songs: Song[] = [
  // --- Chill / Lo-fi / Calm ---
  {
    id: 's1', title: 'Weightless', artist: 'Marconi Union', album: 'Weightless', year: 2011,
    genre: 'Ambient', mood: ['calm', 'peaceful', 'relaxed', 'anxious'], energy: 2, valence: 5, tempo: 60,
    tags: ['ambient', 'meditation', 'stress-relief', 'sleep', 'focus'], coverColor: 'from-teal-400 to-cyan-600',
  },
  {
    id: 's2', title: 'Sunset Lover', artist: 'Petit Biscuit', album: 'Petit Biscuit EP', year: 2015,
    genre: 'Electro', mood: ['happy', 'dreamy', 'nostalgic', 'peaceful'], energy: 4, valence: 8, tempo: 90,
    tags: ['chill', 'sunset', 'summer', 'dreamy'], coverColor: 'from-orange-400 to-pink-500',
  },
  {
    id: 's3', title: 'Intro', artist: 'The xx', album: 'xx', year: 2009,
    genre: 'Indie', mood: ['melancholic', 'contemplative', 'calm', 'nostalgic'], energy: 3, valence: 4, tempo: 85,
    tags: ['indie', 'minimal', 'atmospheric', 'late-night'], coverColor: 'from-slate-500 to-slate-800',
  },
  {
    id: 's4', title: 'Nuvole Bianche', artist: 'Ludovico Einaudi', album: 'Una Mattina', year: 2004,
    genre: 'Classical', mood: ['melancholic', 'contemplative', 'peaceful', 'emotional'], energy: 2, valence: 4, tempo: 70,
    tags: ['piano', 'classical', 'emotional', 'reflective'], coverColor: 'from-blue-300 to-indigo-500',
  },
  {
    id: 's5', title: 'Kettering', artist: 'The Antlers', album: 'Hospice', year: 2009,
    genre: 'Indie', mood: ['sad', 'melancholic', 'emotional', 'heartbroken'], energy: 2, valence: 2, tempo: 72,
    tags: ['sad', 'heartbreak', 'emotional', 'tears'], coverColor: 'from-gray-500 to-slate-700',
  },
  {
    id: 's6', title: 'Nightcall', artist: 'Kavinsky', album: 'OutRun', year: 2010,
    genre: 'Synthwave', mood: ['cool', 'nostalgic', 'contemplative', 'night'], energy: 5, valence: 5, tempo: 100,
    tags: ['synthwave', 'retro', 'night-drive', 'cool'], coverColor: 'from-purple-500 to-pink-600',
  },
  {
    id: 's7', title: 'Breathe', artist: 'Télépopmusik', album: 'Genetic World', year: 2001,
    genre: 'Downtempo', mood: ['calm', 'relaxed', 'dreamy', 'peaceful'], energy: 3, valence: 6, tempo: 80,
    tags: ['downtempo', 'chill', 'airy', 'relax'], coverColor: 'from-cyan-400 to-teal-500',
  },
  {
    id: 's8', title: 'Porcelain', artist: 'Moby', album: 'Play', year: 1999,
    genre: 'Electronica', mood: ['contemplative', 'calm', 'nostalgic', 'emotional'], energy: 3, valence: 5, tempo: 75,
    tags: ['electronic', 'ambient', 'reflective', 'cinematic'], coverColor: 'from-slate-400 to-blue-500',
  },
  {
    id: 's9', title: 'Holocene', artist: 'Bon Iver', album: 'Bon Iver', year: 2011,
    genre: 'Folk', mood: ['melancholic', 'contemplative', 'peaceful', 'nostalgic'], energy: 3, valence: 4, tempo: 75,
    tags: ['folk', 'atmospheric', 'winter', 'reflective'], coverColor: 'from-blue-500 to-slate-700',
  },
  {
    id: 's10', title: 'Line Without a Hook', artist: 'Ricky Montgomery', album: 'Rickety', year: 2016,
    genre: 'Indie', mood: ['melancholic', 'emotional', 'nostalgic', 'heartbroken'], energy: 4, valence: 3, tempo: 95,
    tags: ['indie', 'emotional', 'nostalgic', 'yearning'], coverColor: 'from-rose-400 to-slate-600',
  },

  // --- Energetic / Upbeat / Happy ---
  {
    id: 's11', title: 'Good as Hell', artist: 'Lizzo', album: 'Cuz I Love You', year: 2016,
    genre: 'Pop', mood: ['happy', 'confident', 'empowered', 'energetic'], energy: 8, valence: 9, tempo: 120,
    tags: ['pop', 'empowerment', 'feel-good', 'upbeat'], coverColor: 'from-yellow-400 to-orange-500',
  },
  {
    id: 's12', title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', album: 'Uptown Special', year: 2014,
    genre: 'Funk', mood: ['happy', 'energetic', 'confident', 'party'], energy: 10, valence: 9, tempo: 115,
    tags: ['funk', 'party', 'dance', 'feel-good'], coverColor: 'from-amber-400 to-red-500',
  },
  {
    id: 's13', title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', year: 2020,
    genre: 'Pop', mood: ['happy', 'energetic', 'flirty', 'confident'], energy: 8, valence: 8, tempo: 103,
    tags: ['pop', 'dance', 'disco', 'fun'], coverColor: 'from-pink-400 to-purple-500',
  },
  {
    id: 's14', title: 'September', artist: 'Earth, Wind & Fire', album: 'I Am', year: 1978,
    genre: 'Disco', mood: ['happy', 'nostalgic', 'energetic', 'party'], energy: 9, valence: 10, tempo: 126,
    tags: ['disco', 'classic', 'feel-good', 'party'], coverColor: 'from-orange-400 to-yellow-500',
  },
  {
    id: 's15', title: 'Can\'t Stop the Feeling!', artist: 'Justin Timberlake', album: 'Trolls OST', year: 2016,
    genre: 'Pop', mood: ['happy', 'energetic', 'playful', 'party'], energy: 9, valence: 10, tempo: 113,
    tags: ['pop', 'feel-good', 'dance', 'summer'], coverColor: 'from-cyan-400 to-blue-500',
  },
  {
    id: 's16', title: 'Walking on Sunshine', artist: 'Katrina & The Waves', album: 'Walking on Sunshine', year: 1985,
    genre: 'Pop', mood: ['happy', 'energetic', 'optimistic', 'summer'], energy: 9, valence: 10, tempo: 120,
    tags: ['pop', 'feel-good', 'summer', 'upbeat'], coverColor: 'from-yellow-300 to-orange-400',
  },
  {
    id: 's17', title: 'Happy', artist: 'Pharrell Williams', album: 'G I R L', year: 2013,
    genre: 'Pop', mood: ['happy', 'optimistic', 'playful', 'energetic'], energy: 8, valence: 10, tempo: 120,
    tags: ['pop', 'feel-good', 'happy', 'upbeat'], coverColor: 'from-yellow-400 to-amber-500',
  },
  {
    id: 's18', title: 'Shake It Off', artist: 'Taylor Swift', album: '1989', year: 2014,
    genre: 'Pop', mood: ['happy', 'playful', 'confident', 'energetic'], energy: 8, valence: 9, tempo: 160,
    tags: ['pop', 'feel-good', 'playful', 'fun'], coverColor: 'from-pink-300 to-rose-500',
  },
  {
    id: 's19', title: 'Don\'t Stop Me Now', artist: 'Queen', album: 'Jazz', year: 1978,
    genre: 'Rock', mood: ['energetic', 'confident', 'happy', 'motivated'], energy: 10, valence: 9, tempo: 156,
    tags: ['rock', 'classic', 'energetic', 'motivational'], coverColor: 'from-red-500 to-orange-600',
  },
  {
    id: 's20', title: 'Mr. Blue Sky', artist: 'Electric Light Orchestra', album: 'Out of the Blue', year: 1977,
    genre: 'Pop', mood: ['happy', 'optimistic', 'playful', 'energetic'], energy: 8, valence: 10, tempo: 142,
    tags: ['pop', 'feel-good', 'sunny', 'classic'], coverColor: 'from-sky-400 to-blue-500',
  },

  // --- Sad / Heartbreak / Emotional ---
  {
    id: 's21', title: 'Someone Like You', artist: 'Adele', album: '21', year: 2011,
    genre: 'Pop', mood: ['sad', 'heartbroken', 'nostalgic', 'emotional'], energy: 3, valence: 2, tempo: 68,
    tags: ['sad', 'heartbreak', 'tears', 'emotional'], coverColor: 'from-gray-400 to-slate-600',
  },
  {
    id: 's22', title: 'Skinny Love', artist: 'Bon Iver', album: 'For Emma, Forever Ago', year: 2007,
    genre: 'Folk', mood: ['sad', 'heartbroken', 'emotional', 'melancholic'], energy: 3, valence: 2, tempo: 70,
    tags: ['sad', 'heartbreak', 'folk', 'emotional'], coverColor: 'from-slate-400 to-gray-600',
  },
  {
    id: 's23', title: 'Teardrop', artist: 'Massive Attack', album: 'Mezzanine', year: 1998,
    genre: 'Trip Hop', mood: ['melancholic', 'contemplative', 'emotional', 'night'], energy: 4, valence: 3, tempo: 85,
    tags: ['trip-hop', 'dark', 'atmospheric', 'emotional'], coverColor: 'from-slate-600 to-gray-800',
  },
  {
    id: 's24', title: 'Re: Stacks', artist: 'Bon Iver', album: 'For Emma, Forever Ago', year: 2007,
    genre: 'Folk', mood: ['sad', 'melancholic', 'contemplative', 'lonely'], energy: 2, valence: 2, tempo: 65,
    tags: ['sad', 'folk', 'lonely', 'reflective'], coverColor: 'from-blue-400 to-slate-600',
  },
  {
    id: 's25', title: 'Hallelujah', artist: 'Jeff Buckley', album: 'Grace', year: 1994,
    genre: 'Folk', mood: ['sad', 'emotional', 'contemplative', 'melancholic'], energy: 3, valence: 3, tempo: 70,
    tags: ['sad', 'emotional', 'classic', 'tears'], coverColor: 'from-indigo-400 to-slate-600',
  },
  {
    id: 's26', title: 'The Night We Met', artist: 'Lord Huron', album: 'Strange Trails', year: 2015,
    genre: 'Indie', mood: ['sad', 'nostalgic', 'heartbroken', 'emotional'], energy: 4, valence: 2, tempo: 80,
    tags: ['sad', 'nostalgic', 'heartbreak', 'emotional'], coverColor: 'from-slate-500 to-indigo-700',
  },
  {
    id: 's27', title: 'Motion Picture Soundtrack', artist: 'Radiohead', album: 'Kid A', year: 2000,
    genre: 'Alternative', mood: ['sad', 'melancholic', 'emotional', 'dreamy'], energy: 2, valence: 2, tempo: 60,
    tags: ['sad', 'atmospheric', 'emotional', 'dreamy'], coverColor: 'from-slate-500 to-blue-800',
  },
  {
    id: 's28', title: 'Liability', artist: 'Lorde', album: 'Melodrama', year: 2017,
    genre: 'Pop', mood: ['sad', 'lonely', 'emotional', 'melancholic'], energy: 2, valence: 2, tempo: 72,
    tags: ['sad', 'lonely', 'piano', 'emotional'], coverColor: 'from-purple-400 to-slate-600',
  },
  {
    id: 's29', title: 'Ivy', artist: 'Frank Ocean', album: 'Blonde', year: 2016,
    genre: 'R&B', mood: ['nostalgic', 'melancholic', 'emotional', 'contemplative'], energy: 4, valence: 4, tempo: 80,
    tags: ['rnb', 'nostalgic', 'emotional', 'reflective'], coverColor: 'from-amber-400 to-slate-600',
  },
  {
    id: 's30', title: 'Space Song', artist: 'Beach House', album: 'Depression Cherry', year: 2015,
    genre: 'Dream Pop', mood: ['dreamy', 'melancholic', 'ethereal', 'contemplative'], energy: 4, valence: 4, tempo: 80,
    tags: ['dream-pop', 'ethereal', 'atmospheric', 'emotional'], coverColor: 'from-purple-400 to-indigo-600',
  },

  // --- Focus / Work / Study ---
  {
    id: 's31', title: 'Music for Airports', artist: 'Brian Eno', album: 'Ambient 1', year: 1978,
    genre: 'Ambient', mood: ['calm', 'focused', 'peaceful', 'contemplative'], energy: 2, valence: 5, tempo: 60,
    tags: ['ambient', 'focus', 'study', 'minimal'], coverColor: 'from-slate-300 to-blue-400',
  },
  {
    id: 's32', title: 'Clair de Lune', artist: 'Claude Debussy', album: 'Suite Bergamasque', year: 1905,
    genre: 'Classical', mood: ['calm', 'peaceful', 'contemplative', 'dreamy'], energy: 2, valence: 5, tempo: 60,
    tags: ['classical', 'piano', 'focus', 'peaceful'], coverColor: 'from-indigo-300 to-blue-500',
  },
  {
    id: 's33', title: 'An Ending (Ascent)', artist: 'Brian Eno', album: 'Apollo', year: 1983,
    genre: 'Ambient', mood: ['calm', 'peaceful', 'dreamy', 'contemplative'], energy: 1, valence: 6, tempo: 50,
    tags: ['ambient', 'space', 'focus', 'ethereal'], coverColor: 'from-slate-400 to-indigo-600',
  },
  {
    id: 's34', title: 'Experience', artist: 'Ludovico Einaudi', album: 'In a Time Lapse', year: 2013,
    genre: 'Classical', mood: ['focused', 'motivated', 'emotional', 'contemplative'], energy: 5, valence: 5, tempo: 90,
    tags: ['classical', 'piano', 'focus', 'motivational'], coverColor: 'from-blue-400 to-indigo-600',
  },
  {
    id: 's35', title: 'Lo-fi Beats', artist: 'Nujabes', album: 'Modal Soul', year: 2005,
    genre: 'Lo-fi', mood: ['calm', 'focused', 'relaxed', 'nostalgic'], energy: 4, valence: 6, tempo: 85,
    tags: ['lofi', 'focus', 'study', 'chill'], coverColor: 'from-amber-400 to-orange-500',
  },

  // --- Hype / Workout / Motivated ---
  {
    id: 's36', title: 'Till I Collapse', artist: 'Eminem', album: 'The Eminem Show', year: 2002,
    genre: 'Hip Hop', mood: ['motivated', 'energetic', 'aggressive', 'focused'], energy: 10, valence: 5, tempo: 170,
    tags: ['hiphop', 'workout', 'hype', 'motivational'], coverColor: 'from-gray-700 to-slate-900',
  },
  {
    id: 's37', title: 'Lose Yourself', artist: 'Eminem', album: '8 Mile OST', year: 2002,
    genre: 'Hip Hop', mood: ['motivated', 'determined', 'energetic', 'focused'], energy: 9, valence: 6, tempo: 171,
    tags: ['hiphop', 'motivational', 'hype', 'workout'], coverColor: 'from-gray-600 to-slate-800',
  },
  {
    id: 's38', title: 'Power', artist: 'Kanye West', album: 'My Beautiful Dark Twisted Fantasy', year: 2010,
    genre: 'Hip Hop', mood: ['confident', 'empowered', 'energetic', 'aggressive'], energy: 9, valence: 6, tempo: 120,
    tags: ['hiphop', 'empowerment', 'confident', 'hype'], coverColor: 'from-red-500 to-slate-800',
  },
  {
    id: 's39', title: 'Eye of the Tiger', artist: 'Survivor', album: 'Eye of the Tiger', year: 1982,
    genre: 'Rock', mood: ['motivated', 'determined', 'energetic', 'confident'], energy: 9, valence: 7, tempo: 109,
    tags: ['rock', 'motivational', 'workout', 'classic'], coverColor: 'from-orange-500 to-red-600',
  },
  {
    id: 's40', title: 'Stronger', artist: 'Kanye West', album: 'Graduation', year: 2007,
    genre: 'Hip Hop', mood: ['motivated', 'confident', 'energetic', 'empowered'], energy: 9, valence: 7, tempo: 104,
    tags: ['hiphop', 'motivational', 'workout', 'hype'], coverColor: 'from-amber-500 to-slate-700',
  },
  {
    id: 's41', title: 'Thunder', artist: 'Imagine Dragons', album: 'Evolve', year: 2017,
    genre: 'Pop Rock', mood: ['motivated', 'energetic', 'confident', 'determined'], energy: 8, valence: 7, tempo: 168,
    tags: ['rock', 'motivational', 'energetic', 'hype'], coverColor: 'from-cyan-500 to-blue-700',
  },
  {
    id: 's42', title: 'Believer', artist: 'Imagine Dragons', album: 'Evolve', year: 2017,
    genre: 'Pop Rock', mood: ['motivated', 'determined', 'energetic', 'aggressive'], energy: 9, valence: 5, tempo: 190,
    tags: ['rock', 'motivational', 'workout', 'hype'], coverColor: 'from-orange-500 to-red-700',
  },

  // --- Romantic / In Love ---
  {
    id: 's43', title: 'La Vie en Rose', artist: 'Édith Piaf', album: 'La Vie en Rose', year: 1947,
    genre: 'Chanson', mood: ['romantic', 'happy', 'dreamy', 'peaceful'], energy: 4, valence: 8, tempo: 80,
    tags: ['romance', 'classic', 'dreamy', 'love'], coverColor: 'from-rose-400 to-red-500',
  },
  {
    id: 's44', title: 'At Last', artist: 'Etta James', album: 'At Last!', year: 1960,
    genre: 'Soul', mood: ['romantic', 'happy', 'emotional', 'peaceful'], energy: 4, valence: 8, tempo: 60,
    tags: ['romance', 'soul', 'classic', 'love'], coverColor: 'from-rose-300 to-pink-500',
  },
  {
    id: 's45', title: 'Thinking Out Loud', artist: 'Ed Sheeran', album: 'x', year: 2014,
    genre: 'Pop', mood: ['romantic', 'happy', 'emotional', 'dreamy'], energy: 4, valence: 8, tempo: 79,
    tags: ['romance', 'pop', 'love', 'emotional'], coverColor: 'from-rose-400 to-amber-500',
  },
  {
    id: 's46', title: 'All of Me', artist: 'John Legend', album: 'Love in the Future', year: 2013,
    genre: 'R&B', mood: ['romantic', 'emotional', 'happy', 'peaceful'], energy: 4, valence: 8, tempo: 76,
    tags: ['romance', 'rnb', 'love', 'emotional'], coverColor: 'from-pink-400 to-rose-600',
  },
  {
    id: 's47', title: 'Can\'t Help Falling in Love', artist: 'Elvis Presley', album: 'Blue Hawaii', year: 1961,
    genre: 'Pop', mood: ['romantic', 'emotional', 'dreamy', 'peaceful'], energy: 2, valence: 8, tempo: 60,
    tags: ['romance', 'classic', 'love', 'dreamy'], coverColor: 'from-rose-300 to-pink-400',
  },
  {
    id: 's48', title: 'Make You Feel My Love', artist: 'Adele', album: '19', year: 2008,
    genre: 'Pop', mood: ['romantic', 'emotional', 'melancholic', 'peaceful'], energy: 3, valence: 7, tempo: 65,
    tags: ['romance', 'emotional', 'love', 'piano'], coverColor: 'from-rose-400 to-slate-500',
  },

  // --- Angry / Stressed / Rebellious ---
  {
    id: 's49', title: 'Killing in the Name', artist: 'Rage Against the Machine', album: 'RATM', year: 1992,
    genre: 'Rock', mood: ['angry', 'rebellious', 'energetic', 'aggressive'], energy: 10, valence: 2, tempo: 164,
    tags: ['rock', 'angry', 'rebellious', 'aggressive'], coverColor: 'from-red-600 to-slate-900',
  },
  {
    id: 's50', title: 'Break Stuff', artist: 'Limp Bizkit', album: 'Significant Other', year: 1999,
    genre: 'Nu Metal', mood: ['angry', 'aggressive', 'energetic', 'stressed'], energy: 10, valence: 1, tempo: 100,
    tags: ['metal', 'angry', 'aggressive', 'rage'], coverColor: 'from-gray-700 to-red-900',
  },
  {
    id: 's51', title: 'Bodies', artist: 'Drowning Pool', album: 'Sinner', year: 2001,
    genre: 'Metal', mood: ['angry', 'aggressive', 'energetic', 'stressed'], energy: 10, valence: 1, tempo: 130,
    tags: ['metal', 'angry', 'aggressive', 'rage'], coverColor: 'from-slate-700 to-red-800',
  },
  {
    id: 's52', title: 'Given Up', artist: 'Linkin Park', album: 'Minutes to Midnight', year: 2007,
    genre: 'Rock', mood: ['angry', 'frustrated', 'aggressive', 'stressed'], energy: 9, valence: 2, tempo: 120,
    tags: ['rock', 'angry', 'frustrated', 'aggressive'], coverColor: 'from-slate-600 to-gray-800',
  },
  {
    id: 's53', title: 'Chop Suey!', artist: 'System of a Down', album: 'Toxicity', year: 2001,
    genre: 'Metal', mood: ['angry', 'energetic', 'aggressive', 'chaotic'], energy: 10, valence: 3, tempo: 130,
    tags: ['metal', 'aggressive', 'chaotic', 'energetic'], coverColor: 'from-red-500 to-slate-800',
  },

  // --- Nostalgic / Contemplative / Night ---
  {
    id: 's54', title: 'Nightmoves', artist: 'Barry Manilow', album: 'Nightmoves', year: 1973,
    genre: 'Jazz', mood: ['nostalgic', 'contemplative', 'calm', 'night'], energy: 3, valence: 5, tempo: 70,
    tags: ['jazz', 'nostalgic', 'night', 'reflective'], coverColor: 'from-indigo-500 to-slate-800',
  },
  {
    id: 's55', title: 'The Less I Know The Better', artist: 'Tame Impala', album: 'Currents', year: 2015,
    genre: 'Psychedelic', mood: ['nostalgic', 'groovy', 'contemplative', 'cool'], energy: 6, valence: 6, tempo: 116,
    tags: ['psychedelic', 'groovy', 'nostalgic', 'cool'], coverColor: 'from-pink-400 to-orange-500',
  },
  {
    id: 's56', title: 'After Dark', artist: 'Mr.Kitty', album: 'Time', year: 2014,
    genre: 'Synthwave', mood: ['nostalgic', 'night', 'melancholic', 'dreamy'], energy: 6, valence: 4, tempo: 120,
    tags: ['synthwave', 'night', 'nostalgic', 'dreamy'], coverColor: 'from-purple-500 to-indigo-700',
  },
  {
    id: 's57', title: 'Resonance', artist: 'Home', album: 'Odyssey', year: 2014,
    genre: 'Synthwave', mood: ['nostalgic', 'calm', 'dreamy', 'cool'], energy: 5, valence: 6, tempo: 90,
    tags: ['synthwave', 'nostalgic', 'chill', 'retro'], coverColor: 'from-cyan-400 to-purple-500',
  },
  {
    id: 's58', title: 'Computer Love', artist: 'Kraftwerk', album: 'Computer World', year: 1981,
    genre: 'Electronic', mood: ['nostalgic', 'cool', 'contemplative', 'night'], energy: 4, valence: 6, tempo: 100,
    tags: ['electronic', 'retro', 'night', 'cool'], coverColor: 'from-slate-400 to-indigo-600',
  },

  // --- Anxious / Overwhelmed → Calming ---
  {
    id: 's59', title: 'Strawberry Swing', artist: 'Coldplay', album: 'Viva la Vida', year: 2008,
    genre: 'Alternative', mood: ['calm', 'dreamy', 'peaceful', 'hopeful'], energy: 4, valence: 7, tempo: 80,
    tags: ['alternative', 'calm', 'dreamy', 'hopeful'], coverColor: 'from-rose-300 to-orange-400',
  },
  {
    id: 's60', title: 'Into Dust', artist: 'Mazzy Star', album: 'So Tonight That I Might See', year: 1993,
    genre: 'Dream Pop', mood: ['melancholic', 'calm', 'dreamy', 'contemplative'], energy: 2, valence: 3, tempo: 65,
    tags: ['dream-pop', 'melancholic', 'atmospheric', 'calm'], coverColor: 'from-amber-400 to-slate-600',
  },
];
