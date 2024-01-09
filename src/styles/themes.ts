import { feedback, typography } from './tokens'

export const darkTheme = {
  color: {
    brand: {
      primary: '#E1E1E6',
      secondary: '#C4C4CC',
      tertiary: '#8D8D99',
    },
    basic: {
      base: {
        primary: '#E1E1E6',
        secondary: '#C4C4CC',
        tertiary: '#8D8D99',
      },
      auxiliary: {
        primary: '#29292E',
        secondary: '#202024',
        tertiary: '#121214',
      },
      support: {
        primary: '#7C7C8A',
        secondary: '#505059',
        tertiary: '#323238',
      },
    },
    feedback,
  },
  typography,
} as const

export const lightTheme = {
  color: {
    brand: {
      primary: '#121214',
      secondary: '#202024',
      tertiary: '#29292E',
    },
    basic: {
      base: {
        primary: '#E1E1E6',
        secondary: '#C4C4CC',
        tertiary: '#8D8D99',
      },
      auxiliary: {
        primary: '#8D8D99',
        secondary: '#C4C4CC',
        tertiary: '#E1E1E6',
      },
      support: {
        primary: '#323238',
        secondary: '#505059',
        tertiary: '#7C7C8A',
      },
    },
    feedback,
  },
  typography,
} as const
