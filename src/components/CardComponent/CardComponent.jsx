import "./CardComponent.css";

const CardComponent = ({ title, image, buy, goodReads }) => {
  return (
    <div className="card-container">
      <h1>{title}</h1>
      <img src={image} className="bookCover" alt={`${title} cover`} />
      <div className="card-links-container">
        <a className="buy-link" href={buy}>
          <h3>Comprar</h3>
        </a>
        <a className="goodReads-link" href={goodReads}>
          <h3>Ficha en GoodReads</h3>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
