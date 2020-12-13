export function getStem(verb) {
  let verbInfo = {
    verb,
    stem: '',
    type: ''
  }

  if (verb.endsWith('ω')) {
    verbInfo.stem = verb.substring(0, verb.length-1)
    verbInfo.type = '-ω'
  }

  return verbInfo
}

export function arrayToConjugationPattern(array) {
  if (array.length !== 6) { return }
  
  return {
    sg: {
      1: array[0],
      2: array[1],
      3: array[2]
    },
    pl: {
      1: array[3],
      2: array[4],
      3: array[5]
    }
  }
}

export function contractAugment(augment, stem) {
  // let contractions = {
  //   ε: {
  //     'ει': 'ει',
  //     'ου': 'ου',
  //     'ε': 'ει',
  //     'ο': 'ου',
  //     'ω': 'ω'
  //   }
  // }

  // let lastStemChar = stem[stem.length-1]

  // if (Object.keys(contractions).includes(lastStemChar)) {
  //   for (let beginEnding of Object.keys(contractions[lastStemChar])) {
  //     // if ending starts with contractable
  //     if (ending.indexOf(beginEnding) === 0) {
  //       return stem.slice(0, -1) // remove character from end of stem
  //         + contractions[lastStemChar][beginEnding] // add output of contraction
  //         + ending.slice(beginEnding.length) // remove chars from beginning of ending
  //     }
  //   }

  // } else { // no contraction is done
    return augment + stem
  // }
}

export function contractEnding(stem, ending) {
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
      // if ending starts with contractable
      if (ending.indexOf(beginEnding) === 0) {
        return stem.slice(0, -1) // remove character from end of stem
          + contractions[lastStemChar][beginEnding] // add output of contraction
          + ending.slice(beginEnding.length) // remove chars from beginning of ending
      }
    }

  } else { // no contraction is done
    return stem + ending
  }
}