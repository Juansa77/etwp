import "./HeroDinamic.css";
import { useState, useEffect, useRef } from "react";
import useVerticalScrollPosition from "../../Hooks/useVerticalScrollPosition";

const HeroDinamic = () => {
  const scrollTotal = useVerticalScrollPosition();
  const [scrollReduced, setScrollReduced] = useState(0);
  const textRefName = useRef();
  const textRefSurname = useRef();
  const textRefPresentation= useRef()
  const textRef3 = useRef();


  useEffect(() => {
    setScrollReduced(scrollTotal / 10);



    //textRefPresentation.current.style.lineHeight=`-${scrollReduced}rem`;
    textRefName.current.style.marginLeft = `-${scrollReduced}rem`;
    textRefSurname.current.style.marginLeft = `${scrollReduced}rem`;
    textRef3.current.style.fontSize = `${scrollReduced}px`;

  }, [scrollTotal]);

  console.log("scroll total", scrollTotal);
  console.log("scroll reducido", scrollReduced);

  return (
    <div className="hero-dinamic-container">

      <div className="hero-name-wrapper">
      <h1 className="hero-name" ref={textRefName}>
          ELENA
        </h1>
       {/* <p className="hero-text-presentation" ref={textRefPresentation} >¡Hola! Me llamo, Vamos a hacer pruebas de párrafos </p>  */}
        
      </div>
      <div className="glitch-wrapper">
        <div className="glitch" data-glitch="TEJEDOR" ref={textRefSurname}>
          TEJEDOR
        </div>
      </div>
      <div className="hero-webtext-wrapper">
        <h3 className="textP3" ref={textRef3}>
          Esta es mi web
        </h3>
      </div>
    </div>
  );
};

export default HeroDinamic;
