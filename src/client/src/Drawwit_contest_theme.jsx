import React, { useEffect, useState } from 'react';
import {
  DrawwitLogo,
  MainBackgroundContainer
} from '../styled_components/common.jsx';
import {
  Footer,
  Header,
  Main,
  MainButton,
  MainForm,
  NameFormDiv,
  NameInput,
  Question,
} from '../styled_components/nameForm.jsx';
import { ErrorMsgDiv } from '../styled_components/errorMessages.jsx';

function NameFormScreen({nameFormSaver}) {
  // aleph
  // contestType
  // screen
  const [err, setErr] = useState(false);
  const [username, setUsername] = useState("not initialized");
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/current-username');
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json();
        if (data.error) {
          setErr(data.error);
        } else {
          setUsername(data.username);
        }
      } catch (err) {
        setErr(err.message || 'unknown error');
      }
    })();
  }, []);


  return (
    <MainBackgroundContainer>
      <NameFormDiv>
        <Header>
          <DrawwitLogo
            initial={{ scale: 0, rotateX: -180, opacity: 0 }}
            animate={{ scale: 1, rotateX: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 14,
              delay: 0.2,
              duration: 1,
            }}
          >
            Drawwit
          </DrawwitLogo>
        </Header>

        <Main>
          <MainForm
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Question>What is your contest about?</Question>
            <NameInput />
          </MainForm>
        </Main>

        <Footer>
          <MainButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 1.1, rotate: 15 }}
          >
            Next
          </MainButton>
        </Footer>
      </NameFormDiv>
      {err && (
        <ErrorMsgDiv>{"Houston we have a problem:"}:::::{err}</ErrorMsgDiv>
      )}
    </MainBackgroundContainer>
  );
}

export default NameFormScreen;
