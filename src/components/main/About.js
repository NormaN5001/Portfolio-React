import React from 'react'
import styled from 'styled-components';

import MyPhotoImg from '../../img/photo.png'
import PhoneImg from '../../img/phone.png'
import InstagramImg from '../../img/instagram.png'
import EmailImg from '../../img/email.png'
import SmileImg from '../../img/smile.png'



export default function About(){

const Start = styled.section`
  display: flex;
  justify-content: space-between;

  margin: 100px 10vw 0 10vw;
  @media(max-width: 1440px){
    margin: 100px 5vw 0 5vw;
  }@media(max-width: 1024px){
    margin: 100px 0 0 0;
  }
`
const Infos = styled.div`
`
const TitleBox = styled.h1`
  color: #f9f9f9;
  font-size: 36px;
`
const TextBox = styled.p`
  margin-top: 20px;
  color: #828282;
  font-size: 23px;
`
const GitButton = styled.button`
  margin-top: 20px;
  border-style: none;
  height: 40px;
  width: 140px;
  background-color: hotpink;
  color: #171717;
  font-size: 17px;
  font-weight: 600;
  transition: 0.4s;
  &:hover{
    cursor: pointer;
    background-color: #e84998;
  }
`
const WhatsAppButton = styled.button`
  margin-left: 20px;
  border-style: none;
  height: 40px;
  width: 140px;
  background-color: #171717;
  border: solid 1px #333333;
  color: #F9F9F9;
  font-size: 17px;
  font-weight: 600;
  transition: 0.4s;
  &:hover{
    cursor: pointer;
    background-color: #1c1c1c;
  }
`
const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  border-radius: 50%;
  background-color: #0C0C0C;
  width: 260px;
  height: 260px;
  &:hover{
    background-color: hotpink;
    transform: rotate(-4deg);
  }
`
const MyPhoto = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transition: 0.7s;
  transform: rotate(-9deg);
  &:hover{
    cursor: pointer;
  }
`

const AboutMe = styled.section`
  border: solid yellow 3px;
  margin: 230px 10vw 0 10vw;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 1440px){
    margin: 230px 5vw 0 5vw;
  }@media(max-width: 1024px){
    margin: 230px 0 0 0;
  }

  h2{
    color: #F9F9F9;
    font-size: 32px;
    font-weight: 600;
  }
`
const TextAboutMe = styled.p`
  text-align: center;
  margin-top: 30px;
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  padding: 0 12vw 0 12vw;
`
const Networks = styled.div`
  border: solid 2px peru;
  display: flex;
`
const Name = styled.div`
  
`
const Email = styled.div`
  
`
const Instagram = styled.div`
  
`
const Phone = styled.div`
  
`


  return(
    <>
      <Start>
        <Infos>
          <TitleBox>Olá, eu sou<br/>Nicolas Goulart (:</TitleBox>
          <TextBox>Desenvolvedor Front-End Júnior</TextBox>
          <GitButton>Github</GitButton>
          <WhatsAppButton>WhatsApp</WhatsAppButton>
        </Infos>
        <Image>
          <MyPhoto src={MyPhotoImg} alt="Uma foto do dono do portfólio."/>
        </Image>
      </Start>
      <AboutMe>
        <h2>Sobre mim</h2>
        <TextAboutMe>Olá, eu me chamo Nicolas Goulart, tenho 18 anos e sou de uma pequena cidade do estado de Minas Gerais. Atualmente estou cursando o 3° ano Ensino Médio e estudando sobre React JS. Sou desenvolvedor web Júnior, com experiência em HTML5, CSS3 e Photoshop.</TextAboutMe>
        <Networks>
          <Name>
            <img src={SmileImg} alt=""/>
            <h4>Meu Nome</h4>
            <p>Nicolas Goulart</p>
          </Name>
          <Email>
            <img src={EmailImg} alt=""/>
            <h4>Email</h4>
            <p>nicolasgoulart5001@gmail.com</p>
          </Email>
          <Instagram>
            <img src={InstagramImg} alt=""/>
            <h4>Instagram</h4>
            <p>@nicolas__g0ulart</p>
          </Instagram>
          <Phone>
            <img src={PhoneImg} alt=""/>
            <h4>Telefone</h4>
            <p>(32)98477-0122</p>
          </Phone>
        </Networks>
      </AboutMe>

    </>
  )
}