/* eslint-disable no-unused-vars */

import { useRef, useEffect } from "react";
import AboutDinamic from "../../components/AboutDinamic/AboutDinamic";
import HeroDinamic from "../../components/HeroDinamic/HeroDinamic";
import "./newHome.css";
import useVerticalScrollPosition from "../../Hooks/useVerticalScrollPosition";
import QuotesDinamic from "../../components/quotesDinamic/QuotesDinamic";




const NewHome = () => {
  const backgroundRef = useRef();


 
  return (
    <div className="home-container" ref={backgroundRef}>
      <HeroDinamic />
      <AboutDinamic />
      <QuotesDinamic/>
    </div>
  );
};

export default NewHome;
