import "./BooksComponent.css";
import jsonData from "../../data/booksData.json";
import CardComponent from "../CardComponent/CardComponent";
import useIsVisible from "../../Hooks/useIsVisible";
import { useRef } from "react";


const BooksComponent = ({image, text}) => {
  const data = jsonData;
  const aboutTextRef = useRef();
  const secondText= useRef()
  const blockTextRef = useRef()
  const isVisible = useIsVisible(aboutTextRef);
  const isVisibleTextBlock= useIsVisible(blockTextRef)
  const isVisibleSecondText = useIsVisible(secondText)
  return (
    <div className="books-component-container">
      <div
      className="about-header-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>
      <div className="about-text-container">
      <p className={`books-text ${isVisibleSecondText ? "animationText" : ""}`} ref={secondText}>
        Camila was born and raised in a small seaside town surrounded by
        breathtaking landscapes in the south of Brazil called Araranguá From .
      </p>
      <p className={`books-text-block ${isVisibleTextBlock ? "animationTextRight" : ""}`}  ref={blockTextRef}>  Camila was born and raised in a small seaside town surrounded by
        breathtaking landscapes in the south of Brazil called Araranguá From .</p>
     
   
      </div>
     
      
    </div>
    <div className="overlayBooks"></div>
    <div className="books-wrapper2">
    <h1
        className={`about-header-text ${isVisible ? "opacityFast" : ""}`}
        ref={aboutTextRef}
      >
        {text}
      </h1>
    <div className="book-card-container">
      {data.map((book, index) => (
        <CardComponent
          key={index}
          title={book.title}
          image={book.image}
          buy={book.link}
          goodReads={book.goodReadsLink}
          link={book.innerLink}
          
        />
      ))}
      </div>
      </div>

    
    </div>
  );
};

export default BooksComponent;
