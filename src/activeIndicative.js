import desinences from './desinences'
import getStem from './getStem'
import { arrayToConjugationPattern } from './utils'


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

export function activeIndicativePresent(verb) {
  let verbInfo = getStem(verb)
  let conjugation = []

  if (verbInfo.type === '-ω') {
    const endings = ["ω", "εις", "ει", "ομεν", "ετε", "ουσι(ν)"]
    conjugation = endings.map(ending => {
      return contraction(verbInfo.stem, ending)
    })
  }

  return arrayToConjugationPattern(conjugation)
}

// export function indicativeFuture(verb) {
//   let verbInfo = getStem(verb)
//   let conjugation = conjugationPattern

//   if (verbInfo.type === '-ω') {
//     for (let nb in conjugation) {
//       for (let pers in conjugation[nb]) {
//         conjugation[nb][pers] = contraction(verbInfo.stem, desinences.indicatif.present.desinences[nb][pers])
//       }
//     }
//   }

//   return conjugation
// }