import conjugation_endings from './conjugation_endings'
import {
  getStem,
  arrayToConjugationPattern,
  contractAugment,
  contractEnding
 } from './utils'
import { VOICE, MOOD, TENSE } from './constants'

export default function conjugator(verb, voice, mood, tense) {
  let verbInfo = getStem(verb)
  let conjugation = []

  if (verbInfo.type === '-ω') {
    const conjugation_settings = conjugation_endings[voice][mood][tense]

    conjugation = conjugation_settings.endings.map(ending => {
      return contractEnding(conjugation_settings.augment + verbInfo.stem + conjugation_settings.suffix, ending)
    })
  }

  return arrayToConjugationPattern(conjugation)
}