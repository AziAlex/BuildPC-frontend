import { createGlobalStyle } from 'styled-components'
import { pxToRem } from '@/shared/utils/pxToRem.ts'

export default createGlobalStyle`
  ::selection {
    background: #CCCCCC; /* Цвет фона */
    color: #000000; /* Цвет текста */
  }
  
  //scrollbar
  ::-webkit-scrollbar {
    width: 4px;
    height: 100%;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--grayLight);
    box-shadow: inset 0 0 5px var(--grayLight);
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  *, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 14px;
    scrollbar-width: thin;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    scroll-behavior: smooth;
  }
  
  button {
    cursor: pointer;
    background-color: transparent;
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

  h2, h3, h4, h6 {
    color: var(--black);
  }
  
  h1 {
    font-size: ${pxToRem(58)};
  }
  
  h2 {
    font-size: ${pxToRem(32)};
  }
  
  h3 {
    font-size: ${pxToRem(24)};
  }
  
  h4 {
    font-size: ${pxToRem(20)};
  }
  
  h5 {
    font-size: ${pxToRem(18)};
    color: var(--grayDark);
  }
  
  h6 {
    font-size: ${pxToRem(16)};
  }
`
