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