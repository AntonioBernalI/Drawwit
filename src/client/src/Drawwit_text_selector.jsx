import React from 'react';
import { MainContainer, Snippet, TitleContainer } from '../styled_components/selectors.jsx';

function DrawwitTextSelector() {
  return (
    <MainContainer
      initial={{x: 100}}
      animate={{x:0}}
      transition={{duration: 0.5}}
    >
      <TitleContainer></TitleContainer>
      <Snippet></Snippet>
      <Snippet></Snippet>
      <Snippet></Snippet>
    </MainContainer>
  );
}

export default DrawwitTextSelector;
