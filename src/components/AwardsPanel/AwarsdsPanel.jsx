import AnimatedPanel from "../animatedPanel/AnimatedPanel";
import "./AwardsPanel.css";

const AwarsdsPanel = () => {
  return (
    <div className="awards-container">
    <AnimatedPanel text="TEXTO DE PRUEBA"/>
      <ul className="awards-list">
        <li className="list-item">
          <h4 className="list-item-text"> Premio uno de lo que sea</h4>
          <a className="list-item-a">Enlace al premio</a>
          <hr />
        </li>
        <li className="list-item">
          <h4 className="list-item-text"> Premio uno de lo que sea</h4>
          <a className="list-item-a">Enlace al premio</a>
          <hr />
        </li>
        <li className="list-item">
          <h4 className="list-item-text"> Premio uno de lo que sea</h4>
          <a className="list-item-a">Enlace al premio</a>
          <hr />
        </li>
        <li className="list-item">
          <h4 className="list-item-text"> Premio uno de lo que sea</h4>
          <a className="list-item-a">Enlace al premio</a>
          <hr />
        </li>
        <li className="list-item">
          <h4 className="list-item-text"> Premio uno de lo que sea</h4>
          <a className="list-item-a">Enlace al premio</a>
          <hr />
        </li>
        <li className="list-item">
          <h4 className="list-item-text"> Premio uno de lo que sea</h4>
          <a className="list-item-a">Enlace al premio</a>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default AwarsdsPanel;
