import { useState } from 'react'
import NameFormScreen from './Drawwit_contest_theme.jsx';
import { ErrorMsg } from '../styled_components/userErrorMessage.jsx';
import { MainBackgroundContainer } from '../styled_components/common.jsx';
import { AnimatePresence } from 'framer-motion';
import DurationFormScreen from './Drawwit_duration.jsx';



function App() {
  const [err, setErr] = useState(null);
  const [appStage, setAppStage] = useState("name");

  const [aleph, setAleph] = useState("John Doe");
  const [contestTheme, setContestTheme] = useState("-----");
  const [screen, setScreen] = useState("drawwit");

  const [motherHash, setMotherHash] = useState({});


  return (
    <>
      {err && (
        <MainBackgroundContainer>
          <ErrorMsg
            key={"error"}
            message={err}
            onOk={() => { setErr(null) }}
          />
        </MainBackgroundContainer>
      )}
      {!err && (
        <MainBackgroundContainer>
          <AnimatePresence mode={"wait"}>
            {(appStage === "name") && (
              <NameFormScreen
                key={"name"}
                onError={(errorMessage) => setErr(errorMessage)}
                nameFormSaver={(hash) => {
                  setMotherHash((prev) => ({
                    ...prev,
                    aleph: hash.aleph,
                    contestTheme: hash.contestTheme,
                    screen: hash.screen
                  }));
                }}
                onNext={() => { setAppStage("duration"); }}
              />
            )}
            {(appStage === "duration") && (
              <DurationFormScreen key="duration" onError={(errorMessage) => setErr(errorMessage)} />
            )}
          </AnimatePresence>
        </MainBackgroundContainer>
      )}
    </>
  )
}

export default App
