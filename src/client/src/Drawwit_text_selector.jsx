import React from 'react';
import {
  Color,
  ColorContainer,
  ColorLabel,
  Container,
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

function DrawwitTextSelector() {
  return (
    <MainContainer
      initial={{x: 100}}
      animate={{x:0}}
      transition={{duration: 0.5}}
    >
      <TitleContainer>Pencil</TitleContainer>
      <Snippet
      >
        <HeaderContainer>
          <SnippetClassHolder>font</SnippetClassHolder>
          <SnippetHeaderline></SnippetHeaderline>
        </HeaderContainer>
        <SelectorContainer>
          <SelectorFont
            whileTap={{scale:1.1}}
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
    </MainContainer>
  );
}

export default DrawwitTextSelector;
