import getStem from '../src/getStem'

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
