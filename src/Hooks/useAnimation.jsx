import { useState, useEffect } from "react";

// Definimos el hook personalizado con valores iniciales como argumentos
function useAnimation(initialValue = 50, minValue = 50, maxValue = 60) {
  const [frontalAnimation, setFrontalAnimation] = useState(initialValue);
  const [animationDirection, setAnimationDirection] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrontalAnimation((prevValue) => prevValue + animationDirection);

      if (frontalAnimation === minValue || frontalAnimation === maxValue) {
        setAnimationDirection((prevDirection) => -prevDirection);
      }
    }, 1900);

    return () => {
      clearInterval(interval);
    };
  }, [frontalAnimation, animationDirection, minValue, maxValue]);

  return frontalAnimation;
}

export default useAnimation;