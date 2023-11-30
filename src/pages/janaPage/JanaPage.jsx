import "./JanaPage.css"
import BookData from "../../components/BookData/BookData";
import jsonData from "../../data/booksData.json";

const JanaPage = () => {
  return (
    <div className="book-container-jana">
    <BookData
      heroText={"Una aventura con mucha comida"}
      heroImage={"elena3.jpg"}
      bookCover={"janaCover.jpg"}
      tecText={jsonData[0].tecInfo}
      bookTitle={"Jana en las estrellas"}
      bookPlot={jsonData[0].plot}
      buyLink={jsonData[0].link}
      GRLink={jsonData[0].goodReadsLink}
    />
  </div>
  )
}

export default JanaPage