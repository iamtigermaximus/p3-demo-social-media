import { merge } from 'theme-ui'
import base from './base'

const modern = merge(base, {
  buttons: {
    primary: {},
    secondary: {},
  },
  colors: {
    background: '#fafafa',
  },
  cards: {
    primary: {
      borderRadius: 8,
      background: 'white',
    },
  },
  forms: {
    input: {},
  },

  container: {
    borderRadius: 8,
    background: '#EDEDED',
  },
})

export default modern
