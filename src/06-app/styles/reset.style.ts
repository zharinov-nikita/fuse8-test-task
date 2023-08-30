import { createGlobalStyle } from 'styled-components'

export const AppStyleReset = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Fira Sans',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
  }
`
