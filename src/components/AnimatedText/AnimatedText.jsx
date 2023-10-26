import { useEffect, useRef } from "react";
import "./AnimatedText.css";
import useIsVisible from "../../Hooks/useIsVisible";


const AnimatedText = ({ direction }) => {
 
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
    <div className="animated-text-container">
      <div
        className={`animated-text ${isVisible ? "visible" : ""}`}
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
        <h1>Prueba de animación de texto</h1>
        <p>Esto es texto de relleno para ver como queda</p>
      </div>
    </div>
  );
};

export default AnimatedText;
