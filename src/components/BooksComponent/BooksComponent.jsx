import "./BooksComponent.css";
import jsonData from "../../data/booksData.json";
import CardComponent from "../CardComponent/CardComponent";
CardComponent;

const BooksComponent = () => {
  const data = jsonData;

  return (
    <div className="books-component-container">
    <div className="overlayBooks"></div>
      {data.map((book, index) => (
        <CardComponent
          key={index}
          title={book.title}
          image={book.image}
          buy={book.link}
          goodReads={book.goodReadsLink}
        />
      ))}
    </div>
  );
};

export default BooksComponent;
