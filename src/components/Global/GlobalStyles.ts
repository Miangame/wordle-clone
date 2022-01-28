import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
  }
  body {
    #__next {
      height: 100vh;
    }
  }
`
