import { useEffect, useRef, useState } from "react";
import "./AnimatedPic.css";
import useIsVisible from "../../Hooks/useIsVisible";


const AnimatedPic = ({ direction, pic, form }) => {

  const animatedTextRef = useRef(null);
  const isVisible= useIsVisible(animatedTextRef)

 

  //*----UseEffect para aplicar la clase en caso de que sea visible
  useEffect(() => {
    // Aplica la animación cuando el elemento es visible
    if (isVisible) {
      animatedTextRef.current.style.transform = "translateX(0)";
    }else{
      if(direction=="left"){
        animatedTextRef.current.style.transform = "translateX(-100%)";
      }
      if(direction=="right"){
        animatedTextRef.current.style.transform = "translateX(100%)";
      }
      
      if(direction=="up"){
        animatedTextRef.current.style.transform = "translateY(50%)";
      }
      
    }
  }, [isVisible]);

  return (
    <div className="animated-pic-container">
      <div
        className={`animated-pic ${isVisible ? "visible" : ""}`}
        style={{
          transform:
            direction === "left"
              ? "translateX(-100%)"
              : direction === "right"
              ? "translateX(100%)"
              : direction === "up"
              ? "translateY(50%)"
              : "",
        }}
        ref={animatedTextRef}
      >
        <img
          className="picAnimated"
          src={pic}
          style={{ borderRadius: form === "circle" ? "100%" : "0%" }}
        />
      </div>
    </div>
  );
};

export default AnimatedPic;
