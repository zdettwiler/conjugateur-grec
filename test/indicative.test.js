import { activeIndicativePresent } from '../src/activeindicative'
import conjugate from '../src/conjugate'

const luo = conjugate('λυω')
const phileo = conjugate('φιλεω')

describe('indicativePresent()', () => {
  it('should conjugate λυω properly', () => {
    expect(luo.active.indicative.present).toEqual({
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
    expect(phileo.active.indicative.present).toEqual({
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

describe('indicativeFuture()', () => {
  it('should conjugate λυω properly', () => {
    expect(luo.active.indicative.future).toEqual({
      sg: {
        1: 'λυσω',
        2: 'λυσεις',
        3: 'λυσει'
      },
      pl: {
        1: 'λυσομεν',
        2: 'λυσετε',
        3: 'λυσουσι(ν)'
      }
    })
  })

  it('should conjugate φιλεω properly', () => {
    expect(phileo.active.indicative.future).toEqual({
      sg: {
        1: 'φιλεσω',
        2: 'φιλεσεις',
        3: 'φιλεσει'
      },
      pl: {
        1: 'φιλεσομεν',
        2: 'φιλεσετε',
        3: 'φιλεσουσι(ν)'
      }
    })
  })
})