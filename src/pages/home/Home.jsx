import "./Home.css";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import AnimatedPic from "../../components/AnimatedPic/AnimatedPic";
import DivSeparator from "../../components/DivSeparator/DivSeparator";
import HeroSection from "../../components/HeroSection/HeroSection";
HeroSection

const Home = () => {
  return (
    <div className="home">
    <HeroSection/>
      <DivSeparator>
        <AnimatedText direction={"left"} />
        <AnimatedText direction={"right"} />
      </DivSeparator>
      <DivSeparator>
        <AnimatedText direction={"up"} />
        <AnimatedPic direction={"right"} pic={"elena1.jpg"} form={"circle"}/>
      </DivSeparator>
      <DivSeparator>
        <AnimatedText />
      </DivSeparator>
      <DivSeparator>
        <AnimatedText />
      </DivSeparator>
      <DivSeparator>
        <AnimatedText />
      </DivSeparator>
    </div>
  );
};

export default Home;
