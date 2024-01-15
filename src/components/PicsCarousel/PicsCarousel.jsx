import "./PicsCarousel.css";


const PicsCarousel = ({ imagesData }) => {
  const images = imagesData;
  return (
    <div className="pics-carousel-container">
      <div className="imgs-carousel-wrapper">
        <img className="carousel-img" src={images[0].img}></img>
      </div>
      <div className="imgs-carousel-wrapper">
        <img className="carousel-img" src={images[1].img}></img>
      </div>

      <div className="imgs-carousel-wrapper">
        <img className="carousel-img" src={images[2].img}></img>
      </div>
      <div className="imgs-carousel-wrapper">
        <img className="carousel-img" src={images[3].img}></img>
      </div>
      <div className="imgs-carousel-wrapper">
        <img className="carousel-img" src={images[4].img}></img>
      </div>
      <div className="imgs-carousel-wrapper">
        <img className="carousel-img" src={images[0].img}></img>
      </div>
      <div className="imgs-carousel-wrapper">
        <img className="carousel-img" src={images[0].img}></img>
      </div>
      <div className="imgs-carousel-wrapper">
        <img className="carousel-img" src={images[0].img}></img>
      </div>
    </div>
  );
};

export default PicsCarousel;
