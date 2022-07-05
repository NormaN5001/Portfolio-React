import React, { useState } from 'react'
import * as S from './StylesHeader'
import MenuMobile from './MenuMobile'

export default function Header(){

  const [menu, setMenu] = useState(false)

  const DropDown = () =>{
    setMenu(!menu)
  }



  return(
    <>
      <S.HeaderSection>
        <S.TitleBox>Portfólio</S.TitleBox>
        <S.Navegation>
          <ul>
            <S.Items>Sobre mim</S.Items>
            <S.Items>Projetos</S.Items>
            <S.Items>Minhas skills</S.Items>
          </ul>
        </S.Navegation>

        <S.MenuHamburguer onClick={()=>{DropDown()} }>
          <S.LineBox>
            <div></div>
            <div></div>
            <div></div>
          </S.LineBox>
          {menu && <MenuMobile/>}
        </S.MenuHamburguer>
      </S.HeaderSection>
    </>
  )
}