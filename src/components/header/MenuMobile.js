import React from 'react'
import * as S from './StylesMenu'

export default function MenuMobile(){


  return(
    <>
    <S.Menu>
      <S.Navegation>
          <ul>
            <S.Items>Sobre mim</S.Items>
            <S.Items>Projetos</S.Items>
            <S.Items>Minhas skills</S.Items>
          </ul>
        </S.Navegation>
    </S.Menu>
    </>
  )
}