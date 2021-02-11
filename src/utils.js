import {
  VOWELS,
  BREATHING,
  APPLY_BREATHING
} from './constants';

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
  if (!augment || augment === '') return stem

  const contractions = {
    ἐ: {
      'παρα': '', 
      'ἐπι': '', 
      'δια': '', 
      'κατα': '', 
      'μετα': '', 
      'περι': '', 
      'ὑπερ': '', 
      'ὑπο': '', 
      'εἰς': '', 
      'προς': '', 
      'ἀπο': '', 
      'ἐκ': '', 
      'ἐνωπιον': '', 
      'ἐξω': '', 
      'ἑως': '', 
      'προ': '', 
      'ἐν': '', 
      'συν': '', 
      'ἀ': 'ἠ',
      'ἐ': 'ἠ',
      'ὀ': 'ἠ',
      'ἠ': 'ἠ',
      'ἰ': 'ἰ',
      'ὐ': 'ὐ',
      'ὠ': 'ὠ'
    }
  }

  let firstStemChar = stem[0]

  // also need to check for particles

  if (Object.keys(contractions).includes(augment)) {
    for (let beginStem of Object.keys(contractions[augment])) {
      // if stem starts with contractable
      if (stem.indexOf(beginStem) === 0) {
        return contractions[augment][beginStem] // add output of contraction
          + stem.substring(beginStem.length) // remove first character from stem
      }
    }

  } //else { // no contraction is done
    return augment + stem
  //}
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

// if suffix is always σ then simplify
export function contractSuffix(stem, suffix) {
  if (!suffix || suffix === '') return stem

  const contractions = {
    ε: { 'σ': 'ησ' },

    γ: { 'σ': 'ξ' },

    π: { 'σ': 'ψ' },
    β: { 'σ': 'ψ' },
    φ: { 'σ': 'ψ' },
    
    τ: { 'σ': 'σ' },
    δ: { 'σ': 'σ' },
    θ: { 'σ': 'σ' },
    ζ: { 'σ': 'σ' }
  }

  let lastStemChar = stem[stem.length-1]

  if (Object.keys(contractions).includes(lastStemChar)) {
    for (let beginSuffix of Object.keys(contractions[lastStemChar])) {
      // if ending starts with contractable
      if (suffix.indexOf(beginSuffix) === 0) {
        return stem.slice(0, -1) // remove character from end of stem
          + contractions[lastStemChar][beginSuffix] // add output of contraction
          + suffix.slice(beginSuffix.length) // remove chars from beginning of suffix
      }
    }

  } else { // no contraction is done
    return stem + suffix
  }
}

export function prepositionElision() {

}

export function contraction(firstWord, secondWord) {
  const breathing = BREATHING[secondWord[0]]
  const contractions = {
    'α': {
      'α': 'η',
      'ε': '',
      'η': '',
      'ι': '',
      'ο': '',
      'ω': '',
      'υ': '',
    },
    'ε': {
      'α': 'η',
      'ε': 'η',
      'η': 'η',
      'ι': '',
      'ο': 'η',
      'ω': '',
      'υ': '',
    },
    'η': {
      'α': '',
      'ε': '',
      'η': '',
      'ι': '',
      'ο': '',
      'ω': '',
      'υ': '',
    },
    'ι': {
      'α': '',
      'ε': '',
      'η': '',
      'ι': '',
      'ο': '',
      'ω': '',
      'υ': '',
    },
    'ο': {
      'α': '',
      'ε': '',
      'η': '',
      'ι': '',
      'ο': 'ω',
      'ω': '',
      'υ': '',
    },
    'ω': {
      'α': '',
      'ε': '',
      'η': '',
      'ι': '',
      'ο': '',
      'ω': '',
      'υ': '',
    },
    'υ': {
      'α': '',
      'ε': '',
      'η': '',
      'ι': '',
      'ο': '',
      'ω': '',
      'υ': '',
    },
  }
  
  let lastLetterFirstWord = removeBreathing(firstWord.slice(firstWord.length-1))
  let firstLetterSecondWord = removeBreathing(secondWord[0])

  if (firstWord.length === 1 && breathing) {
    return APPLY_BREATHING[contractions[lastLetterFirstWord][firstLetterSecondWord]][breathing] // add output of contraction
      + secondWord.slice(1) // remove chars from beginning of suffix
  
  } else {
    return firstWord.slice(0, -1) // remove character from end of stem
      + contractions[lastLetterFirstWord][firstLetterSecondWord] // add output of contraction
      + secondWord.slice(1) // remove chars from beginning of suffix
  }
}

export function reduplication(stem) {
  if (isVowel(stem[0])) {
    return contraction(stem[0], stem)
  }
  const exceptions = {
    'χ': 'κ',
    'θ': 'τ',
    'φ': 'π'
  }

  let firstLetter = exceptions[stem[0]] || stem[0] 
  return `${firstLetter}ε${stem}`
}
function isVowel(letter) {
  return Object.keys(VOWELS).includes(letter)
}
function removeBreathing(vowel) {
 return VOWELS[vowel]
}