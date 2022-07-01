import React from 'react'
import { createGlobalStyle } from "styled-components"
import styled from 'styled-components';
import Header from './components/header/Header'
import About from './components/main/about/About'
import Projects from './components/main/projects/Projects'
import Skills from './components/main/skills/Skills'
import Footer from './components/footer/Footer'



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
const Container = styled.section`
  margin: 0 10vw 0 10vw;
  height: 500px;
  @media(max-width: 1440px){
    margin: 0 5vw 0 5vw;
  }@media(max-width: 1024px){
    margin: 0;
  }
`

export default function Portfolio(){


  return(
    <Container>
      <GlobalStyle/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </Container>
  )
}