import { activeIndicativePresent } from './activeIndicative'
import desinences from './desinences'
import getStem from './getStem'
import { arrayToConjugationPattern } from './utils'

import { VOICE, MOOD, TENSE } from './constants'

export default function conjugate(verb) {
  return {
    active: {
      indicative: {
        // present: activeIndicativePresent(verb)
        present: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.PRESENT),
        future: conjugator(verb, VOICE.ACTIVE, MOOD.INDICATIVE, TENSE.FUTURE),

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