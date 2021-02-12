import conjugator from './conjugator'
import { VOICE, MOOD, TENSE } from './constants'

export default function conjugate(verb) {
  return {
    active: {
      indicative: {
        present: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.PRESENT),
        future: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.FUTURE),
        imperfect: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.IMPERFECT),
        aorist: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.AORIST),
        perfect: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.PERFECT),
        pluperfect: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.PLUPERFECT),
      },
      subjunctive: {
        present: conjugator(verb, VOICE.ACTIVE, MOOD.SUBJUNCTIVE, TENSE.PRESENT),
        aorist: conjugator(verb, VOICE.ACTIVE, MOOD.SUBJUNCTIVE, TENSE.AORIST),
        perfect: conjugator(verb, VOICE.ACTIVE, MOOD.SUBJUNCTIVE, TENSE.PERFECT),
      }
    }
  }
}

// conjugate(verb).voice.mood.tense