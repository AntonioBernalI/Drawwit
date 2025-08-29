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
  background-color: #fabfff;
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

export const Question = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 60px;
  text-align: center;
  @media (max-width: 710px) {
    // mobile
  }
  @media (min-width: 710px) and (max-width: 1100px) {
    // desktop
    
  }
`

const InputMainDiv = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 710px) {
    // mobile
  }
  @media (min-width: 710px) and (max-width: 1100px) {
    // desktop
  }
`
const Input = styled.input`
  height: 90%;
  width: 80%;
  background-color: #f573ff;
  border: 4px solid black;
  border-radius: 25px;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  @media (max-width: 710px) {
    // mobile
  }
  @media (min-width: 710px) and (max-width: 1100px) {
    // desktop
    border: 3px solid black;
    border-radius: 15px;
    height: 95%;
    width: 60%;
  }
  
`
export const NameInput = () => {
  return (
    <InputMainDiv>
      <Input></Input>
    </InputMainDiv>
  )
}
