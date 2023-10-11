
import useAnimation from "../../Hooks/useAnimation";
import "./HeroSection.css";
import { useState, useEffect, useRef } from "react";



const HeroSection = () => {
  const [verticalScrollPosition, setVerticalScrollPosition] = useState(0);
  const [scrollTotal, setScrollTotal] = useState(0);
  const animatedText = useRef();
  const frontalImage = useRef();
  const animatedSubText = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isTextAnimationComplete, setIsTextAnimationComplete] = useState(false);
  const [currentOpacity, setCurrentOpacity] = useState(100);
  const [timesIncreased, setTimesIncreased] = useState(0);



  const [number, setNumber] = useState(10);
  const [increasing, setIncreasing] = useState(true);
//* FUNCIÓN PARA ACRECENTAR Y DECRECENTAR
  useEffect(() => {
    const interval = setInterval(() => {
      if (increasing) {
        setNumber((prevNumber) => prevNumber + 1);
        //*SI llega a 20, seteamos a false
        if (number === 20) {
          setIncreasing(false);
        }
      } else {
        setNumber((prevNumber) => prevNumber - 1);
        if (number === 10) {
          setIncreasing(true);
        }
      }
    }, 1000); // Intervalo de 1 segundo (1000 ms)

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [number, increasing]);


 

  //*Funcionalidad para animación de imagen frontal-----------------
  const frontalAnimation = useAnimation(50, 49, 50);
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      // Incrementar o disminuir el valor de frontalAnimation según la dirección
      setFrontalAnimation((prevValue) => prevValue + animationDirection);

      // Cambiar la dirección cuando alcanza 50 o 60
      if(frontalAnimation === 49 || frontalAnimation === 51)  {
        setAnimationDirection((prevDirection) => -prevDirection );
      }
    }, 2000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(interval);
    };
  }, [frontalAnimation]);*/


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

  //* ---LÓGICA PARA CALCULAR EL DESPLAZAMIENTO VERTICAL----
  useEffect(() => {
    const handleScroll = () => {
      const currentVerticalScroll = window.scrollY;
      setVerticalScrollPosition(currentVerticalScroll);
      setScrollTotal(currentVerticalScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTotal]);


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
    if ( isTextAnimationComplete) {
   
      animatedText.current.style.transform = "translateX(10%)";
      animatedText.current.style.top = "10%";

      if (isTextAnimationComplete) {
        animatedSubText.current.style.opacity = "100%";
        animatedSubText.current.style.transition = "opacity 2.5s ease";
        animatedText.current.style.position = "fixed";
        animatedSubText.current.style.position = "fixed";
        frontalImage.current.style.left = `${frontalAnimation}%`;
        //* Cambio de opacidad en texto

        //* Verificar cuando el scroll aumenta en 1000 px
        if (scrollTotal >= 300) {
          //* Dividimos scroll total entre mil para ver cuantas veces lo supera en 1000
          setTimesIncreased(Math.floor(scrollTotal / 200));
      

          //* Reducimos la opacidad en 10 por cada vez que se supera 1000
          setCurrentOpacity((prevOpacity) => prevOpacity - timesIncreased);
          
        }

        if (scrollTotal < 100) {
          setCurrentOpacity(100);
        }

        //* Nos aseguramos que el rango de opacidad este en numero entero
        setCurrentOpacity((prevOpacity) =>
          Math.max(0, Math.min(100, prevOpacity))
        );
      }
      animatedText.current.style.opacity = `${currentOpacity}%`;
      animatedSubText.current.style.opacity = `${currentOpacity}%`;
      animatedText.current.style.transition = "opacity 2.5s ease";
    }
  }, [isVisible, isTextAnimationComplete, scrollTotal, currentOpacity,frontalAnimation]);
 

  /*

 //* Calcula la cantidad de desplazamiento horizontal basada en el desplazamiento vertical
 const horizontalScroll = verticalScrollPosition * 0.5; // Puedes ajustar este valor según la velocidad deseada

 //* Aplica la transformación CSS al div frontalHero:Aplica este style al elemento que quieras desplazar hotizontalmente
 const frontalHeroStyle = {
   transform: `translateX(${horizontalScroll}px)`,
 };*/

  return (
    <div className="heroContainer">
      <div className="frontalHero">
        <img
          className="frontalImage"
          ref={frontalImage}
          src={"frontalHero.png"}
        />
        <h1
          className={`animated-hero-text ${isVisible ? "visible" : ""}`}
          ref={animatedText}
        >
          ELENA TEJEDOR
        </h1>
        <h1 className="hero-subtext" ref={animatedSubText}>
          Escritora
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
