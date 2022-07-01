import React from 'react'
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
          <a href="https://github.com/NormaN5001" target="_BLANK" rel="noreferrer"><S.GitButton>Github</S.GitButton></a>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5532984770122&text=Olá." target="_BLANK" rel="noreferrer"><S.WhatsAppButton>WhatsApp</S.WhatsAppButton></a>
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
            <img src={SmileImg} alt="Carinha Feliz"/>
            <h4>Meu Nome</h4>
            <p>Nicolas Goulart</p>
          </S.Name>
          <S.Email>
            <img src={EmailImg} alt="Imagem do Email"/>
            <h4>Email</h4>
            <p>nicolasgoulart5001@gmail.com</p>
          </S.Email>
          <a href="https://www.instagram.com/nicolas__g0ulart/"><S.Instagram>
            <img src={InstagramImg} alt="Logo instagram"/>
            <h4>Instagram</h4>
            <p>@nicolas__g0ulart</p>
          </S.Instagram></a>
          <S.Phone>
            <img src={PhoneImg} alt="Icone de um telefone"/>
            <h4>Telefone</h4>
            <p>(32)98477-0122</p>
          </S.Phone>
        </S.Networks>
      </S.AboutMe>

    </>
  )
}