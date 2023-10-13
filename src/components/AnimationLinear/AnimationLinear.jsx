import useAnimatedElement from "../../Hooks/useAnimatedElement";
import "./AnimationLinear.css";
import { useRef } from "react";
useAnimatedElement

const AnimationLinear = () => {

  const circle = useRef();
  const circle2 = useRef();

  useAnimatedElement(0, 10, 100, 1, circle, "left");
  useAnimatedElement(90, 10, 0, 1, circle2, "right");
  return (
    <div className="animation-linear-container">
      <div className="circle-div" ref={circle}></div>
      <div className="circle-div2" ref={circle2}></div>
    </div>
  );
};

export default AnimationLinear;
