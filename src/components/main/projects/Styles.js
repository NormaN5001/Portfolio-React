import styled from 'styled-components';

export const TitleBox = styled.h3`
  margin-top: 180px;
  text-align: center;
  color: #F9F9F9;
  font-weight: 600;
  font-size: 36px;
  @media(max-width: 455px){
    margin-top: 100px;
    font-size: 27px;
  }
`
export const ProjectsSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const BoxProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  width: 440px;
  height: 280px;
  background-color: #212121;
  border: solid #333333 1px;

  section{
    cursor: pointer;
    background-color: #181818;
    width: 390px;
    height: 150px;
    margin-top: 20px;
    @media(max-width: 455px){
    margin-top: 10px;
    width: 280px;
    height: 120px;
  }
  }
  h3{
    color: #f9f9f9;
    margin-top: 5px;
    @media(max-width: 455px){
      margin: 0;
      font-size: 16px;
    }
  }
  button{
    border-style: none;
    background-color: hotpink;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    transition: 0.4s;
    width: 100%;
    height: 45px;
    color: #212121;
    &:hover{
      background-color: #e84998;
    }
    @media(max-width: 455px){
      height: 35px;
      font-size: 16px;
    }
  }
  @media(max-width: 455px){
    width: 300px;
    height: 210px;
  }
`
export const Box = styled.div`
  background-color: #181818;
  position: absolute;
  width: 438px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h4{
    margin-top: 20px;
    color: #F9F9F9;
    font-size: 23px;
    @media(max-width: 455px){
      font-size: 18px;
    }
  }
  p{
    color: #F9F9F9;
    text-align: center;
    @media(max-width: 455px){
      font-size: 16px;
    }
  }
  div{
    display: flex;
    width: 100%;

    button{
      width: 50%;
      border: 1px solid #181818;
      a{
        text-decoration: none;
        color: #212121;
      }
    }
  }
  @media(max-width: 455px){
    width: 298px;
    height: 210px;
  }
`
