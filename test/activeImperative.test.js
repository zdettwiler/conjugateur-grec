import conjugate from '../src/conjugate'

const luo = conjugate('λυω')
// const phileo = conjugate('φιλεω')

describe('Active', () => {
  describe('Imperative', () => {
    describe('Present', () => {
      it('Present - λυω', () => {
        expect(luo.active.imperative.present).toEqual({
          sg: {
            2: 'λυε',
            3: 'λυετω'
          },
          pl: {
            2: 'λυετε',
            3: 'λυετωσαν'
          }
        })
      })
    })

    describe('Aorist', () => {
      it('Aorist - λυω', () => {
        expect(luo.active.imperative.aorist).toEqual({
          sg: {
            2: 'λυσον',
            3: 'λυσατω'
          },
          pl: {
            2: 'λυσατε',
            3: 'λυσατωσαν'
          }
        })
      })
    })
  })
})