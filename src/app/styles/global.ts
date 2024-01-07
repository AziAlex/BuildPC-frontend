import { createGlobalStyle } from 'styled-components'
import { pxToRem } from '@/shared/utils/pxToRem.ts'

export default createGlobalStyle`
  ::selection {
    background: #CCCCCC; /* Цвет фона */
    color: #000000; /* Цвет текста */
  }
  
  *, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 14px;
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
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  
  h1 {
    font-size: ${pxToRem(58)};
  }
  
  h2 {
    font-size: ${pxToRem(48)};
  }
  
  h3 {
    font-size: ${pxToRem(34)};
  }
  
  h4 {
    font-size: ${pxToRem(24)};
  }
  
  h5 {
    font-size: ${pxToRem(18)};
  }
  
  h6 {
    font-size: ${pxToRem(16)};
  }
`
