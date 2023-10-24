import { useState, useEffect } from "react";
/* Si queremos animar de derecha a izquierda,  el initial value
deber ser mayor, el valor final debe ser menor



Si queremos animar de izquuierda a derecha
El elemento teien que salir en 0 el leff desde el CSS 
//*EJEMPLO : useAnimatedElement(90, 10, 0, 1, circle2, "right");
//* EJEMPLO:   useAnimatedElement(0, 10, 100, 1, circle2, "left");
//* EJEMPLO : useAnimatedElement(0, 10, 100, 1, circle3, "down");
 //* EJEMPLO : useAnimatedElement(90, 10, 0, 1, circle4, "up", "repeat");
*/

const useAnimatedElement = (
  initialValue = 0, //DESDE DONDE ESTÁ POSICIONADO CON LA PROPIEDAD LEFT
  time = 10, // TIEMPO QUE SE VA A EJECTUAR
  finalValue = 120, // Hasta donde se va a mover
  increment = 1,
  element, // elemento REF
  direction, // LEFT, RIGHT, DOWN OR UP
  repeat = "noRepeat" // valores: repeat, no reRepeat
) => {
  const [number, setNumber] = useState(initialValue);
  const increasing = true;

  //* FUNCIÓN PARA ACRECENTAR Y DECRECENTAR UN VALOR CON INTERVAL
  //*Creamos un estado que se setaa cuando se alcance ciertos valores
  useEffect(() => {
    const interval = setInterval(() => {
      if (direction == "left" || direction == "down") {
        setNumber((prevNumber) => prevNumber + increment);
        //*SI llega a 20, seteamos a false
        if (number === finalValue) {
          if (repeat == "repeat") {
            setNumber(initialValue);
          } else {
            setNumber(number);
          }
        }
      }

      if (direction == "right" || direction == "up") {
        setNumber((prevNumber) => prevNumber - increment);
        //*SI llega a 20, seteamos a false
        if (number === finalValue) {
          if (repeat == "repeat") {
            setNumber(initialValue);
          } else {
            setNumber(number);
          }
        }
      }
    }, time); // Intervalo de 1 segundo (1000 ms)

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [number, increasing, initialValue, finalValue, direction, time]);

  useEffect(() => {
    if (direction === "left" || direction === "right") {
      element.current.style.left = `${number}%`;
    }

    if (direction == "down" || direction == "up") {
      element.current.style.top = `${number}%`;
    }
   
  }, [number, direction]);
};

export default useAnimatedElement;
