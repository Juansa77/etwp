import "./AboutDinamic.css";
import { useState, useEffect, useRef } from "react";
import useVerticalScrollPosition from "../../Hooks/useVerticalScrollPosition";
import GlitchText from "../GlitchText/GlitchText";
import TextCarousel from "../TextCarousel/TextCarousel";

const AboutDinamic = () => {
  const scrollTotal = useVerticalScrollPosition();
  const [scrollReduced, setScrollReduced] = useState(0);
  const mundoMejorRef = useRef();
  const mainTextRef = useRef();
  const texToCarousel =
    " BRUJERÍA   GATOS   COMIDA   UMAMI   SEXO   POLIAMOR   PISTACHOS   CHOCOLATE   GALLETAS   HALLOWEEN";

  useEffect(() => {
    setScrollReduced(scrollTotal / 10);
    if (mundoMejorRef.current) {
      if (scrollReduced < 130) {
        mundoMejorRef.current.innerText = `Escribo porque tengo que pagar la terapia`;
     
   
      } else if (scrollReduced <= 150) {
        mundoMejorRef.current.innerText = ` Escribo para comprar hummus`;

   
      } else if (scrollReduced <= 160) {
        mundoMejorRef.current.innerText = `Escribo para no buscarme un trabajo real`;
    

      } else {
        mundoMejorRef.current.innerText = `Me llamo Elena y soy escritora`;
 
      }
    }
  }, [scrollTotal, scrollReduced]);
  console.log("scroll en about", scrollReduced);

  return (
    <div className="about-dinamic-container">
      <TextCarousel text={texToCarousel} />
      <GlitchText text={"Un poco sobre mi"} />

      <div className="about-data-container">
        <div className="about-text-wrapper">
          <h1 ref={mundoMejorRef} className="animatable-text"></h1>

          <div className="about-text-content">
            <p className="about-text" ref={mainTextRef}>
              Elena Tejedor nació en Sevilla en 1988. Se ha movido poco porque
              es vaga, pero ha leído mucho. Cree que un mundo mejor es posible y
              necesario. Escribe sus dramas para costearse la terapia, pero de
              momento tiene más neuras que novelas
            </p>
          </div>
        </div>

        <div className="about-pic-wrapper">
          <img src="elena2.jpg" className="about-pic"></img>
        </div>
      </div>
    </div>
  );
};

export default AboutDinamic;
