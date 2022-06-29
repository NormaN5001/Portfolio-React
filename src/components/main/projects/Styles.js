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
  border: solid green 2px;
`
export const BoxProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 440px;
  height: 265px;
  background-color: #212121;
  border: solid #333333 1px;

  img{
    cursor: pointer;
    transition: 0.7s;
    width: 400px;
    height: 210px;
    &:hover{
      width: 438px;
      height: 230px; 
    }
  }
  h3{
    color: #f9f9f9;
    margin-top: 5px;
  }
`
export const Box = styled.div`
  transition: 0.7s;
  position: absolute;
  background-color: #202020;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3{
    position: absolute;
    top: 10px;
  }
  p{
    color: #828282;
    font-size: 15px;
  }
  button{
    border-style: none;
    background-color: hotpink;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    transition: 0.4s;

    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    &:hover{
      background-color: #e84998;
    }
  }
`
