import useAnimatedElement from "../../Hooks/useAnimatedElement";
import "./AnimationLinear.css";
import { useRef } from "react";
useAnimatedElement;

const AnimationLinear = () => {
  const circle = useRef();
  const circle2 = useRef();
  const circle3 = useRef();
  const circle4 = useRef();

  useAnimatedElement(0, 10, 100, 1, circle, "left", "repeat");
  useAnimatedElement(90, 10, 0, 1, circle2, "right");
  useAnimatedElement(0, 10, 100, 1, circle3, "down");
  useAnimatedElement(90, 10, 0, 1, circle4, "up", "repeat");

  return (
    <div className="animation-linear-container">
      <div className="circle-div" ref={circle}></div>
      <div className="circle-div2" ref={circle2}></div>
      <div className="containerTry">
        <div className="circle-div3" ref={circle3}></div>
        <div className="circle-div4" ref={circle4}></div>
      </div>
    </div>
  );
};

export default AnimationLinear;
