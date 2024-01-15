import "./GlitchText.css";

const GlitchText = ({ text, align, numberAlign, number }) => {
  console.log(align)
  return (
    <div className="glitch-component-container">
    <div className="glitch-n-container" style={{justifyContent:`${numberAlign}`}}>
      <h1 className="glitch-number">{number}</h1>
    </div>
    <div className="glitch-wrapper-component" style={{justifyContent:`${align}`}}>
      <div className="glitch-component" data-glitch={text} >
      {text}
      </div>
    </div>
    </div>
  );
};

export default GlitchText;
