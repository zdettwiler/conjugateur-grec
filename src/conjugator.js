import conjugation_endings from './conjugation_endings'
import {
  getStem,
  arrayToConjugationPattern,
  contractAugment,
  contractSuffix,
  contractEnding,
  reduplication
 } from './utils'
import { VOICE, MOOD, TENSE } from './constants'

export default function conjugator(verb, voice, mood, tense) {
  let verbInfo = getStem(verb)
  let conjugation = []

  if (verbInfo.type === '-ω') {
    const conjugation_settings = conjugation_endings[voice][mood][tense]
    
    if (conjugation_settings.reduplication) {
      verbInfo.stem = reduplication(verbInfo.stem)
    }

    conjugation = conjugation_settings.endings.map(ending => {
      return ending
        ? contractEnding(
          contractAugment(
            conjugation_settings.augment,
            contractSuffix(verbInfo.stem, conjugation_settings.suffix)
          ),
          ending
        )
        : undefined
    })
  }

  return arrayToConjugationPattern(conjugation)
}