import { activeIndicativePresent } from './activeIndicative'


export default function conjugate(verb) {
  return {
    active: {
      indicative: {
        present: activeIndicativePresent(verb)
      }
    }
  }
}

// conjugate(verb).voice.mood.tense