import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`
