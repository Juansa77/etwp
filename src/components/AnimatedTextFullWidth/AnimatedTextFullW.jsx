import { useEffect, useRef } from "react";
import "./AnimatedTextFullW.css";
import useAnimatedElement from "../../Hooks/useAnimatedElement";
import useIsVisible from "../../Hooks/useIsVisible";

const AnimatedTextFullW = ({ direction }) => {
  const animatedTextRef = useRef(null);
  const animatedImage = useRef();
  useAnimatedElement(1, 30, 40, 1, animatedImage, "left", "noRepeat");
  const isVisible = useIsVisible(animatedTextRef);

  //*----UseEffect para aplicar la clase en caso de que sea visible
  useEffect(() => {
    // Aplica la animación cuando el elemento es visible
    if (isVisible) {
      animatedTextRef.current.style.transform = "translateX(0)";
    } else {
      if (direction == "left") {
        animatedTextRef.current.style.transform = "translateX(-100%)";
      }
      if (direction == "right") {
        animatedTextRef.current.style.transform = "translateX(100%)";
      }

      if (direction == "up") {
        animatedTextRef.current.style.transform = "translateY(50%)";
      }
    }
  }, [isVisible]);

  return (
    <div className="animated-text-fullW-container">
      <div
        className={`animated-text-first ${isVisible ? "visible" : ""}`}
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
        <h1>Nací en Sevilla en 1988</h1>
        <p>Esto es texto de relleno para ver como queda</p>
        <img className="sevilla-image" src="3.png" ref={animatedImage} />
      </div>
    </div>
  );
};

export default AnimatedTextFullW;
