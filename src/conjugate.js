import { activeIndicativePresent } from './activeIndicative'
import desinences from './desinences'
import getStem from './getStem'
import { arrayToConjugationPattern } from './utils'

const VOICE_ACTIVE = 'VOICE_ACTIVE'
const MOOD_INDICATIVE = 'indicatif'
const TENSE_PRESENT = 'present'
const TENSE_FUTURE = 'futur'

export default function conjugate(verb) {
  return {
    active: {
      indicative: {
        // present: activeIndicativePresent(verb)
        present: conjugator(verb, VOICE_ACTIVE, MOOD_INDICATIVE, TENSE_PRESENT),
        future: conjugator(verb, VOICE_ACTIVE, MOOD_INDICATIVE, TENSE_FUTURE),

      }
    }
  }
}

// conjugate(verb).voice.mood.tense

function contraction(stem, desinence) {
  let contractions = {
    ε: {
      'ει': 'ει',
      'ου': 'ου',
      'ε': 'ει',
      'ο': 'ου',
      'ω': 'ω'
    }
  }

  let lastStemChar = stem[stem.length-1]

  if (Object.keys(contractions).includes(lastStemChar)) {
    for (let beginEnding of Object.keys(contractions[lastStemChar])) {
      // if desinence starts with contractable
      if (desinence.indexOf(beginEnding) === 0) {
        return stem.slice(0, -1) // remove character from end of stem
          + contractions[lastStemChar][beginEnding] // add output of contraction
          + desinence.slice(beginEnding.length) // remove chars from beginning of desinence
      }
    }

  } else { // no contraction is done
    return stem + desinence
  }
}

function conjugator(verb, voice, mood, tense) {
  let verbInfo = getStem(verb)
  let conjugation = []

  if (verbInfo.type === '-ω') {
    const conjugation_settings = desinences[mood][tense]
    conjugation = conjugation_settings.endings.map(ending => {
      return contraction(verbInfo.stem + conjugation_settings.suffix, ending)
    })
  }

  return arrayToConjugationPattern(conjugation)

}