import { useState, useEffect } from "react";



const useAnimationBounce = (initialValue=50, time=2000, finalValue=52, increment=1) => {
    const [number, setNumber] = useState(initialValue);
    const [increasing, setIncreasing] = useState(true);

    //* FUNCIÓN PARA ACRECENTAR Y DECRECENTAR UN VALOR CON INTERVAL
    //*Creamos un estado que se setaa cuando se alcance ciertos valores
  useEffect(() => {
    const interval = setInterval(() => {
      if (increasing) {
        setNumber((prevNumber) => prevNumber + increment);
        //*SI llega a 20, seteamos a false
        if (number === finalValue) {
          setIncreasing(false);
        }
      } else {
        setNumber((prevNumber) => prevNumber - increment);
        if (number === initialValue) {
          setIncreasing(true);
        }
      }
    }, time); // Intervalo de 1 segundo (1000 ms)

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [number, increasing, initialValue, finalValue]);

    
return number

}

export default useAnimationBounce