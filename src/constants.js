export const VOICE = {
  ACTIVE: 'active',
  MIDDLE: 'middle',
  PASSIVE: 'passive'
}

export const MOOD = {
  INDICATIVE: 'indicative',
  SUBJUNCTIVE: 'subjunctive'
}

export const TENSE = {
  PRESENT: 'present',
  FUTURE: 'future',
  IMPERFECT: 'imperfect',
  AORIST: 'aorist',
  PERFECT: 'perfect',
  PLUPERFECT: 'pluperfect'
}

export const VOWELS = {
  'α': 'α',
  'ἀ': 'α',
  'ἁ': 'α',
  'ε': 'ε',
  'ἐ': 'ε',
  'ἑ': 'ε',
  'η': 'η',
  'ἠ': 'η',
  'ἡ': 'η',
  'ι': 'ι',
  'ἰ': 'ι',
  'ἱ': 'ι',
  'ο': 'ο',
  'ὀ': 'ο',
  'ὁ': 'ο',
  'ω': 'ω',
  'ὠ': 'ω',
  'ὡ': 'ω',
  'υ': 'υ',
  'ὐ': 'υ',
  'ὑ': 'υ',
}

export const BREATHING = {
  'α': undefined,
  'ἀ': 'smooth',
  'ἁ': 'rough',
  'ε': undefined,
  'ἐ': 'smooth',
  'ἑ': 'rough',
  'η': undefined,
  'ἠ': 'smooth',
  'ἡ': 'rough',
  'ι': undefined,
  'ἰ': 'smooth',
  'ἱ': 'rough',
  'ο': undefined,
  'ὀ': 'smooth',
  'ὁ': 'rough',
  'ω': undefined,
  'ὠ': 'smooth',
  'ὡ': 'rough',
  'υ': undefined,
  'ὐ': 'smooth',
  'ὑ': 'rough',
}

export const APPLY_BREATHING = {
  'α': {
    smooth: 'ἀ',
    rough: 'ἁ'
  },
  'ε': {
    smooth: 'ἐ',
    rough: 'ἑ'
  },
  'η': {
    smooth: 'ἠ',
    rough: 'ἡ'
  },
  'ι': {
    smooth: 'ἰ',
    rough: 'ἱ'
  },
  'ο': {
    smooth: 'ὀ',
    rough: 'ὁ'
  },
  'ω': {
    smooth: 'ὠ',
    rough: 'ὡ'
  },
  'υ': {
    smooth: 'ὐ',
    rough: 'ὑ'
  },
}