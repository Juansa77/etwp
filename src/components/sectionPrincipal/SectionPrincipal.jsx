/* eslint-disable react/prop-types */
import { useRef } from "react";
import useIsVisible from "../../Hooks/useIsVisible";
import AnimatedPanel from "../animatedPanel/AnimatedPanel";
import "./SectionPrincipal.css";

const SectionPrincipal = ({
  img,
  background,
  backgrountAtt,
  background2,
  imageOrder,
  textOrder,
  textAlign,
  panelAlign,
  text
}) => {
  const sectionRef = useRef();
  const isVisibleSection = useIsVisible(sectionRef);
  console.log(isVisibleSection);

  return (
    <div
      className="section-container"
      style={{ backgroundImage: `url(${background})`, backgroundAttachment:`${backgrountAtt}` }}
    >
      <div className="section-wrapper">
        <div
          className="section-panel-wrapper"
          style={{ justifyContent: `${panelAlign}` }}
        >
          <AnimatedPanel text={text} />
        </div>
        <div className="section-info-wrapper">
          <div
            ref={sectionRef}
            className={`section-pic-wrapper ${
              isVisibleSection ? "backGround-animation" : ""
            }`}
            style={{
              backgroundImage: `url(${background2})`,
              order: `${imageOrder}`,
            }}
          >
            <img className="section-pic" src={img} />
          </div>
          <div
            className="section-text-wrapper"
            style={{ order: `${textOrder}`, textAlign: `${textAlign}` }}
          >
            {" "}
            <p className="section-text">
              Jay Pharoah is an actor and stand-up comedian. With six seasons as
              a cast member of NBCs Saturday Night Live, Pharoah is best known
              for his wide array of uncanny celebrity impressions, including
              President Barack Obama, Will Smith, Denzel Washington, Stephen A.
              Smith, Kanye West and Chris Tucker, as well as his recurring
              character, school principal Daniel Frye
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPrincipal;
