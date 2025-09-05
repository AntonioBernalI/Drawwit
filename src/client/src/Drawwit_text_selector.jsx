import React, {useState} from 'react';
import {
  Backdrop, CloseIcon,
  Color,
  ColorContainer,
  ColorLabel,
  Container, FontOptions,
  HeaderContainer,
  MainContainer,
  SelectorContainer,
  SelectorFont,
  SmallSelector,
  Snippet,
  SnippetClassHolder,
  SnippetHeaderline,
  StyleContainer,
  StyleLabel,
  TitleContainer,
} from '../styled_components/selectors.jsx';
import { AnimatePresence } from 'framer-motion';

function DrawwitTextSelector() {
  const [currentScreen, setCurrentScreen] = useState("none");

  return (
    <MainContainer
      initial={{x: 100, opacity: 0}}
      animate={{x:0, opacity: 1}}
      transition={{duration: 0.5}}
    >
      <CloseIcon>X</CloseIcon>
      <TitleContainer>Text</TitleContainer>
      <Snippet
      >
        <HeaderContainer>
          <SnippetClassHolder>font</SnippetClassHolder>
          <SnippetHeaderline></SnippetHeaderline>
        </HeaderContainer>
        <SelectorContainer>
          <SelectorFont
            whileTap={{scale:1.1}}
            onClick={()=>{
              setCurrentScreen("font");
            }}
          >Comic Sans Ms</SelectorFont>
        </SelectorContainer>
      </Snippet>
      <Snippet>
        <HeaderContainer>
          <SnippetClassHolder>style</SnippetClassHolder>
          <SnippetHeaderline></SnippetHeaderline>
        </HeaderContainer>
        <SelectorContainer
        >
          <StyleContainer>
            <Container>
              <StyleLabel>Style</StyleLabel>
              <SmallSelector
                whileTap={{scale:1.1}}
              >32</SmallSelector>
            </Container>
          </StyleContainer>
          <StyleContainer>
            <Container>
              <StyleLabel>Size</StyleLabel>
              <SmallSelector
                whileTap={{scale:1.1}}
              >32</SmallSelector>
            </Container>
          </StyleContainer>
        </SelectorContainer>
      </Snippet>
      <Snippet>
        <HeaderContainer>
          <SnippetClassHolder>Color</SnippetClassHolder>
          <SnippetHeaderline></SnippetHeaderline>
        </HeaderContainer>
        <SelectorContainer>
          <StyleContainer>
            <Container
              style={{
                width: '90%',
              }}
            >
              <StyleLabel>Style</StyleLabel>
              <SmallSelector
                whileTap={{scale:1.1}}
              >
                <ColorContainer>
                  <Color/>
                </ColorContainer>
                <ColorLabel>
                  #003fff
                </ColorLabel>
              </SmallSelector>
            </Container>
          </StyleContainer>
          <StyleContainer>
            <Container
              style={{
                width: '90%',
              }}
            >
              <StyleLabel>Size</StyleLabel>
              <SmallSelector
                whileTap={{scale:1.1}}
              >
                <ColorContainer>
                  <Color/>
                </ColorContainer>
                <ColorLabel
                >
                  #003fff
                </ColorLabel>
              </SmallSelector>
            </Container>
          </StyleContainer>
        </SelectorContainer>
      </Snippet>
      {
        currentScreen === "font" && (
          <AnimatePresence>
            <Backdrop
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 0.2}}
              key={"backdrop"}
            >
              <FontOptions
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{duration: 0.2}}
                key={"keyOptions"}
              />
            </Backdrop>
          </AnimatePresence>
        )
      }
    </MainContainer>
  );
}

export default DrawwitTextSelector;
