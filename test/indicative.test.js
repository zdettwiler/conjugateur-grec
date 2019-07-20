import { indicativePresent } from '../src/indicative'

describe('indicativePresent()', () => {

  it('should conjugate λυω properly', () => {
    expect(indicativePresent('λυω')).toEqual({
      sg: {
        1: 'λυω',
        2: 'λυεις',
        3: 'λυει'
      },
      pl: {
        1: 'λυομεν',
        2: 'λυετε',
        3: 'λυουσι(ν)'
      }
    })
  })

  it('should conjugate φιλεω properly', () => {
    expect(indicativePresent('φιλεω')).toEqual({
      sg: {
        1: 'φιλω',
        2: 'φιλεις',
        3: 'φιλει'
      },
      pl: {
        1: 'φιλουμεν',
        2: 'φιλειτε',
        3: 'φιλουσι(ν)'
      }
    })
  })
})
