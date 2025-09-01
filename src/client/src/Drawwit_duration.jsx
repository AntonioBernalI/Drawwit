import React, { useEffect, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
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
import { ErrorMsgDiv } from '../styled_components/apiErrorMessages.jsx';
import { DurationWarning } from '../styled_components/durationForm.jsx';

function DurationFormScreen({nameFormSaver, onError, onNext}) {


  return (
    <>
      <NameFormDiv
        key="name-form-root"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: "tween", duration: 0.25 }}
        >
          <DrawwitLogo
            initial={{ scale: 0, rotateX: -180, opacity: 0 }}
            animate={{ scale: 1, rotateX: 0, opacity: 1 }}
            exit={{ scale: 0.8, rotateX: 180, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 14,
              delay: 0.2,
              duration: 0.2,
            }}
          >
            Drawwit
          </DrawwitLogo>
        </Header>
        <Main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{background: "#0f0"}}
        >
          <MainForm
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Question
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                height: "43%",
              }}
            >
              How long is your contest?
            </Question>
            <DurationWarning>Contest duration: 1h–6d.</DurationWarning>
          </MainForm>
        </Main>

        <Footer
          initial={{opacity: 0 }}
          animate={{opacity: 1 }}
          exit={{opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <MainButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 1.1, rotate: 15 }}
            onClick={()=>{}}
          >
            Next
          </MainButton>
        </Footer>
      </NameFormDiv>
    </>
  );
}

export default DurationFormScreen;
