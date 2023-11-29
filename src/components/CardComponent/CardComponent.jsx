import { Link, Navigate } from "react-router-dom";
Navigate
import "./CardComponent.css";


const CardComponent = ({ title, image, buy, goodReads, link }) => {
  return (
    <div className="card-container">
    <Link to={link}>
      <img src={image} className="bookCover" alt={`${title} cover`} /></Link>
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
