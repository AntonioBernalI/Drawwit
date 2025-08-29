import styled from 'styled-components';

export const NameFormDiv = styled.div`
  width: 70%;
  height: 75%;
  @media (max-width: 710px) {
    width: 100%;
  }
`
export const Header = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Main = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Footer = styled.div`
  width: 100%;
  height: 25%;
  background-color: #00f;
`

export const MainForm = styled.div`
  width: 80%;
  height: 95%;
  border: 4px solid black;
  background-color: #f573ff;
  border-radius: 25px;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 710px) {
    // mobile
  }
  @media (min-width: 710px) and (max-width: 1100px) {
    // desktop
    border: 3px solid black;
    border-radius: 15px;
  }
`
