import conjugate from '../src/conjugate'

const luo = conjugate('λυω')
const phileo = conjugate('φιλεω')

describe('Active', () => {
  describe('Indicative', () => {
    it('Present - λυω', () => {
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

    it('Future - λυω', () => {
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

    it('Imperfect - λυω', () => {
      expect(luo.active.indicative.imperfect).toEqual({
        sg: {
          1: 'ἐλυον',
          2: 'ἐλυες',
          3: 'ἐλυε(ν)'
        },
        pl: {
          1: 'ἐλυομεν',
          2: 'ἐλυετε',
          3: 'ἐλυον'
        }
      })
    })

    it('Present - φιλεω', () => {
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

    it('Future - φιλεω', () => {
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


})