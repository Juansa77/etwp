import "./TextCarousel.css";

const TextCarousel = ({text}) => {
  return (
    <div className="text-carousel-container">
     <div className="carousel-wrapper-second">
        <p className="carousel-text-second">
       {text}
        </p>
      </div>
      <div className="carousel-wrapper">
        <p className="carousel-text">
         {text}
        </p>
      </div>
      
      <div className="carousel-wrapper-second">
        <p className="carousel-text-second">
       {text}
        </p>
      </div>
      <div className="carousel-wrapper">
        <p className="carousel-text">
         {text}
        </p>
      </div>
      <div className="carousel-wrapper-second">
        <p className="carousel-text-second">
       {text}
        </p>
      </div>
      <div className="carousel-wrapper">
        <p className="carousel-text">
         {text}
        </p>
      </div>
      <div className="carousel-wrapper-second">
        <p className="carousel-text-second">
       {text}
        </p>
      </div>
      <div className="carousel-wrapper">
        <p className="carousel-text">
         {text}
        </p>
      </div>
    </div>
  );
};

export default TextCarousel;
