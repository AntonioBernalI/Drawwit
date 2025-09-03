import { useEffect, useRef } from "react";
import { CanvasDesign } from "../styled_components/canvas.jsx";
import { Canvas } from "fabric";

function FabricCanvas({ widthOfCanvas, heightOfCanvas }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new Canvas(canvasRef.current, {
      width: widthOfCanvas,
      height: heightOfCanvas,
    });

    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
    canvas.freeDrawingBrush.color = "blue";

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <CanvasDesign
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* agrega un id por si lo usas como string */}
      <canvas ref={canvasRef} id="fabric-canvas" />
    </CanvasDesign>
  );
}

export default FabricCanvas;
