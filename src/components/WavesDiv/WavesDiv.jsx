import { useRef, useEffect } from "react";
import "./WavesDiv.css";
import useIsVisible from "../../Hooks/useIsVisible";

const WavesDiv = () => {
  const sunRef = useRef();
  const isVisible = useIsVisible(sunRef);
  const containerRef = useRef();
  const wavesTextRef= useRef()

  //*----UseEffect para aplicar la clase en caso de que sea visible
  useEffect(() => {
    // Aplica la animación cuando el elemento es visible
    if (isVisible) {
      sunRef.current.style.transition = "2s linear";
      containerRef.current.style.transition = "2s linear";
      containerRef.current.style.backgroundColor = "rgb(159, 228, 228)";
      sunRef.current.style.transform = "translateY(-5%)";
      wavesTextRef.current.style.transform = "translateY(-5%)";
      wavesTextRef.current.style.transition = "2s linear";
    } else {
      wavesTextRef.current.style.transform = "translateY(300%)";
      containerRef.current.style.transition = "1s linear";
      sunRef.current.style.transform = "translateY(300%)";
      sunRef.current.style.transition = "2s linear";
      containerRef.current.style.backgroundColor = "black";
    }
  }, [isVisible]);

  return (
    <div className="waves-container" ref={containerRef}>
    <div className="sunDiv" ref={sunRef}></div>
      <h1 className="wavesText" ref={wavesTextRef}>Me encanta el mar</h1>
      <div className="wave1"></div>
      <div className="wave2"></div>
    </div>
  );
};

export default WavesDiv;
