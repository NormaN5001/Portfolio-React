import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

import styled from 'styled-components';
import MenuMobile from './MenuMobile'

const HeaderSection = styled.section`
  height: 80px;
  margin: 0 10vw 0 10vw;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 1440px){
    margin: 0 5vw 0 5vw;
  }@media(max-width: 1024px){
    margin: 0;
  }@media(max-width: 768px){
    margin: 0 0 0 45%;
  }
  @media(max-width: 500px){
    margin: 0;
    justify-content: center;
  }
`
const TitleBox = styled.h3`
  z-index: -1;
  color: #F9F9F9;
  font-weight: 600;
  font-size: 28px;
`
const Navegation = styled.nav`
  ul{
    display: flex;
    list-style: none;
  }
  @media(max-width: 768px){
    display: none;
  }
`
const Items = styled.li`
  position: relative;
  color: #F9F9F9;
  font-size: 20px;
  font-size: 400;
  margin-left: 35px;
  cursor: pointer;
  &:after{
    content: "";
    position: absolute;
    background-color: hotpink;
    height: 3px;
    width: 0%;
    left: 0;
    bottom: -5px;
    transition: 0.4s;
  }
  &:hover:after{
    width: 100%;
  }
`
const MenuHamburguer = styled.div`
  width: 35px;
  display: none;


  div{
    background-color: #F9F9F9;
    height: 2px;
    width: 30px;
    margin-top: 6px;
  }
  @media(max-width: 768px){
    display: block;

  }
`
const LineBox = styled.section`
  position: absolute;
  right: 30px;
  top: 26px;
`
export default function Header(){

  const [menu, setMenu] = useState(false)

  const DropDown = () =>{
    setMenu(!menu)
  }



  return(
    <>
      <HeaderSection>
        <TitleBox>Portfólio</TitleBox>
        <Navegation>
          <ul>
            <Items>Sobre mim</Items>
            <Items>Projetos</Items>
            <Items>Minhas skills</Items>
          </ul>
        </Navegation>

        <CSSTransition
              timeout={5000}>
        <MenuHamburguer onClick={()=>{DropDown()} }>
          <LineBox>
            <div></div>
            <div></div>
            <div></div>
          </LineBox>
          {menu && <MenuMobile/>}
        </MenuHamburguer>
        </CSSTransition>
      </HeaderSection>
    </>
  )
}