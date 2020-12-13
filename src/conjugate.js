import conjugator from './conjugator'
import { VOICE, MOOD, TENSE } from './constants'

export default function conjugate(verb) {
  return {
    active: {
      indicative: {
        // present: activeIndicativePresent(verb)
        present: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.PRESENT),
        future: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.FUTURE),
        imperfect: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.IMPERFECT),
        aorist: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.AORIST),
      }
    }
  }
}

// conjugate(verb).voice.mood.tense