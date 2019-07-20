export default function getStem(verb) {
  let verbInfo = {
    verb,
    stem: '',
    type: ''
  }

  if (verb.substring(verb.length-1, verb.length) === 'ω') {
    verbInfo.stem = verb.substring(0, verb.length-1)
    verbInfo.type = '-ω'
  }

  return verbInfo
}
