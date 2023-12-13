
import "./AboutHeaderComponent.css";
import { useRef } from "react";
 import useIsVisible from "../../Hooks/useIsVisible";

const AboutHeaderComponent = ({ text, image }) => {
   const aboutTextRef = useRef();
      const secondText= useRef()
   const blockTextRef = useRef()
  const isVisible = useIsVisible(aboutTextRef);
   const isVisibleTextBlock= useIsVisible(blockTextRef)
   const isVisibleSecondText = useIsVisible(secondText)
  
  return (
     <div
       className="about-header-container"
       style={{ backgroundImage: `url(${image})` }}>

       <div className="overlay"></div>
       <div className="about-text-container">
       <p className={`books-text ${isVisibleSecondText ? "animationText" : ""}`} ref={secondText}>
         Camila was born and raised in a small seaside town surrounded by
         breathtaking landscapes in the south of Brazil called Araranguá From .
       </p>
       <p className={`books-text-block ${isVisibleTextBlock ? "animationTextRight" : ""}`}  ref={blockTextRef}>  Camila was born and raised in a small seaside town surrounded by
         breathtaking landscapes in the south of Brazil called Araranguá From .</p>
       </div>
     
       <h1
         className={`about-header-text ${isVisible ? "opacityFast" : ""}`}
         ref={aboutTextRef}
      >
         {text}
       </h1>
     </div>
   );
};

 export default AboutHeaderComponent;
