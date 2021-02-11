import {
  getStem,
  arrayToConjugationPattern,
  contraction,
  reduplication
} from '../src/utils'

describe('getStem()', () => {
  it('should return stem and type', () => {
    expect(getStem('λυω')).toEqual(
      expect.objectContaining({
        verb: 'λυω',
        stem: 'λυ',
        type: '-ω'
      })
    )
  })
})

describe('arrayToConjugationPattern()', () => {
  it('returns conjugation pattern object', () => {
    expect(arrayToConjugationPattern(['', '', '', '', '', ''])).toEqual({
      sg: {
        1: '',
        2: '',
        3: ''
      },
      pl: {
        1: '',
        2: '',
        3: ''
      }
    })
  })

  it('returns undefined if array.length !== 6', () => {
    expect(arrayToConjugationPattern(['', ''])).toEqual(undefined)
  })
})

describe('contraction()', () => {
  it('ε + α = η', () => {
    expect(contraction('ε', 'α')).toBe('η')
  })

  it('ε + ε = η', () => {
    expect(contraction('ε', 'ε')).toBe('η')
  })

  it('ε + η = η', () => {
    expect(contraction('ε', 'η')).toBe('η')
  })
  
  it('ε + ο = η', () => {
    expect(contraction('ε', 'ο')).toBe('η')
  })

  it('α + α = η', () => {
    expect(contraction('α', 'α')).toBe('η')
  })

  it('ο + ο = ω', () => {
    expect(contraction('ο', 'ο')).toBe('ω')
  })

  it('ο + ὀ = ὠ', () => {
    expect(contraction('ο', 'ὀ')).toBe('ὠ')
  })

  it('ο + ὁ = ὡ', () => {
    expect(contraction('ο', 'ὁ')).toBe('ὡ')
  })

})
describe('reduplication()', () => {
  it('is a function', () => {
    expect(reduplication).toBeInstanceOf(Function);
  })

  it('reduplicates first consonance', () => {
    expect(reduplication('λυω')).toBe('λελυω');
    expect(reduplication('πιστευω')).toBe('πεπιστευω');
  })

  it('reduplicates χ correctly', () => {
    expect(reduplication('χat')).toBe('κεχat');
  })

  it('reduplicates θ correctly', () => {
    expect(reduplication('θεραπευω')).toBe('τεθεραπευω');
  })

  it('reduplicates φ correctly', () => {
    expect(reduplication('φιλεω')).toBe('πεφιλεω');
  })

  it('reduplicates s-sound consonance correclty', () => {
    // TO DO: when is the s-sound reduplicated consonnance removed?
  })

  it('reduplicates first α vowel', () => {
    expect(reduplication('ἀbc')).toBe('ἠbc');
    expect(reduplication('ἁbc')).toBe('ἡbc');
  })

  it('reduplicates first ε vowel', () => {
    expect(reduplication('ἐfg')).toBe('ἠfg');
    expect(reduplication('ἑfg')).toBe('ἡfg');
  })

  it('reduplicates first ο vowel', () => {
    expect(reduplication('ὀpq')).toBe('ὠpq');
    expect(reduplication('ὁpq')).toBe('ὡpq');
  })
})

