import React, { useEffect, useState } from 'react';
import { MainBackgroundContainer } from '../styled_components/common.jsx';
import background from '/background.png';
import {
  CanvasMainContainer,
  Toolbar,
  ToolbarContainer,
  ToolContainer,
  ToolsMainContainer,
  Tool,
  ButtonContainer, AccesibilityButton, CreateContestButton,
} from '../styled_components/canvas.jsx';
import Pencil from '/Pencil.png';
import Eraser from '/Eraser.png';
import Shapes from '/Shapes.png';
import Text from '/Text.png';

function DrawwitDesktopCanvas() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function fitRectangle(W, H, Wc, Hc) {
    const scale = Math.min(Wc / W, Hc / H);
    let newWidth = Math.round(W * scale);
    let newHeight = Math.round(H * scale);

    if (newWidth < newHeight) {
      const altScale = Hc / H;
      newWidth = Math.round(W * altScale);
      newHeight = Math.round(H * altScale);
    }

    return {
      width: newWidth,
      height: newHeight,
      scale
    };
  }

  return (
    <div
      className="CanvasContainer"
      style={{
        width: fitRectangle(840, 460, width, height).width,
        height: fitRectangle(840, 460, width, height).height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CanvasMainContainer></CanvasMainContainer>
      <ToolsMainContainer>
        <ToolbarContainer>
          <Toolbar>
            <ToolContainer>
              <Tool
                onClick={() => setSelectedButton("pencil")}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  border: selectedButton === "pencil" ? "4px solid white" : "4px solid black",
                }}
              >
                <img src={Pencil} height={"92%"} width={"75%"} />
              </Tool>
            </ToolContainer>

            <ToolContainer>
              <Tool
                onClick={() => setSelectedButton("eraser")}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  border: selectedButton === "eraser" ? "4px solid white" : "4px solid black",
                }}
              >
                <img src={Eraser} height={"75%"} width={"65%"} />
              </Tool>
            </ToolContainer>

            <ToolContainer>
              <Tool
                onClick={() => setSelectedButton("shapes")}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  border: selectedButton === "shapes" ? "4px solid white" : "4px solid black",
                }}
              >
                <img src={Shapes} height={"70%"} width={"60%"} />
              </Tool>
            </ToolContainer>

            <ToolContainer>
              <Tool
                onClick={() => setSelectedButton("text")}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  border: selectedButton === "text" ? "4px solid white" : "4px solid black",
                }}
              >
                <img src={Text} height={"90%"} width={"70%"} />
              </Tool>
            </ToolContainer>

          </Toolbar>
        </ToolbarContainer>
        <ButtonContainer>
          {/*<AccesibilityButton>Im Left handed!</AccesibilityButton>*/}
          <CreateContestButton
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.5}}
            whileTap={{scale: 0.9}}
          >Create Contest</CreateContestButton>
        </ButtonContainer>
      </ToolsMainContainer>
    </div>
  );
}

export default DrawwitDesktopCanvas;
