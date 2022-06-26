import React from 'react'
import { createGlobalStyle } from "styled-components"

import Header from './components/Header'
import About from './components/main/About'
import Projects from './components/main/Projects'
import Skills from './components/main/Skills'
import Footer from './components/Footer'



const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background-color: #0C0C0C;
  }
`

export default function Portfolio(){


  return(
    <>
      <GlobalStyle/>
      <Header/>
      <About/>
    </>
  )
}