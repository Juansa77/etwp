/* eslint-disable react/prop-types */
import Button from "../UI/Buttom/Button";
import "./BookData.css";

const BookData = ({
  heroText,
  heroImage,
  bookCover,
  tecText,
  bookTitle,
  bookPlot,
  buyLink,
  GRLink,
}) => {
  return (
    <div className="book-data-container">
      <div className="book-data-hero-container">
        <img className="book-data-hero-img" src={heroImage} />{" "}
        <h1 className="hero-book-data-text">{heroText}</h1>
      </div>

      <div className="book-data-info-container">
        <div className="book-data-left-container">
          <img className="book-data-left-img" src={bookCover} />{" "}
          <div className="book-tec-text-container">
            <h3>Ficha técnica</h3>
            <p>{tecText}</p>
          </div>
        </div>

        <div className="book-data-right-container">
          <div className="book-data-text-right-container">
            <h1 className="book-title-data-right">{bookTitle}</h1>
            <p className="book-data-plot-text">{bookPlot}</p>
          </div>

          <div className="book-data-btn-container">
            <Button text={"Comprar"} link={buyLink} />
            <Button text={"Ficha en GoodReads"} link={GRLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookData;
