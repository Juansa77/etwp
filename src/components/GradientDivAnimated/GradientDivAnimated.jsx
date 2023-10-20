import { useState, useRef, useEffect } from "react";
import "./GradientDivAnimated.css";
import useVerticalScrollPosition from "../../Hooks/useVerticalScrollPosition";

const GradientDivAnimated = () => {
  const animatedGradient = useRef();
  const animatedTextGradient = useRef()
  const verticalScroll = useVerticalScrollPosition().toFixed(0);
  const [gradientAnimationValue, setGradientAnimationValue] = useState(0);
  const [textAnimationValue, setTextAnimationValue]= useState(0)
  const [textSize, setTextSize] = useState(0)

  useEffect(() => {
    setGradientAnimationValue(verticalScroll/5);
    setTextAnimationValue((verticalScroll/90)*0.5+15)
    setTextSize((verticalScroll/100)+100)
    animatedGradient.current.style.backgroundImage = `linear-gradient(${gradientAnimationValue}deg, green, beige   )`;
    animatedTextGradient.current.style.top=`${textAnimationValue}%`
    animatedTextGradient.current.style.fontSize=`${textSize}px`
  }, [verticalScroll]);
  console.log(gradientAnimationValue);
  console.log(textAnimationValue)
  console.log(textSize)

  return (
    <div className="gradient-animated-container" ref={animatedGradient}>
    <h1 className="gradientText" ref={animatedTextGradient}>Me gustan los gatos</h1>
   
    </div>
  );
};

export default GradientDivAnimated;
