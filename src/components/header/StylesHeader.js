import styled from 'styled-components';

export const HeaderSection = styled.section`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TitleBox = styled.h3`
  z-index: -1;
  color: #F9F9F9;
  font-weight: 600;
  font-size: 28px;
`
export const Navegation = styled.nav`
  ul{
    display: flex;
    list-style: none;
  }
  @media(max-width: 768px){
    display: none;
  }
`
export const Items = styled.li`
  position: relative;
  color: #F9F9F9;
  font-size: 20px;
  font-size: 400;
  margin-left: 35px;
  cursor: pointer;
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
export const MenuHamburguer = styled.div`
  width: 35px;
  display: none;


  div{
    background-color: #F9F9F9;
    height: 2px;
    width: 30px;
    margin-top: 6px;
  }
  @media(max-width: 768px){
    display: block;

  }
`
export const LineBox = styled.section`
  position: absolute;
  right: 30px;
  top: 26px;
  z-index: 1;
`