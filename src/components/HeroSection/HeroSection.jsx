
import useVerticalScrollPosition from "../../Hooks/useVerticalScrollPosition";
import "./HeroSection.css";
import { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const animatedText = useRef();
  const frontalImage = useRef();
  const animatedSubText = useRef();
  const animatedFirstRef = useRef();
  const [currentOpacity, setCurrentOpacity] = useState(100);
  const scrollTotal = useVerticalScrollPosition();
 

  //*----UseEffect PARA LA ANIMACIÓN FRONTAL
 /* useEffect(() => {
    frontalImage.current.style.left = `${frontalAnimation}%`;
    // Aplica la animación cuando el elemento es visible
  }, [frontalAnimation]);*/

  //*----UseEffect PARA LA ANIMACIÓN DE  OPACITY DE  TEXTO POR SCROLL-----
  useEffect(() => {
    const opacityValue = 100;
    setCurrentOpacity(opacityValue - scrollTotal / 13);

    animatedText.current.style.opacity = `${currentOpacity}%`;
    animatedSubText.current.style.opacity = `${currentOpacity}%`;
    animatedFirstRef.current.style.opacity = `${currentOpacity}%`;

  }, [scrollTotal]);

  return (
    <div className="heroContainer">
      <div className="frontalHero">
        <img
          className="frontalImage"
          ref={frontalImage}
          src={"frontalHero.png"}
        />
        <h1 className="hero-firstText" ref={animatedFirstRef}>
          Soy
        </h1>
        <h1 className={`animated-hero-text }`} ref={animatedText}>
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
