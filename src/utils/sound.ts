let context: AudioContext | null = null;

/** Lazily creates (and resumes) a shared AudioContext — must be called from a user gesture. */
function getAudioContext() {
  if (typeof window === "undefined" || !window.AudioContext) return null;
  context ??= new AudioContext();
  if (context.state === "suspended") void context.resume();
  return context;
}

/** Short filtered-noise burst — the physical "click" of a switch. */
function playClick(audio: AudioContext, at: number, volume: number) {
  const length = Math.floor(audio.sampleRate * 0.03);
  const buffer = audio.createBuffer(1, length, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length) ** 3;

  const source = audio.createBufferSource();
  source.buffer = buffer;
  const filter = audio.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = 1800;
  const gain = audio.createGain();
  gain.gain.value = volume;

  source.connect(filter).connect(gain).connect(audio.destination);
  source.start(at);
}

/** Soft bell-like note with a quick attack and gentle decay. */
function playNote(audio: AudioContext, frequency: number, at: number, volume: number) {
  const oscillator = audio.createOscillator();
  oscillator.type = "triangle";
  oscillator.frequency.value = frequency;

  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(volume, at + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.35);

  oscillator.connect(gain).connect(audio.destination);
  oscillator.start(at);
  oscillator.stop(at + 0.4);
}

const NOTES = {
  // Rising major third for sunrise, falling for nightfall.
  light: [659.25, 987.77], // E5 → B5
  dark: [987.77, 523.25], // B5 → C5
};

/** Switch click + a two-note chime that rises (light) or falls (dark). */
export function playThemeToggleSound(theme: "light" | "dark") {
  const audio = getAudioContext();
  if (!audio) return;

  const now = audio.currentTime;
  playClick(audio, now, 0.35);
  NOTES[theme].forEach((frequency, index) => playNote(audio, frequency, now + 0.04 + index * 0.09, 0.12));
}

/**
 * A synthesized cat "meow": a buzzy voice whose pitch rises then falls, shaped by
 * two moving formant (vowel) filters so it glides from "mee" to "ow".
 * Returns the duration in ms so callers can time follow-up effects.
 */
export function playMeow(): number {
  const audio = getAudioContext();
  if (!audio) return 0;

  const now = audio.currentTime;
  const duration = 0.72;

  // Voice: sawtooth with a rise-then-fall pitch contour and a little vibrato.
  const voice = audio.createOscillator();
  voice.type = "sawtooth";
  voice.frequency.setValueAtTime(430, now);
  voice.frequency.linearRampToValueAtTime(760, now + 0.13);
  voice.frequency.linearRampToValueAtTime(640, now + 0.4);
  voice.frequency.exponentialRampToValueAtTime(360, now + duration);

  const vibrato = audio.createOscillator();
  vibrato.frequency.value = 6;
  const vibratoDepth = audio.createGain();
  vibratoDepth.gain.value = 9;
  vibrato.connect(vibratoDepth).connect(voice.frequency);

  // Two formants sweeping from an "ee" vowel to an "ow" vowel.
  const formant = (from: number, peak: number, to: number, q: number) => {
    const filter = audio.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = q;
    filter.frequency.setValueAtTime(from, now);
    filter.frequency.linearRampToValueAtTime(peak, now + 0.22);
    filter.frequency.linearRampToValueAtTime(to, now + duration);
    return filter;
  };
  const first = formant(500, 950, 650, 6);
  const second = formant(2300, 1500, 950, 8);

  // "m" at the start (soft attack), then a gentle fade.
  const envelope = audio.createGain();
  envelope.gain.setValueAtTime(0.0001, now);
  envelope.gain.exponentialRampToValueAtTime(0.5, now + 0.09);
  envelope.gain.setValueAtTime(0.5, now + 0.42);
  envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  const smooth = audio.createBiquadFilter();
  smooth.type = "lowpass";
  smooth.frequency.value = 3500;

  voice.connect(first).connect(envelope);
  voice.connect(second).connect(envelope);
  envelope.connect(smooth).connect(audio.destination);

  voice.start(now);
  vibrato.start(now);
  voice.stop(now + duration + 0.05);
  vibrato.stop(now + duration + 0.05);

  return duration * 1000;
}
