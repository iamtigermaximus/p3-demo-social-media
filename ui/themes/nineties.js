import { merge } from 'theme-ui'
import base from './base'

const nineties = merge(base, {
  fonts: {
    body: '"Comic Sans MS", serif',
    heading: '"Righteous", cursive',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: 'white',
    background: 'rgb(48, 42, 140)',
    secondary: 'rgb(242, 239, 143)',
  },
  buttons: {
    primary: {
      fontFamily: 'inherit',
      color: 'white',
      borderRadius: '0',
      textTransform: 'uppercase',
      bg: 'hotpink',
      transition: 'background 100ms ease-in-out',
      '&:hover': {
        bg: 'pink',
        color: 'black',
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
      background:
        'linear-gradient(30deg, rgba(231,152,89,0.95) 20%, rgba(214,83,206,1) 80%)',
    },
  },
  forms: {
    input: {
      fontFamily: 'body',
      borderRadius: 0,
      backgroundColor: '#FFE2E2',
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
    background: '#FFE2E2',
    borderRadius: 8,
    color: 'black',
  },
})

export default nineties
