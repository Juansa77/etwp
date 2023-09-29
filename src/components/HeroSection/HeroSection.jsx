import "./HeroSection.css";
import { useState, useEffect, useRef } from "react";

const HeroSection = () => {

  const [verticalScrollPosition, setVerticalScrollPosition] = useState(0);
  const [scrollTotal, setScrollTotal] = useState(0);
  const animatedText = useRef()
  const animatedSubText = useRef()
  const [isVisible, setIsVisible] = useState(false);
  const [isTextAnimationComplete, setIsTextAnimationComplete] = useState(false);
  

  //*------------ Función para verificar si el elemento es visible-----------------
  const checkVisibility = () => {
    //* Apuntamos al ref del texto que vamos a animar
    const element = animatedText.current;
    if (!element) return;
    //* usamos getBounding, que nos proporciona info del elemento y su posición relativa
    const rect = element.getBoundingClientRect();
    //* Calculamos el area visible, utilizamos el método adicional document por si no es compatible con el navegador
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    //* Comprueba si el elemento (rect) está en el área visible de la pantalla
    const isVisible = rect.top <= windowHeight && rect.bottom >= 0;

    setIsVisible(isVisible);
     // Cuando el elemento se hace visible, marca que la animación de texto ha terminado
     if (isVisible) {
      setIsTextAnimationComplete(true);
    }
    
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
  if (isVisible && isTextAnimationComplete) {
    animatedText.current.style.transform = "translateX(0)";
    animatedText.current.style.opacity = "80%";
   

  if(isTextAnimationComplete){ animatedSubText.current.style.opacity = "100%";
  animatedSubText.current.style.transition = "opacity 4.5s ease";
}}
}, [isVisible, isTextAnimationComplete]);





 //* ---LÓGICA PARA CALCULAR EL DESPLAZAMIENTO VERTICAL----
 useEffect(() => {
  const handleScroll = () => {
    const currentVerticalScroll = window.scrollY;
    setVerticalScrollPosition(currentVerticalScroll);
    setScrollTotal(
      (prevScrollTotal) => prevScrollTotal + currentVerticalScroll
    );
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

/*

 //* Calcula la cantidad de desplazamiento horizontal basada en el desplazamiento vertical
 const horizontalScroll = verticalScrollPosition * 0.5; // Puedes ajustar este valor según la velocidad deseada

 //* Aplica la transformación CSS al div frontalHero:Aplica este style al elemento que quieras desplazar hotizontalmente
 const frontalHeroStyle = {
   transform: `translateX(${horizontalScroll}px)`,
 };*/


  return (
    <div className="heroContainer" >
      <div className="frontalHero" >
        <img className="frontalImage" src={"frontalHero.png"} />
        <h1  className={`animated-hero-text ${isVisible ? "visible" : ""}`}
        style={{
          transform: "translateY(-100%)",
     
         
        }} ref={animatedText}>ELENA TEJEDOR</h1>
        <h1 className="hero-subtext"  ref={animatedSubText}>Escritora</h1>
      </div>
    </div>
  );
};

export default HeroSection;
