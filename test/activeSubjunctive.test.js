import conjugate from '../src/conjugate'

const luo = conjugate('λυω')

describe('Active', () => {
  describe('Subjunctive', () => {
    describe('Present', () => {
      it('Present - λυω', () => {
        expect(luo.active.subjunctive.present).toEqual({
          sg: {
            1: 'λυω',
            2: 'λυῃς',
            3: 'λυῃ'
          },
          pl: {
            1: 'λυωμεν',
            2: 'λυητε',
            3: 'λυωσι(ν)'
          }
        })
      })
    })

    describe('Aorist', () => {
      it('Aorist - λυω', () => {
        expect(luo.active.subjunctive.aorist).toEqual({
          sg: {
            1: 'λυσω',
            2: 'λυσῃς',
            3: 'λυσῃ'
          },
          pl: {
            1: 'λυσωμεν',
            2: 'λυσητε',
            3: 'λυσωσι(ν)'
          }
        })
      })
    })

    describe('Perfect', () => {
      it('Perfect - λυω', () => {
        expect(luo.active.subjunctive.perfect).toEqual({
          sg: {
            1: 'λελυκω',
            2: 'λελυκῃς',
            3: 'λελυκῃ'
          },
          pl: {
            1: 'λελυκωμεν',
            2: 'λελυκητε',
            3: 'λελυκωσι(ν)'
          }
        })
      })
    })
  })
})
