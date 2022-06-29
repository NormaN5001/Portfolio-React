import React from 'react'
import styled from 'styled-components';
import * as S from './Styles'
import MyPhotoImg from '../../../img/photo.png'
import PhoneImg from '../../../img/phone.png'
import InstagramImg from '../../../img/instagram.png'
import EmailImg from '../../../img/email.png'
import SmileImg from '../../../img/smile.png'



export default function About(){

  return(
    <>
      <S.Start>
        <S.Infos>
          <S.TitleBox>Olá, eu sou<br/>Nicolas Goulart (:</S.TitleBox>
          <S.TextBox>Desenvolvedor Front-End Júnior</S.TextBox>
          <S.GitButton>Github</S.GitButton>
          <S.WhatsAppButton>WhatsApp</S.WhatsAppButton>
        </S.Infos>
        <S.Image>
          <S.MyPhoto src={MyPhotoImg} alt="Uma foto do dono do portfólio."/>
        </S.Image>
      </S.Start>
      <S.AboutMe>
        <h2>Sobre mim</h2>
        <S.TextAboutMe>Olá, eu me chamo Nicolas Goulart, tenho 18 anos e sou de uma pequena cidade do estado de Minas Gerais. Atualmente estou cursando o 3° ano Ensino Médio e estudando sobre React JS. Sou desenvolvedor web Júnior, com experiência em HTML5, CSS3 e Photoshop.</S.TextAboutMe>
        <S.Networks>
          <S.Name>
            <img src={SmileImg} alt=""/>
            <h4>Meu Nome</h4>
            <p>Nicolas Goulart</p>
          </S.Name>
          <S.Email>
            <img src={EmailImg} alt=""/>
            <h4>Email</h4>
            <p>nicolasgoulart5001@gmail.com</p>
          </S.Email>
          <S.Instagram>
            <img src={InstagramImg} alt=""/>
            <h4>Instagram</h4>
            <p>@nicolas__g0ulart</p>
          </S.Instagram>
          <S.Phone>
            <img src={PhoneImg} alt=""/>
            <h4>Telefone</h4>
            <p>(32)98477-0122</p>
          </S.Phone>
        </S.Networks>
      </S.AboutMe>

    </>
  )
}