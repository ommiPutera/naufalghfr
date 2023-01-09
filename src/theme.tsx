import {MantineThemeColorsOverride} from '@mantine/core'
import {createGlobalStyle, DefaultTheme} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {}
`

const colors = {
  primary: ['#4C4DDC'],
  warning: [
    '#fff7ed',
    '#ffedd5',
    '#fed7aa',
    '#fdba74',
    '#fb923c',
    '#f97316',
    '#ea580c',
    '#c2410c',
    '#9a3412',
    '#7c2d12',
  ],
  success: [
    '#f0fdf4',
    '#dcfce7',
    '#bbf7d0',
    '#86efac',
    '#4ade80',
    '#22c55e',
    '#16a34a',
    '#15803d',
    '#166534',
    '#14532d',
  ],
  danger: [
    '#ffe5e5',
    '#ffcccc',
    '#ffb2b2',
    '#ff9999',
    '#ff7f7f',
    '#ff6666',
    '#ff4c4c',
    '#ff3232',
    '#ff1919',
    '#ff0000',
  ],
  light: ['#ffffff', '#9E9E9E'],
  dark: [
    '#fafafa',
    '#f4f4f5',
    '#e4e4e7',
    '#d4d4d8',
    '#a1a1aa',
    '#383851',
    '#2e2e42',
    '#232333',
    '#19191e',
    '#0f0f15',
  ],
}

const styledColors = {
  ...colors,
}

const styledTheme: DefaultTheme = {
  colors: styledColors,
}

const Mantinecolors: MantineThemeColorsOverride = {
  ...colors,
}

const mantineTheme = {
  colors: Mantinecolors,
  fontFamily: 'Inter, sans-serif',
  fontSizes: {
    xs: 11,
    sm: 13,
    md: 17,
    lg: 18,
    xl: 22,
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 620,
          sm: 920,
          md: 1160,
          lg: 1320,
          xl: 1480,
        },
      },
    },
  },
  defaultRadius: 'sm',
  radius: {
    xs: 2,
    sm: 6,
    md: 9,
    lg: 14,
    xl: 30,
  },
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1100,
    xl: 1440,
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: {fontSize: 104, lineHeight: 1.2, fontWeight: 900},
      h2: {fontSize: 24, lineHeight: 1.3, fontWeight: 500},
      h3: {fontSize: 22, lineHeight: 1.3, fontWeight: 500},
      h4: {fontSize: 20, lineHeight: 1.3, fontWeight: 500},
      h5: {fontSize: 16, lineHeight: 1.3, fontWeight: 500},
      h6: {fontSize: 16, lineHeight: 1.5, fontWeight: 500},
    },
  },
  white: '#fff',
  black: '#000',
  lineHeight: 1.55,
  primaryColor: 'primary',
  activeStyles: {transform: 'translateY(0)'},
  datesLocale: 'en',
}

export {styledTheme, mantineTheme, GlobalStyle}
