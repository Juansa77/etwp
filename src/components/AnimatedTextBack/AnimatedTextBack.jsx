import { useState, useEffect, useRef } from "react";
import useVerticalScrollPosition from "../../Hooks/useVerticalScrollPosition";

import "./AnimatedTextBack.css";

const AnimatedTextBack = () => {
  const textAnimatedBack= useRef()  
  const verticalScrollPosition = useVerticalScrollPosition().toFixed(0)
  const [animationValue, setAnimationValue] = useState(0)

  useEffect(()=>{

setAnimationValue((verticalScrollPosition/100)-40)
textAnimatedBack.current.style.left=`${animationValue}%`
  }
  
  ,[verticalScrollPosition])

  console.log(animationValue)
  console.log(verticalScrollPosition);
  return (
    <div className="animatedTextBack-container">
      <h1  className="backTextAnimated"  ref={textAnimatedBack}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h1>
      <h1 className="mainText">Soy escritora</h1>
    </div>
  );
};

export default AnimatedTextBack;
