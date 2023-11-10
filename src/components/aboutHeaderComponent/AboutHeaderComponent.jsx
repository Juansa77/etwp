import "./AboutHeaderComponent.css"
import { useRef } from "react";
import useIsVisible from "../../Hooks/useIsVisible";


const AboutHeaderComponent = () => {

    const aboutTextRef = useRef()
    const isVisible = useIsVisible(aboutTextRef)
  return (
    <div className="about-header-container">
      <h1 className={`about-header-text ${isVisible? "opacityFast":""}` } ref={aboutTextRef}>Mis libros</h1>
    </div>
  );
};

export default AboutHeaderComponent;
