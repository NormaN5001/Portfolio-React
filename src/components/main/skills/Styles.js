import styled from 'styled-components';


export const Container = styled.section`
  @media(max-width: 550px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const SkillsSection = styled.section`
  margin-top: 110px;
  width: 100%;
  @media(max-width: 550px){
    width: 80%;
  }
`
export const TitleBox = styled.h3`
  text-align: center;
  color: #F9F9F9;
  font-weight: 600;
  font-size: 36px;
  @media(max-width: 455px){
    font-size: 27px;
  }
`
export const BackgroundImg = styled.div`
  width: 120px;
  height: 120px;
  background-color: #212121;
  border: solid 1px #333333;

  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 550px){
    margin-top: 30px;
    width: 130px;
    height: 130px;
  }
`
export const SkillsImage = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  img{
    cursor: pointer;
  }
`