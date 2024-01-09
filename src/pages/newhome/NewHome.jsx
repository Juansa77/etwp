/* eslint-disable no-unused-vars */

import { useRef, useEffect } from "react";
import AboutDinamic from "../../components/AboutDinamic/AboutDinamic";
import HeroDinamic from "../../components/HeroDinamic/HeroDinamic";
import "./newHome.css";
import useVerticalScrollPosition from "../../Hooks/useVerticalScrollPosition";
import QuotesDinamic from "../../components/quotesDinamic/QuotesDinamic";
import TextCarousel from "../../components/TextCarousel/TextCarousel";
import GlitchText from "../../components/GlitchText/GlitchText";




const NewHome = () => {
  const backgroundRef = useRef();
const nieveText=  " mi gato no está gordo, está fuerte es precioso en tan flojo como yo "

 
  return (
    <div className="home-container" ref={backgroundRef}>
      <HeroDinamic />
      <AboutDinamic />
      <QuotesDinamic/>
      <TextCarousel text={nieveText}/>
      <GlitchText text={"Mi gato"}/>
    </div>
  );
};

export default NewHome;
