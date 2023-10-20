import { useEffect, useState } from "react";


const useVerticalScrollPosition = () => {
  const [verticalScrollPosition, setVerticalScrollPosition] = useState(0);

  useEffect(() => {
    //* Seteamos el cuurentScroll al valor actual de scroll de la pantalla
    const handleScroll = () => {
      const currentVerticalScroll = window.scrollY;
      setVerticalScrollPosition(currentVerticalScroll);
    };
//* Añadimos un listener a la pantalla
    window.addEventListener("scroll", handleScroll);
//* Desmontamos el evento
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
//* Retornamos el valor de la posición vertical
  return verticalScrollPosition;
};

export default useVerticalScrollPosition;