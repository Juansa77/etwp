import "./GlitchText.css";

const GlitchText = ({ text }) => {
  return (
    <div className="glitch-component-container">
    <div className="glitch-wrapper-component">
      <div className="glitch-component" data-glitch={text}>
      {text}
      </div>
    </div>
    </div>
  );
};

export default GlitchText;
