import { useState, useEffect } from 'react'
import {
  DrawwitLogo,
  MainBackgroundContainer
} from '../styled_components/common.jsx';
import {
  Footer,
  Header, Main, MainForm,
  NameFormDiv
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
            <MainForm></MainForm>
          </Main>
          <Footer></Footer>
        </NameFormDiv>
      </MainBackgroundContainer>
    </>
  )
}

export default App
