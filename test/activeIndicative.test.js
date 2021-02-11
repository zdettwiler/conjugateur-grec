import conjugate from '../src/conjugate'

const luo = conjugate('λυω')
// const phileo = conjugate('φιλεω')

describe('Active', () => {
  describe('Indicative', () => {
    describe('Present', () => {
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

      // it('Present - φιλεω', () => {
      //   expect(phileo.active.indicative.present).toEqual({
      //     sg: {
      //       1: 'φιλω',
      //       2: 'φιλεις',
      //       3: 'φιλει'
      //     },
      //     pl: {
      //       1: 'φιλουμεν',
      //       2: 'φιλειτε',
      //       3: 'φιλουσι(ν)'
      //     }
      //   })
      // })
    })

    describe('Future', () => {
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

      // it('Future - φιλεω', () => {
      //   expect(phileo.active.indicative.future).toEqual({
      //     sg: {
      //       1: 'φιλησω',
      //       2: 'φιλησεις',
      //       3: 'φιλησει'
      //     },
      //     pl: {
      //       1: 'φιλησομεν',
      //       2: 'φιλησετε',
      //       3: 'φιλησουσι(ν)'
      //     }
      //   })
      // })
    })

    describe('Imperfect', () => {
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

      // it('Imperfect - φιλεω', () => {
      //   expect(luo.active.indicative.imperfect.sg[3]).toEqual('')
      // })
    })

    describe('Aorist', () => {
      it('Aorist - λυω', () => {
        expect(luo.active.indicative.aorist).toEqual({
          sg: {
            1: 'ἐλυσα',
            2: 'ἐλυσας',
            3: 'ἐλυσε(ν)'
          },
          pl: {
            1: 'ἐλυσαμεν',
            2: 'ἐλυσατε',
            3: 'ἐλυσαν'
          }
        })
      })
    })

    describe('Perfect', () => {
      it('Perfect - λυω', () => {
        expect(luo.active.indicative.perfect).toEqual({
          sg: {
            1: 'λελυκα',
            2: 'λελυκας',
            3: 'λελυκεν'
          },
          pl: {
            1: 'λελυκαμεν',
            2: 'λελυκατε',
            3: 'λελυκασιν'
          }
        })
      })
    })

    describe('Pluperfect', () => {
      it('Pluperfect - λυω', () => {
        expect(luo.active.indicative.pluperfect).toEqual({
          sg: {
            1: '(ἐ)λελυκειν',
            2: '(ἐ)λελυκεις',
            3: '(ἐ)λελυκει'
          },
          pl: {
            1: '(ἐ)λελυκειμεν',
            2: '(ἐ)λελυκειτε',
            3: '(ἐ)λελυκεισαν'
          }
        })
      })
    })
  })
})

describe('Contractions', () => {
  // it('suffix βλεπω', () => {
  //   expect(conjugate('βλεπω').active.indicative.future.sg[1]).toEqual('βλεψω')
  // })

  // it('suffix βαπτιζω', () => {
  //   expect(conjugate('βαπτιζω').active.indicative.future.sg[1]).toEqual('βαπτισω')
  // })

  // it('suffix ἀνοιγω', () => {
  //   expect(conjugate('ἀνοιγω').active.indicative.future.sg[1]).toEqual('ἀνοιξω')
  // })

   
  // it('augment ἀκουω', () => {
  //   expect(conjugate('ἀκουω').active.indicative.imperfect.sg[1]).toEqual('ἠκουον')
  // })

  // it('augment ἀπολυω', () => {
  //   expect(conjugate('ἀπολυω').active.indicative.imperfect.sg[1]).toEqual('ἀπελυον')
  // })

  // it('augment ἐκβαλλω', () => {
  //   expect(conjugate('ἐκβαλλω').active.indicative.imperfect.sg[1]).toEqual('ἐξεβαλλον')
  // })

  // it('augment ὑπαγω', () => {
  //   expect(conjugate('ὑπαγω').active.indicative.imperfect.sg[1]).toEqual('ὑπηγον')
  // })

  // it('augment συναγω', () => {
  //   expect(conjugate('συναγω').active.indicative.imperfect.sg[1]).toEqual('συνηγον')
  // })
})