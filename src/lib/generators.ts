import type { MoodState, Persona, MovieScene } from '@/types';

const personas: Record<string, Persona[]> = {
  happy: [
    { name: 'The Golden Hour Wanderer', emoji: '☀️', description: 'You radiate warmth like a sun-drenched afternoon. The world is your playground and every stranger is a friend you haven\'t met yet.' },
    { name: 'The Festival Spirit', emoji: '🎉', description: 'You move through life like a headliner at sunset — unstoppable, magnetic, and impossible to ignore.' },
  ],
  sad: [
    { name: 'The Rain-Window Poet', emoji: '🌧️', description: 'You find beauty in the ache. There\'s a whole novel living behind your eyes, and the rain is just keeping time.' },
    { name: 'The 3AM Philosopher', emoji: '🕯️', description: 'When the world goes quiet, your mind gets loud. You understand sadness not as a burden, but as a teacher.' },
  ],
  angry: [
    { name: 'The Storm Chaser', emoji: '⚡', description: 'You don\'t run from the storm — you become it. Your anger isn\'t chaos, it\'s power looking for a direction.' },
    { name: 'The Quiet Volcano', emoji: '🌋', description: 'Still on the surface, magma underneath. When you finally erupt, the landscape changes.' },
  ],
  anxious: [
    { name: 'The Overthinker', emoji: '🌀', description: 'Your mind runs ten simulations before breakfast. You feel everything before it happens — a blessing and a curse.' },
    { name: 'The Breath-Counter', emoji: '🍃', description: 'You\'re learning to slow down, one breath at a time. The calm you seek is closer than you think.' },
  ],
  calm: [
    { name: 'The Still Water', emoji: '🪷', description: 'You move through chaos without a ripple. People come to you to find their own center.' },
    { name: 'The Morning Fog', emoji: '🌫️', description: 'Soft, quiet, and impossible to rush. You remind everyone that stillness is its own kind of motion.' },
  ],
  motivated: [
    { name: 'The Mountain Climber', emoji: '🏔️', description: 'You see a peak and your only thought is "up." Setbacks are just rest stops on the way to the summit.' },
    { name: 'The Iron Will', emoji: '⚒️', description: 'Discipline is your love language. You don\'t wait for motivation — you build it, rep by rep.' },
  ],
  focused: [
    { name: 'The Deep Diver', emoji: '🤿', description: 'When you lock in, the rest of the world dissolves. You don\'t multitask — you master-task.' },
    { name: 'The Clockmaker', emoji: '⚙️', description: 'Precision is your art form. Every detail matters, every second counts, and the result is always worth it.' },
  ],
  confident: [
    { name: 'The Main Character', emoji: '🎬', description: 'You walk into every room like the score just kicked in. Not arrogant — just aware of your own gravity.' },
    { name: 'The Unmoved Stone', emoji: '🪨', description: 'Opinions bounce off you like rain off granite. You know who you are, and that\'s the only permission you need.' },
  ],
  romantic: [
    { name: 'The Heart-Sleeve', emoji: '🌹', description: 'You love out loud. Every gesture is a love letter, every glance a promise. The world is more beautiful because you\'re in it.' },
    { name: 'The Slow Dance', emoji: '💃', description: 'You turn ordinary moments into scenes from a romance film. Forever isn\'t long enough for the way you love.' },
  ],
  nostalgic: [
    { name: 'The Memory Keeper', emoji: '📼', description: 'You live with one foot in yesterday. Not because you\'re stuck — because the past is too beautiful to leave behind.' },
    { name: 'The Polaroid Soul', emoji: '📸', description: 'Every moment feels like a photograph waiting to fade. You hold on tight, knowing time is the one thing you can\'t keep.' },
  ],
  contemplative: [
    { name: 'The Lighthouse', emoji: '🗼', description: 'You stand still and think until the answer arrives. Your quiet isn\'t empty — it\'s full of questions worth asking.' },
    { name: 'The Map Reader', emoji: '🧭', description: 'Before you move, you understand. You see patterns others miss and paths others can\'t.' },
  ],
  melancholic: [
    { name: 'The Autumn Leaf', emoji: '🍂', description: 'You carry a gentle sadness like a coat in fall — not cold, just aware that beauty and loss walk hand in hand.' },
    { name: 'The Dusk Watcher', emoji: '🌆', description: 'You love the hour between day and night. Neither here nor there — and that\'s where you feel most alive.' },
  ],
  dreamy: [
    { name: 'The Cloud Walker', emoji: '☁️', description: 'You live half in this world, half in another. Reality is a suggestion, and your imagination is the real address.' },
    { name: 'The Stargazer', emoji: '✨', description: 'You look up and see stories. The ground is fine, but the sky is where you belong.' },
  ],
  cool: [
    { name: 'The Night Driver', emoji: '🚗', description: 'Windows down, headlights cutting through dark. You don\'t need a destination — the road is the point.' },
    { name: 'The Vinyl Collector', emoji: '💿', description: 'You appreciate the art of the slow groove. Everything you touch has a certain effortless style.' },
  ],
  energetic: [
    { name: 'The Spark', emoji: '🔥', description: 'You enter a room and the energy doubles. You don\'t light up the party — you ARE the party.' },
    { name: 'The Pulse', emoji: '💓', description: 'You move to a beat only you can hear, and somehow everyone else starts dancing too.' },
  ],
  playful: [
    { name: 'The Trickster', emoji: '🎭', description: 'You find the fun in everything. Life is a game and you\'re always one move ahead — with a grin.' },
    { name: 'The Kite', emoji: '🪁', description: 'You catch the wind and go. Rules are just suggestions for people with less imagination.' },
  ],
  lonely: [
    { name: 'The Solo Traveler', emoji: '🧳', description: 'You walk alone, but not lost. Solitude is your companion, and the road is yours alone to name.' },
    { name: 'The Empty Room', emoji: '🚪', description: 'You know the sound of silence too well. But even empty rooms have echoes — and echoes are proof someone was here.' },
  ],
  heartbroken: [
    { name: 'The Aftermath', emoji: '🥀', description: 'You\'re standing in the rubble of something that was beautiful. It hurts because it was real. That\'s not weakness — that\'s evidence.' },
    { name: 'The Unsent Letter', emoji: '✉️', description: 'You have words you\'ll never send and feelings you can\'t un-feel. You\'re learning that some stories end mid-sentence.' },
  ],
  frustrated: [
    { name: 'The Locked Door', emoji: '🚪', description: 'You keep pushing but it won\'t budge. The frustration isn\'t the door — it\'s knowing you haven\'t found the key yet.' },
    { name: 'The Tangled Wire', emoji: '🧶', description: 'Everything you touch knots a little tighter. You need to stop pulling and start untangling — one loop at a time.' },
  ],
  stressed: [
    { name: 'The Tightrope', emoji: '🎪', description: 'You\'re balancing a hundred things and the wind keeps picking up. You haven\'t fallen yet — and that\'s not luck, that\'s skill.' },
    { name: 'The Full Plate', emoji: '🍽️', description: 'Everything is urgent and nothing can wait. But you can\'t pour from an empty cup — something has to give.' },
  ],
  overwhelmed: [
    { name: 'The Drowning Swimmer', emoji: '🌊', description: 'The waves keep coming and you can\'t catch your breath. You don\'t need to swim harder — you need to float.' },
    { name: 'The Overloaded Circuit', emoji: '🔌', description: 'Too many tabs open, too many signals firing. A reset isn\'t quitting — it\'s survival.' },
  ],
  tired: [
    { name: 'The Last Ember', emoji: '🕯️', description: 'You\'re running on fumes and somehow still glowing. Rest isn\'t the enemy of progress — it\'s the fuel.' },
    { name: 'The Heavy Eyes', emoji: '😴', description: 'You\'ve given everything you have. The world can wait — it\'s time to put yourself first.' },
  ],
  neutral: [
    { name: 'The Open Page', emoji: '📖', description: 'You\'re in the space between chapters. Not lost, not found — just ready for whatever comes next.' },
    { name: 'The Clear Sky', emoji: '🌤️', description: 'No storms, no fireworks — just a quiet openness. Sometimes the best mood is no mood at all.' },
  ],
};

const movieScenes: Record<string, MovieScene[]> = {
  happy: [
    { title: 'The Sunlit Montage', emoji: '☀️', description: 'A slow-motion shot of you running through a field of wildflowers, golden hour light catching your hair. The camera pulls back to reveal the whole world smiling with you.' },
    { title: 'The Dance Number', emoji: '💃', description: 'You\'re walking down a city street and strangers start choreographing around you. The whole block becomes a Broadway number and you\'re the lead.' },
  ],
  sad: [
    { title: 'The Rain Walk', emoji: '🌧️', description: 'You\'re walking home in the rain. No umbrella. The camera stays on your feet — splashing through puddles — until it slowly tilts up to your face. You\'re not crying. You\'re just letting the sky do it for you.' },
    { title: 'The Empty Room', emoji: '🪑', description: 'A slow pan across an apartment where every object holds a memory. The music swells as the camera finds you, sitting on the floor, holding a photograph.' },
  ],
  angry: [
    { title: 'The Punching Bag Scene', emoji: '🥊', description: 'A dimly lit gym, sweat flying, fists connecting in rhythm. The camera circles you as every hit lands harder than the last. This isn\'t violence — it\'s release.' },
    { title: 'The Drive Away', emoji: '🚗', description: 'Hands gripping the steering wheel, jaw clenched, the city blurring past. No destination. Just speed. The rearview mirror shows everything you\'re leaving behind.' },
  ],
  anxious: [
    { title: 'The Clock Scene', emoji: '⏰', description: 'Close-up: a clock ticking. Cut to your eyes darting. Cut to your hands fidgeting. The editing gets faster and faster until — silence. You close your eyes. One deep breath. The clock slows down.' },
    { title: 'The Crowd Parting', emoji: '🌊', description: 'You\'re standing still in a busy crosswalk while everyone moves in fast-forward around you. The sound fades to a hum. The camera slowly pushes in on your face. You\'re looking for one way out.' },
  ],
  calm: [
    { title: 'The Lakeside Shot', emoji: '🪷', description: 'A single take: you sitting by a still lake at dawn. Mist rises. A bird calls once. The camera doesn\'t move. Neither do you. Nothing happens — and it\'s perfect.' },
    { title: 'The Tea Ceremony', emoji: '🍵', description: 'Extreme close-ups: water pouring, steam rising, hands steady. Every motion is deliberate. Every sound is amplified. The whole scene is about the beauty of doing one thing at a time.' },
  ],
  motivated: [
    { title: 'The Training Montage', emoji: '🏃', description: 'Pre-dawn. Alarm goes off. You\'re already awake. A rapid-cut montage: running, lifting, sweating, pushing. The sun rises in time-lapse. By the time it\'s up, you\'ve already won the day.' },
    { title: 'The Locker Room Speech', emoji: '🏟️', description: 'You\'re in a dim locker room, head down, breathing slow. You look up at the mirror. The camera holds on your eyes. No words. Just a nod. You walk out. The crowd roars.' },
  ],
  focused: [
    { title: 'The Workshop Scene', emoji: '🔨', description: 'A dark room lit by a single desk lamp. Your hands move with precision — tools, sketches, measurements. Hours pass in a time-lapse. You don\'t look up once. The outside world doesn\'t exist.' },
    { title: 'The Code Montage', emoji: '💻', description: 'Screens glow in a dark room. Coffee cups stack up. The camera orbits slowly as your fingers fly across the keyboard. Green text reflects in your glasses. You\'re in the zone and nothing can break you out.' },
  ],
  confident: [
    { title: 'The Slow-Mo Walk', emoji: '🚶', description: 'You walk through a door and the world shifts to slow-motion. Wind catches your clothes. Everyone turns. The camera tracks you from below. You don\'t notice — or maybe you do, and you just don\'t care.' },
    { title: 'The Mirror Moment', emoji: '🪞', description: 'You adjust your collar in a mirror. A beat. You give yourself a nod — not vanity, just acknowledgment. You turn and walk out. The camera stays on the empty mirror. Something\'s changed.' },
  ],
  romantic: [
    { title: 'The Rain Kiss', emoji: '☔', description: 'You\'re both caught in a downpour, laughing, soaked. The camera circles as you pull them close. The rain blurs the lens. The music drops out. Just the sound of two heartbeats and the city going quiet.' },
    { title: 'The Slow Dance', emoji: '🎶', description: 'A dimly lit kitchen, 2AM. No music playing — you\'re humming. Your partner appears in the doorway. You pull them in. The camera slowly retreats through the window. The world outside doesn\'t exist.' },
  ],
  nostalgic: [
    { title: 'The Photo Album', emoji: '📸', description: 'A warm-lit room. You\'re on the floor, an open photo album in your lap. The camera pushes in on each photo — they slowly come to life in sepia-toned motion. You smile. You close the book. You hold it to your chest.' },
    { title: 'The Hometown Drive', emoji: '🛣️', description: 'You\'re driving through your old neighborhood. The camera is a passenger. Everything\'s a little smaller than you remember. You slow down in front of a house. You don\'t stop. You keep driving. The rearview mirror holds the past.' },
  ],
  contemplative: [
    { title: 'The Rooftop Scene', emoji: '🏙️', description: 'You\'re on a rooftop at dusk. The city hums below. The camera sits beside you, never moving. You\'re looking out, but your eyes are focused on something no one else can see. The lights come on, one by one.' },
    { title: 'The Library Shot', emoji: '📚', description: 'You\'re surrounded by towers of books in a dim library. A single lamp. Pages turning. The camera tracks along the spines of books — each one a world — until it reaches you. You\'re writing. Not reading. Writing.' },
  ],
  melancholic: [
    { title: 'The Autumn Walk', emoji: '🍂', description: 'A tree-lined path. Leaves falling in slow-motion. You walk alone, hands in pockets. The camera is far away — a wide shot. You\'re small against the landscape. Beautiful and aching. The music is strings and piano.' },
    { title: 'The Last Train', emoji: '🚆', description: 'You\'re on the last train of the night. Empty car. Lights flicker past. Your reflection in the glass looks like someone you used to know. The train moves. You stay still. The world blurs.' },
  ],
  dreamy: [
    { title: 'The Floating Scene', emoji: '🫧', description: 'You\'re standing in a field. Slowly, your feet leave the ground. The camera tilts as you rise — clouds, stars, the curve of the earth. You\'re not scared. You\'re home. The music is all reverb and wonder.' },
    { title: 'The Underwater Shot', emoji: '🌊', description: 'Everything is blue and slow. Your hair drifts. Light shatters on the surface above. You breathe — somehow — and the bubbles rise like a whole galaxy escaping. You\'re weightless. You\'re free.' },
  ],
  cool: [
    { title: 'The Neon Drive', emoji: '🌃', description: 'A convertible. Midnight. Neon signs reflecting on wet pavement. You\'re behind the wheel, one hand, eyes forward. The city is a blur of color. The synthwave track kicks in. The camera pulls back. You disappear into the light.' },
    { title: 'The Rooftop Bar', emoji: '🍸', description: 'You\'re leaning on a railing, city lights behind you. A drink in hand. Someone approaches. You don\'t turn. The camera is a slow 360 around you both. The conversation is in glances. The whole scene is a mood.' },
  ],
  energetic: [
    { title: 'The Crowd Surf', emoji: '🙌', description: 'You\'re at a concert. The bass drops. You\'re lifted above the crowd. The camera is shaky, kinetic, alive. Lights strobe. Hands reach up. You\'re not above them — you\'re one with them. Pure electricity.' },
    { title: 'The Sprint', emoji: '💨', description: 'You\'re running — not from anything, just toward. The camera is a drone tracking you through streets, alleys, parks. You\'re laughing. The wind is in your face. The whole world is a green light.' },
  ],
  playful: [
    { title: 'The Food Fight', emoji: '🍝', description: 'It starts with a single meatball. Then chaos. The camera catches everything in glorious slow-motion: flying pasta, laughing faces, sauce on the ceiling. You started it. You\'re not sorry. Best dinner ever.' },
    { title: 'The Prank Reveal', emoji: '😏', description: 'You\'re hiding behind a door, barely containing your grin. The camera is in on it. Footsteps approach. The door opens. You strike. The scene freezes on their face — pure shock. Cut to you, running, laughing, victorious.' },
  ],
  lonely: [
    { title: 'The Single Chair', emoji: '🪑', description: 'A wide shot of a dining table. One chair. One plate. One glass. The camera slowly pushes in. You sit down. You light a candle. You pour the wine. You raise a glass to no one. The camera holds. The silence is loud.' },
    { title: 'The Night Walk', emoji: '🌙', description: 'Empty streets. 3AM. Your shadow stretches under streetlights. The camera follows from behind, always a few steps back. You stop at a corner. You look up at a lit window. You keep walking. The light goes out.' },
  ],
  heartbroken: [
    { title: 'The Box Scene', emoji: '📦', description: 'You\'re packing a box. Every item is a scene: a hoodie, a ticket stub, a mug. The camera is close on your hands — steady, careful. You tape the box shut. You write a name on it. You push it to the wall. You sit on the floor. You don\'t move.' },
    { title: 'The Deleted Photos', emoji: '🗑️', description: 'Close-up: your thumb hovering over "Delete All." A tear hits the screen. You scroll through one last time — every photo a memory. You close your eyes. You press it. The screen goes blank. So do you.' },
  ],
  frustrated: [
    { title: 'The Traffic Jam', emoji: '🚦', description: 'Bumper to bumper. Horns blaring. You grip the wheel. The camera is a close-up on your knuckles — white. You hit the wheel once. The horn of your car joins the chorus. You put your head back. You breathe. The traffic doesn\'t move. Neither do you.' },
    { title: 'The Crumpled Paper', emoji: '📄', description: 'A desk covered in crumpled drafts. You stare at a blank screen. The cursor blinks. The camera circles. You type. You delete. You type. You delete. You stand up. You walk out. The cursor keeps blinking.' },
  ],
  stressed: [
    { title: 'The Split Screen', emoji: '📱', description: 'Split screen: left side, your face on a work call. Right side, your phone blowing up with messages. Bottom, a deadline countdown. The camera is all of them at once. You\'re in all of them at once. The music is a ticking clock. You close your eyes. You mute everything.' },
    { title: 'The Coffee Refill', emoji: '☕', description: 'A montage: coffee cup filling, empty, filling, empty. Each cut, the bags under your eyes get darker. The clock on the wall spins. You take a sip. It\'s cold. You drink it anyway. The camera holds on your tired eyes.' },
  ],
  overwhelmed: [
    { title: 'The Drowning Scene', emoji: '🌊', description: 'You\'re underwater. Things float past — a phone, a clock, a stack of papers. You reach for the surface. It\'s far. The camera is below you, looking up. Light shatters above. You kick. You break through. You gasp. You\'re okay. You\'re okay.' },
    { title: 'The Room Closing In', emoji: '📐', description: 'You\'re standing in a room. The walls slowly push in. The ceiling lowers. The camera pulls back but there\'s nowhere to go. You close your eyes. You put your hands on the wall. You push. The room stops. You exhale. The walls retreat.' },
  ],
  tired: [
    { title: 'The Couch Collapse', emoji: '🛋️', description: 'You walk through the door. Bag drops. Shoes off. You don\'t make it to the bed. The couch catches you. The camera is high above, looking down. You\'re asleep before the next cut. The lights dim on their own. The world can wait until tomorrow.' },
    { title: 'The Long Blink', emoji: '😪', description: 'Extreme close-up on your eyes. Heavy. The blink gets longer. The world goes dark, then light, then dark again. Each time the light comes back, the room is darker. The last blink doesn\'t open. The camera fades to black. Sleep wins.' },
  ],
  neutral: [
    { title: 'The Window Seat', emoji: '🪟', description: 'You\'re on a bus. Window seat. Headphones in. The world passes by — trees, buildings, people. The camera is outside, looking in. You\'re watching. You\'re not going anywhere. You\'re just... here. And that\'s enough.' },
    { title: 'The Empty Street', emoji: '🚶', description: 'A wide shot of an empty street at noon. You walk through the frame. The camera doesn\'t follow. You exit. The street is empty again. A bird passes. The scene holds. Nothing happens. It\'s kind of perfect.' },
  ],
};

export function generatePersona(state: MoodState): Persona {
  const list = personas[state.emotion] ?? personas.neutral;
  const idx = (state.energy + state.valence) % list.length;
  return list[idx];
}

export function generateMovieScene(state: MoodState): MovieScene {
  const list = movieScenes[state.emotion] ?? movieScenes.neutral;
  const idx = (state.energy + state.valence + state.keywords.length) % list.length;
  return list[idx];
}
