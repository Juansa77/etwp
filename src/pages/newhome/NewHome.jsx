/* eslint-disable no-unused-vars */

import { useRef, useEffect } from "react";
import AboutDinamic from "../../components/AboutDinamic/AboutDinamic";
import HeroDinamic from "../../components/HeroDinamic/HeroDinamic";
import "./newHome.css";
import useVerticalScrollPosition from "../../Hooks/useVerticalScrollPosition";
import QuotesDinamic from "../../components/quotesDinamic/QuotesDinamic";
import TextCarousel from "../../components/TextCarousel/TextCarousel";
import GlitchText from "../../components/GlitchText/GlitchText";
import DinamicGallery from "../../components/DinamicGallery/DinamicGallery";
import PicsCarousel from "../../components/PicsCarousel/PicsCarousel";
import imagesData from "../../data/imagesData.json"
import PersonalDinamic from "../../components/PersonalDinamic/PersonalDinamic";




const NewHome = () => {
  const backgroundRef = useRef();
const nieveText=  " mi gato no está gordo, está fuerte es precioso en tan flojo como yo "

 
  return (
    <div className="home-container" ref={backgroundRef}>
      <HeroDinamic />
      {/* <GlitchText align={"right"} text={"Sobre mi"} number={"1"} numberAlign={"left"}/> */}
      <AboutDinamic />
      {/* <QuotesDinamic/> */}
   
      {/* <GlitchText align={"left"} text={"Mi gato"} number={"2"} numberAlign={"right"}/> */}
      <PicsCarousel imagesData={imagesData}/>
      <PersonalDinamic/>
  
    </div>
  );
};

export default NewHome;
