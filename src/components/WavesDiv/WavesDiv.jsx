import { useState, useRef, useEffect } from "react";
import "./WavesDiv.css";
import useIsVisible from "../../Hooks/useIsVisible";



const WavesDiv = () => {
    const sunRef = useRef()
    const isVisible = useIsVisible(sunRef)


        
        console.log(isVisible)

  return (
    <div className="waves-container">
    <div className="sunDiv" ref={sunRef}></div>
      <div className="wave1"></div>
      <div className="wave2"></div>
    </div>
  );
};

export default WavesDiv;
