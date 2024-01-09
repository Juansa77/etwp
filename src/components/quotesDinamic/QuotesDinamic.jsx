import { useRef } from "react";
import useIsVisible from "../../Hooks/useIsVisible";
import "./quotesDinamic.css";

const QuotesDinamic = () => {
  const quotesRef = useRef();
  const quotesIsVisible = useIsVisible(quotesRef);
  if (quotesRef.current) {
    // Verifica si quotesRef.current existe
    if (quotesIsVisible === true) {

      console.log("lo que sea");
      quotesRef.current.style.clipPath =
        "polygon(0% 20%, 100% 0%, 99.8% 80%, 0% 100%)";
      quotesRef.current.style.transition = "clip-path 1s ease"; // Ajusta la duración y la función de temporización según tus necesidades
    } else {
      quotesRef.current.style.clipPath =
        "polygon(120% 120%, 120% 0%, 99.8% 80%, 50% 100%)";
    }
  }

  return (
    <div className="quotes-container" ref={quotesRef}>
      <div className="quotes-text-wrapper">
        <div className="quotes-carousel-container">
          <h1 className="quote-text">Cita de Elena</h1>
          <h1 className="quote-text">Otro más</h1>
          <h1 className="quote-text">Una cosa random</h1>
          <h1 className="quote-text">Cita de Elena</h1>
          
        </div>
      </div>
    </div>
  );
};

export default QuotesDinamic;
