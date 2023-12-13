import { useRef } from "react";
import useIsVisible from "../../Hooks/useIsVisible";
import "./BioComponent.css";
import ListComponent from "../listComponent/ListComponent";
ListComponent;

const BioComponent = () => {
  const bioPicRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const bioTextRef = useRef();
  const isVisible = useIsVisible(bioPicRef);
  const presentationRef = useRef();
  const isVisibleText = useIsVisible(presentationRef);

  return (
    <div className="bio-container">
      <div className="overlayBio"></div>
      <div
        className={`bio-text-presentation-container ${
          isVisibleText ? "opacitySlow" : ""
        }`}
        ref={presentationRef}
      >
        <div className="bio-pic-container">
          <img
            className={`bio-pic ${isVisible ? "opacityFast" : ""}`}
            src="elena2.jpg"
            ref={bioPicRef}
          />
        </div>
        <div className="bio-text-wrap2">
          <h3>Esto es como lo que pone al principio en pequeño</h3>

          <h1>Esto en grande en plan motivador</h1>
          <p>
            Camila was born and raised in a small seaside town surrounded by
            breathtaking landscapes in the south of Brazil called Araranguá From
            .
          </p>
        </div>
      </div>

      {/* <div className="bio-data-container">
      <div className="bio-data-wrapper">
        <div className="bio-pic-container">
          
        </div>
        <div className={`bio-text-container ${isVisible ? "opacitySlow" : ""}`} ref={bioTextRef}>
          <h3 className="bio-name">Elena Tejedor</h3>
          <p className="bio-text">
            Camila was born and raised in a small seaside town surrounded by
            breathtaking landscapes in the south of Brazil called Araranguá From
            a young age, she developed a love for art – and to this day, she
            continues to expand this passion through different forms of
            self-expression. Her skill set includes a variety of canvas and
            digital painting, music, writing and tattooing. The desire to learn
            more about artistic expressions and to experience new cultures led
            her to Europe in 2016. She currently lives in Dublin, Ireland, and
            has found through her experiences, that tattooing is her greatest
            passion. For her, tattooing means to tell a different story every
            day. It means to eternalise a happy memory, to listen to another
            person’s story and share their feelings, even if it’s just for a
            moment, and, in the end, to create an expression of their souls. You
            can find a little bit of everything she has learned in her portfolio
            below.
          </p>
        </div>
      </div>
      </div> */}

      <div className="other">
        <ListComponent />
      </div>
    </div>
  );
};

export default BioComponent;
