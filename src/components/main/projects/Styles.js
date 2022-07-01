import styled from 'styled-components';

export const TitleBox = styled.h3`
  margin-top: 180px;
  text-align: center;
  color: #F9F9F9;
  font-weight: 600;
  font-size: 36px;
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
  }
  h3{
    color: #f9f9f9;
    margin-top: 5px;
  }
  button{
    border-style: none;
    background-color: #181818;
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
  }
`
export const Box = styled.div`
  background-color: #181818;
  position: absolute;
  width: 440px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h4{
    color: #F9F9F9;
    font-size: 23px;
  }
  }
`
