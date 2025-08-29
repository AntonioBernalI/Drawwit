import { useState, useEffect } from 'react'
import {
  DrawwitLogo,
  MainBackgroundContainer
} from '../styled_components/common.jsx';
import {
  Footer,
  Header, Main, MainForm,
  NameFormDiv, NameInput, Question
} from '../styled_components/nameForm.jsx';

function App() {
  return (
    <>
      <MainBackgroundContainer>
        <NameFormDiv>
          <Header>
            <DrawwitLogo>Drawwit</DrawwitLogo>
          </Header>
          <Main>
            <MainForm>
              <Question>What is your contest about?</Question>
              <NameInput></NameInput>
            </MainForm>
          </Main>
          <Footer></Footer>
        </NameFormDiv>
      </MainBackgroundContainer>
    </>
  )
}

export default App
