import { useRef } from "react";
import useIsVisible from "../../Hooks/useIsVisible";
import "./AnimatedPanel.css";

const AnimatedPanel = ({text}) => {
  const animatedPanelRef = useRef();
  const animatedPanelBackRef = useRef();
  const isPanelVIsible = useIsVisible(animatedPanelRef);

  return (
    <div ref={animatedPanelRef} className="animated-panel-container">
      <div
        className={`animated-panel-wrapper ${
          isPanelVIsible ? "panel-wrapper-animation" : ""
        }`}
      >
        <h1 className="animated-panel-text">{text}</h1>
      </div>
      <div  className={`animated-panel-shadow ${
          isPanelVIsible ? "panel-backdiv-animation" : ""
        }`} ref={animatedPanelBackRef}></div>
    </div>
  );
};

export default AnimatedPanel;
