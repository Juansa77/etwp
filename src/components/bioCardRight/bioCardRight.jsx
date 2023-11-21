import "./BioCardRight.css";
import useIsVisible from "../../Hooks/useIsVisible";
import { useRef } from "react";

const BioCardRight = () => {
  const textWrapRefRight = useRef();

  const isVisibleTextWrapRight = useIsVisible(textWrapRefRight);

  return (
    <div className="biocardRight-container">
      <div className="biocard-wrapper-right">
        <div className="biopic-wrapper-right">
          <img
            className={`biocard-pic-right ${isVisibleTextWrapRight ? "" : ""}`}
            src="elena5.jpg"
          />
        </div>
        <div className="bio-shadow-back"></div>
        <div
          className={`biotext-container-right ${
            isVisibleTextWrapRight ? "animationTextToRight-right" : ""
          }`}
          ref={textWrapRefRight}
        >
          {" "}
          <h3>Frase de ejemplo</h3>
        </div>
        <div
          className={`biotext-back-right ${
            isVisibleTextWrapRight ? "animationBackToLeft-right" : ""
          }`}
        ></div>
        <div className="biodata-text-container-right">
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

export default BioCardRight;
