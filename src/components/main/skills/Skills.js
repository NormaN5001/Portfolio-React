import React from 'react'
import * as S from './Styles'

import HtmlImg from '../../../img/html5.png'
import CssImg from '../../../img/css3.png'
import PhotoshopImg from '../../../img/photoshop.png'
import ReactImg from '../../../img/react.png'

export default function Skills(){


  return(
    <>
      <S.SkillsSection>
        <S.TitleBox>Minhas skills</S.TitleBox>
        <S.SkillsImage>
        <S.BackgroundImg>
          <img src={HtmlImg} alt="Logo do HTML5"/>
        </S.BackgroundImg>
        <S.BackgroundImg>
          <img src={CssImg} alt="Logo do CSS3"/>
        </S.BackgroundImg>
        <S.BackgroundImg>
          <img src={PhotoshopImg} alt="Logo do Photoshop"/>
        </S.BackgroundImg>
        <S.BackgroundImg>
          <img src={ReactImg} alt="Logo da tecnologia React JS"/>
        .</S.BackgroundImg>
        </S.SkillsImage>
      </S.SkillsSection>
    </>
  )
}