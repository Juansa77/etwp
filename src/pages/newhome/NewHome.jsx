/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import useVerticalScrollPosition from "../../Hooks/useVerticalScrollPosition";
import "./newHome.css";

const NewHome = () => {
  const scrollTotal = useVerticalScrollPosition();
  const [scrollReduced, setScrollReduced] = useState(0);
  const textRef = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const textRef4 = useRef();


  useEffect(() => {
    setScrollReduced(scrollTotal / 10);
    textRef.current.style.marginLeft= `${scrollReduced}rem`
    textRef2.current.style.marginRight= `${scrollReduced}rem`
    textRef3.current.style.fontSize= `${scrollReduced}px`
    textRef4.current.style.rotate= `${scrollReduced}deg`
  }, [scrollTotal]);

  console.log("scroll total", scrollTotal);
  console.log("scroll reducido", scrollReduced);

  return (
    <div className="home-container">
      <h1  className="textP" ref={textRef}>VAMOS A HACER UNA PRUEBA</h1>
      <div className="text-container">
      <h1  className="textP2" ref={textRef2}>VAMOS A HACER UNA PRUEBA</h1>
      </div>
      <div className="text-container2">
      <h1  className="textP3" ref={textRef3}>cambio de tamaño</h1>
      </div>
      <div className="text-container3">
      <h1  className="textP4" ref={textRef4}>VAMOS A HACER UNA PRUEBA</h1>
      </div>
    </div>
  );
};

export default NewHome;
