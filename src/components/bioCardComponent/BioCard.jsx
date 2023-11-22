import { useRef } from "react";
import "./BioCard.css";
import useIsVisible from "../../Hooks/useIsVisible";

const BioCard = ({img, text, background}) => {
  const textWrapRef = useRef();
 
  const isVisibleTextWrap = useIsVisible(textWrapRef);


  return (
    <div className="biocard-container" style={  {backgroundImage: `url(${background})`}}>
      <div className="biocard-wrapper">
        <div className="bio-pic-wrapper">
          <img  className={`bio-card-pic ${
            isVisibleTextWrap ? "" : ""
          }`} src={img}  />
        </div>
        {/* <div className="biopic-back"></div> */}
        <div
          className={`bio-text-container ${
            isVisibleTextWrap ? "animationTextToRight" : ""
          }`}
          ref={textWrapRef}
        >
          {" "}
          <h3>{text}</h3>
        </div>
        <div
          className={`bio-text-back ${
            isVisibleTextWrap ? "animationBackToLeft" : ""
          }`}
        
        ></div>
        <div className="bio-data-text-container">
          <p>
            Jay Pharoah is an actor and stand-up comedian. With six seasons as a
            cast member of NBCs Saturday Night Live, Pharoah is best known for
            his wide array of uncanny celebrity impressions, including President
            Barack Obama, Will Smith, Denzel Washington, Stephen A. Smith, Kanye
            West and Chris Tucker, as well as his recurring character, school
            principal Daniel Frye
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioCard;
