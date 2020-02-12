import { arrayToConjugationPattern } from '../src/utils'

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
