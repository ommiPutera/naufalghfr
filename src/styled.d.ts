import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string[]
      warning: string[]
      success: string[]
      danger: string[]
      light: string[]
      dark: string[]
    }
  }
}
