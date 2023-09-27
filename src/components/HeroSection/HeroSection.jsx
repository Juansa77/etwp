import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroContainer">
      <div className="frontalHero">
        <img className="frontalImage" src={"frontalHero.png"} />
        <h1 className="heroText">ELENA TEJEDOR</h1>
      </div>
    </div>
  );
};

export default HeroSection;
