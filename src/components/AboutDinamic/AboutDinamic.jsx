import "./AboutDinamic.css";
import { useState, useEffect, useRef } from "react";
import useVerticalScrollPosition from "../../Hooks/useVerticalScrollPosition";

const AboutDinamic = () => {
  const scrollTotal = useVerticalScrollPosition();
  const [scrollReduced, setScrollReduced] = useState(0);
  const mundoMejorRef = useRef();

  useEffect(() => {
    setScrollReduced(scrollTotal / 10);
    if (scrollReduced < 130) {
      mundoMejorRef.current.innerText = ` más humano`;
    } else if (scrollReduced <= 160) {
      mundoMejorRef.current.innerText = ` más bonito`;
    } else if (scrollReduced <= 170) {
      mundoMejorRef.current.innerText = ` más justo`;
    } else {
      mundoMejorRef.current.innerText = ` mejor`;
    }
  }, [scrollTotal, scrollReduced]);
  console.log("scroll en about", scrollReduced);

  return (
    <div className="about-dinamic-container">
      <div className="about-data-container">
        <div className="about-text-wrapper">
          <p className="about-text">
            Elena Tejedor nació en Sevilla en 1988. Se ha movido poco porque es
            vaga, pero ha leído mucho. Cree que un mundo{" "}
            <span ref={mundoMejorRef} className="animatable-text">
              {" "}
              mejor{" "}
            </span>{" "}
            es posible y necesario. Escribe sus dramas para costearse la
            terapia, pero de momento tiene más neuras que novelas
          </p>
        </div>
        <div className="about-pic-wrapper">
          <img src="elena2.jpg" className="about-pic"></img>
        </div>
      </div>
    </div>
  );
};

export default AboutDinamic;
