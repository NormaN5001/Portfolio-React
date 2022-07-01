import styled from 'styled-components';

export const FooterSection = styled.section`
  position: absolute;
  left: 0;
  margin-top: 100px;
  width: 100%;
  height: 70px;
  background-color: #212121;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    color: #F9F9F9;
    font-size: 17px;
    font-weight: 600;
  }
  span{
    color: hotpink;
  }
  a{
    text-decoration: none;
    color: hotpink;
  }
`