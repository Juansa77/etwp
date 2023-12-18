/* eslint-disable react/prop-types */
import AnimatedPanel from "../animatedPanel/AnimatedPanel";
import "./SectionPrincipal.css";

const SectionPrincipal = ({ img, background }) => {
  return (
    <div
      className="section-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="section-wrapper">
        <div className="section-panel-wrapper">
          <AnimatedPanel text={"Lo que sea"} />
        </div>
        <div className="section-info-wrapper">
          <div className="section-pic-wrapper">
            <img className="section-pic" src={img} />
          </div>
          <div className="section-text-wrapper">
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
