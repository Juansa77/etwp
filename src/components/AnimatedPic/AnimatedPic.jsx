import { useEffect, useRef, useState } from "react";
import "./AnimatedPic.css";

const AnimatedPic = ({ direction, pic, form }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedTextRef = useRef(null);

  //*------------ Función para verificar si el elemento es visible-----------------
  const checkVisibility = () => {
    //* Apuntamos al ref del texto que vamos a animar
    const element = animatedTextRef.current;
    if (!element) return;
    //* usamos getBounding, que nos proporciona info del elemento y su posición relativa
    const rect = element.getBoundingClientRect();
    //* Calculamos el area visible, utilizamos el método adicional document por si no es compatible con el navegador
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    //* Comprueba si el elemento (rect) está en el área visible de la pantalla
    const isVisible = rect.top <= windowHeight && rect.bottom >= 0;

    setIsVisible(isVisible);
  };

  //*---UseEffect para añadir el listener al scroll-----
  useEffect(() => {
    const scrollHandler = () => {
      checkVisibility();
    };

    // Agrega un event listener para detectar el scroll, aplicamos la función para comprobar visibilidad al scroll
    window.addEventListener("scroll", scrollHandler);

    //* Comprueba la visibilidad inicial
    checkVisibility();

    //* Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  //*----UseEffect para aplicar la clase en caso de que sea visible
  useEffect(() => {
    // Aplica la animación cuando el elemento es visible
    if (isVisible) {
      animatedTextRef.current.style.transform = "translateX(0)";
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
