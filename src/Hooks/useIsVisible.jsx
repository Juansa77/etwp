import { useEffect, useState, useRef } from "react";

const useIsVisible = (elementRef) => {
  const [isVisible, setIsVisible] = useState(false);


  //*------------ Función para verificar si el elemento es visible-----------------
  const checkVisibility = () => {
    if (!elementRef.current) return;
    //* Apuntamos al ref del texto que vamos a animar
    const element = elementRef.current;
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
  return  isVisible;
};

export default useIsVisible;
