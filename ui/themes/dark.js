import { merge } from 'theme-ui'
import base from './base'

const dark = merge(base, {
  fonts: {
    body: '"Roboto", serif',
    heading: '"Roboto"',
    monospace: 'Menlo, monospace',
  },

  colors: {
    text: 'white',
    background: '#082032',
    secondary: 'yellow',
  },

  buttons: {
    primary: {
      fontFamily: 'inherit',
      color: 'white',
      borderRadius: '9',
      textTransform: 'uppercase',
      bg: '#FF4C29',
      transition: 'background 100ms ease-in-out',
      '&:hover': {
        bg: '#082032',
        color: 'white',
      },
      '&:disabled': {
        bg: '#FF4C29',
        opacity: 0.5,
        color: 'white',
      },
    },

    secondary: {
      color: 'purple',
      bg: 'purple',
      '&:hover': {
        color: 'purple',
      },
    },
  },

  cards: {
    primary: {
      background: '#2C394B',
    },
  },

  forms: {
    input: {
      fontFamily: 'body',
      borderRadius: 0,
      backgroundColor: '#F2EBE9',
      border: 'transparent',
      color: 'gray',
      outlineColor: 'secondary',
    },
  },

  text: {
    heading: {
      letterSpacing: '1px',
    },
  },

  container: {
    border: '1px solid #FF4C29',
  },
})

export default dark
