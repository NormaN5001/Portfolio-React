import styled from 'styled-components';

export const Start = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`
export const Infos = styled.div`
`
export const TitleBox = styled.h1`
  color: #f9f9f9;
  font-size: 36px;
`
export const TextBox = styled.p`
  margin-top: 20px;
  color: #828282;
  font-size: 23px;
`
export const GitButton = styled.button`
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
export const WhatsAppButton = styled.button`
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
export const Image = styled.div`
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
export const MyPhoto = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transition: 0.7s;
  transform: rotate(-9deg);
  &:hover{
    cursor: pointer;
  }
`

export const AboutMe = styled.section`
  margin-top: 230px;

  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    color: #F9F9F9;
    font-size: 32px;
    font-weight: 600;
  }
`
export const TextAboutMe = styled.p`
  text-align: center;
  margin-top: 30px;
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  padding: 0 12vw 0 12vw;
`
export const Networks = styled.div`
  margin-top: 70px;
  width: 55vw;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  a{
    text-decoration: none;
  }
`
export const Name = styled.div`
  cursor: pointer;
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media(max-width: 1250px){
    width: 250px;
  }
  h4{
    color: #F9F9F9;
    font-size: 18px;
    font-weight: 600;
  }
  p{
    color: #828282;
    font-size: 15px;
    font-weight: 400;
  }
`
export const Email = styled.div`
  cursor: pointer;
  width: 250px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media(max-width: 916px){
    margin-top: 30px;
  }
  h4{
    color: #F9F9F9;
    font-size: 18px;
    font-weight: 600;
  }
  p{
    color: #828282;
    font-size: 15px;
    font-weight: 400;
  }
`
export const Instagram = styled.div`
  cursor: pointer;
  width: 150px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media(max-width: 1250px){
    margin-top: 30px;
    width: 250px;
  }
  h4{
    color: #F9F9F9;
    font-size: 18px;
    font-weight: 600;
  }
  p{
    color: #828282;
    font-size: 15px;
    font-weight: 400;
  }
`
export const Phone = styled.div`
  cursor: pointer;
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media(max-width: 1250px){
    margin-top: 30px;
    width: 250px;
  }
  h4{
    color: #F9F9F9;
    font-size: 18px;
    font-weight: 600;
  }
  p{
    color: #828282;
    font-size: 15px;
    font-weight: 400;
  }
`