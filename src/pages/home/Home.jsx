import "./Home.css";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import AnimatedPic from "../../components/AnimatedPic/AnimatedPic";
import DivSeparator from "../../components/DivSeparator/DivSeparator";
import HeroSection from "../../components/HeroSection/HeroSection";
import AnimationLinear from "../../components/AnimationLinear/AnimationLinear";
import AnimatedTextBack from "../../components/AnimatedTextBack/AnimatedTextBack";
import GradientDivAnimated from "../../components/GradientDivAnimated/GradientDivAnimated";



const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <DivSeparator>
        <AnimationLinear />
      </DivSeparator>
    
      <DivSeparator>
        <AnimatedText direction={"left"} />
        <AnimatedText direction={"right"} />
      </DivSeparator>
      <DivSeparator>
        <AnimatedTextBack />
      </DivSeparator>
      <DivSeparator>
        <GradientDivAnimated/>
      </DivSeparator>
      <DivSeparator>
        <AnimatedText direction={"up"} />
        <AnimatedPic direction={"right"} pic={"elena1.jpg"} form={"circle"} />
      </DivSeparator>
      <DivSeparator>
        <AnimatedText direction={"up"} />
      </DivSeparator>
 
    </div>
  );
};

export default Home;
