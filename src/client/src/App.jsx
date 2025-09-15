import React, { useEffect, useState } from 'react';
import Drawwit from './Drawwit.jsx';
import GamemodeSelector from './Gamemode_selector.jsx';
import { AnimatePresence } from 'framer-motion';

function App() {

  const [currentScreen, setCurrentScreen] = useState("selector");

  if(currentScreen === "selector") {
    return (
      <GamemodeSelector onDrawwit={()=>{setCurrentScreen("drawwit")}}/>
    )
  }else if(currentScreen === "drawwit") {
    return (
      <AnimatePresence mode={"wait"}>
        <Drawwit />
      </AnimatePresence>
    )
  }
}

export default App;
