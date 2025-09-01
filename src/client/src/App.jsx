import { useEffect, useState } from 'react';
import NameFormScreen from './Drawwit_contest_theme.jsx';
import { ErrorMsg } from '../styled_components/userErrorMessage.jsx';
import { MainBackgroundContainer } from '../styled_components/common.jsx';
import { AnimatePresence } from 'framer-motion';
import DurationFormScreen from './Drawwit_duration.jsx';

function App() {
  const [err, setErr] = useState(null);
  const [appStage, setAppStage] = useState("name");

  const [motherHash, setMotherHash] = useState({});

  async function devvitLog(message) {
    try {
      const res = await fetch('/api/log-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`error logging, please contact u/Ibaniez ${res.status}. ${text}`);
      }
    } catch (err) {
      setErr(err);
    }
  }

  useEffect(() => {
    if (motherHash.aleph && motherHash.contestTheme && motherHash.screen) {
      const logUser = async () => {
        try {
          await devvitLog(`---User ${motherHash.aleph} has initiated contest creation---`);
          await devvitLog(`--------${motherHash.aleph} contest theme: ${motherHash.contestTheme}`);
          await devvitLog(`--------${motherHash.aleph} contest screen: ${motherHash.screen}`);
        } catch (err) {
          setErr(`Error logging , please contact u/Ibaniez ${err}`)
        }
      };
      logUser();
    }
  }, [motherHash.aleph, motherHash.contestTheme, motherHash.screen]);

  useEffect(() => {
    if (motherHash.deadlineDays && motherHash.deadlineHours && motherHash.deadlineMinutes && motherHash.kickoffDate) {
      const logUser = async () => {
        try {
          await devvitLog(`--------${motherHash.aleph} contest days deadline: ${motherHash.deadlineDays}`);
          await devvitLog(`--------${motherHash.aleph} contest hours deadline: ${motherHash.deadlineHours}`);
          await devvitLog(`--------${motherHash.aleph} contest minutes deadline: ${motherHash.deadlineMinutes}`);
          await devvitLog(`--------${motherHash.aleph} contest kickoff: ${JSON.stringify(motherHash.kickoffDate)}`);
        } catch (err) {
          setErr(`Error logging , please contact u/Ibaniez ${err}`)
        }
      };
      logUser();
    }
  }, [motherHash.deadlineDays, motherHash.deadlineHours, motherHash.deadlineMinutes, motherHash.kickoffDate]);


  const renderScreen = () => {
    if (appStage === "name") {
      return (
        <NameFormScreen
          onError={(errorMessage) => setErr(errorMessage)}
          nameFormSaver={(hash) => {
            setMotherHash((prev) => ({
              ...prev,
              aleph: hash.aleph,
              contestTheme: hash.contestTheme,
              screen: hash.screen
            }));
          }}
          onNext={() => {
            setAppStage("duration");
          }}
        />
      );
    } else if (appStage === "duration") {
      return (
        <DurationFormScreen
          onError={(errorMessage) => setErr(errorMessage)}
          durationFormSaver={(hash) => {
            setMotherHash((prev) => ({
              ...prev,
              deadlineDays: hash.deadlineDays,
              deadlineHours: hash.deadlineHours,
              deadlineMinutes: hash.deadlineMinutes,
              kickoffDate: hash.kickoffDate
            }))
          }}
          onNext={() => { setAppStage("canvas"); }}
        />
      );
    } else {
      return null;
    }
  };

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
            {renderScreen()}
          </AnimatePresence>
        </MainBackgroundContainer>
      )}
    </>
  )
}

export default App
