import { useEffect, useRef } from "react";
import { CanvasDesign } from "../styled_components/canvas.jsx";
import { Canvas, PencilBrush } from "fabric";

function FabricCanvas({ widthOfCanvas, heightOfCanvas, getCanvas, onGetCanvas }) {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null); // referencia para el canvas de fabric

  useEffect(() => {
    if (fabricCanvasRef.current && onGetCanvas) {
      const base64 = fabricCanvasRef.current.toDataURL({
        format: "png",
        quality: 1,
      });
      onGetCanvas(base64);
    }
  }, [getCanvas, onGetCanvas]); // se ejecuta cuando cambie getCanvas

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new Canvas(canvasRef.current, {
      width: widthOfCanvas,
      height: heightOfCanvas,
    });

    fabricCanvasRef.current = canvas; // guardar referencia

    canvas.isDrawingMode = true;

    // crea el pincel antes de asignar propiedades
    const brush = new PencilBrush(canvas);
    brush.width = 5;
    brush.color = "blue";
    canvas.freeDrawingBrush = brush;

    return () => {
      canvas.dispose();
      fabricCanvasRef.current = null;
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
