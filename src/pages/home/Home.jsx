import "./Home.css";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import AnimatedPic from "../../components/AnimatedPic/AnimatedPic";
import DivSeparator from "../../components/DivSeparator/DivSeparator";
import HeroSection from "../../components/HeroSection/HeroSection";
import AnimatedTextBack from "../../components/AnimatedTextBack/AnimatedTextBack";
import GradientDivAnimated from "../../components/GradientDivAnimated/GradientDivAnimated";
import AnimatedTextFullW from "../../components/AnimatedTextFullWidth/AnimatedTextFullW";
import WavesDiv from "../../components/WavesDiv/WavesDiv";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <DivSeparator>
        <AnimatedTextFullW direction={"up"} />
      </DivSeparator>

      <DivSeparator>
        <AnimatedText direction={"left"} />
        <AnimatedText direction={"right"} />
      </DivSeparator>
      <DivSeparator>
        <AnimatedTextBack />
      </DivSeparator>
      <DivSeparator>
        <GradientDivAnimated />
      </DivSeparator>
      <DivSeparator>
        <WavesDiv />
      </DivSeparator>
      <DivSeparator>
        <AnimatedText direction={"up"} />
        <AnimatedPic direction={"right"} pic={"elena1.jpg"}  />
      </DivSeparator>
      <DivSeparator>
        <AnimatedText direction={"up"} />
      </DivSeparator>
    </div>
  );
};

export default Home;
