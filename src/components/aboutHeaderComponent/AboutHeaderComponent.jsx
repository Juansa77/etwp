/* eslint-disable react/prop-types */
import "./AboutHeaderComponent.css"
import { useRef } from "react";
import useIsVisible from "../../Hooks/useIsVisible";


const AboutHeaderComponent = ({text, image}) => {

    const aboutTextRef = useRef()
    const isVisible = useIsVisible(aboutTextRef)
  return (
    <div className="about-header-container" style={{backgroundImage:`url(${image})`}}>
      <h1 className={`about-header-text ${isVisible? "opacityFast":""}` } ref={aboutTextRef}>{text}</h1>
    </div>
  );
};

export default AboutHeaderComponent;
