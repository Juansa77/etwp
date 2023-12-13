import "./ListComponent.css";

const ListComponent = () => {
  return (
    <div className="list-container">
      <div
        className="list-item-container"
        style={{ backgroundImage: "url(elena3.jpg)" }}
      ></div>
      <div className="list-item-container">
        <div className="list-text-container">
          <p className="list-txt">Prueba de texto</p>
        </div>
      </div>
      <div
        className="list-item-container"
        style={{ backgroundImage: "url(elena1.jpg)" }}
      ></div>
      <div
        className="list-item-container"
        style={{ backgroundImage: "url(elena2.jpg)" }}
      ></div>
      <div
        className="list-item-container"
        style={{ backgroundImage: "url(elena5.jpg)" }}
      ></div>
      <div
        className="list-item-container"
        style={{ backgroundImage: "url(elena3.jpg)" }}
      ></div>
      <div className="list-item-container">
        <div className="list-text-container">
          <p className="list-txt">Prueba de texto</p>
        </div>
      </div>
      <div
        className="list-item-container"
        style={{ backgroundImage: "url(elena4.jpg)" }}
      ></div>

      <div className="list-item-container"></div>
    </div>
  );
};

export default ListComponent;
