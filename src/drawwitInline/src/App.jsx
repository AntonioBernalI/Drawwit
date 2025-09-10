import { useState } from 'react'
import BG from '/background.png'
import { Background, DrawingContainer, NameContainer } from './components.jsx';

function App() {

  return (
    <>
      <Background style={{backgroundImage: 'url(' + BG + ')'}}>
        <NameContainer></NameContainer>
        <DrawingContainer></DrawingContainer>
      </Background>
    </>
  )
}

export default App
