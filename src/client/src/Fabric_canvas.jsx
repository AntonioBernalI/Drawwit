import { useEffect, useRef } from "react";
import { CanvasDesign } from "../styled_components/canvas.jsx";
import { Canvas , PencilBrush} from "fabric";

function FabricCanvas({ widthOfCanvas, heightOfCanvas }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new Canvas(canvasRef.current, {
      width: widthOfCanvas,
      height: heightOfCanvas,
    });

    canvas.isDrawingMode = true;

    // crea el pincel antes de asignar propiedades
    const brush = new PencilBrush(canvas);
    brush.width = 5;
    brush.color = "blue";
    canvas.freeDrawingBrush = brush;
    
    return () => {
      canvas.dispose();
    };
  }, [widthOfCanvas, heightOfCanvas]);

  return (
    <CanvasDesign
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} id="fabric-canvas" />
    </CanvasDesign>
  );
}

export default FabricCanvas;
