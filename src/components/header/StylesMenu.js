import styled from 'styled-components';

export const Menu = styled.section`
  position: absolute;
  right: 0;
  top: 80px;
  background-color: #171717;
  width: 100%;
  height: 80px;
  @media(max-width: 500px){
    top: 0;
    width: 230px;
    height: 330px;
  }
`
export const Navegation = styled.nav`
  width: 100%;
  height: 100%;
  @media(max-width: 500px){
      
  }
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    @media(max-width: 500px){
      flex-direction: column;
      background-color: #171717;
    }
  }
`
export const Items = styled.li`
  text-align: center;
  background-color: hotpink;
  border-radius: 20px;
  width: 140px;
  height: 35px;
  line-height: 32px;
  position: relative;
  color: #171717;
  font-weight: 600;
  font-size: 20px;
  font-size: 400;
  @media(max-width: 500px){
    background-color: #171717;
    color: #F9F9F9;
  }
  &:after{
    content: "";
    position: absolute;
    background-color: hotpink;
    height: 3px;
    width: 0%;
    left: 0;
    bottom: -5px;
    transition: 0.4s;
  }
  &:hover:after{
    width: 100%;
  }
`