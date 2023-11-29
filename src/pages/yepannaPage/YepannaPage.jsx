import BookData from "../../components/BookData/BookData";
import "./YepannaPage.css";
import jsonData from "../../data/booksData.json";

const YepannaPage = () => {
  return (
    <div className="book-container">
      <BookData
        heroText={"Una aventura con mucha comida"}
        heroImage={"elena5.jpg"}
        bookCover={"YepannaCover.jpg"}
        tecText={jsonData[1].tecInfo}
        bookTitle={"Hogar en Yepanna"}
        bookPlot={jsonData[1].plot}
        buyLink={jsonData[1].link}
        GRLink={jsonData[1].goodReadsLink}
      />
    </div>
  );
};

export default YepannaPage;
