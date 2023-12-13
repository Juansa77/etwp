import "./Home.css";
// import AnimatedText from "../../components/AnimatedText/AnimatedText";
// import AnimatedPic from "../../components/AnimatedPic/AnimatedPic";
// import DivSeparator from "../../components/DivSeparator/DivSeparator";
import HeroSection from "../../components/HeroSection/HeroSection";
// import AnimatedTextBack from "../../components/AnimatedTextBack/AnimatedTextBack";
// import GradientDivAnimated from "../../components/GradientDivAnimated/GradientDivAnimated";
// import AnimatedTextFullW from "../../components/AnimatedTextFullWidth/AnimatedTextFullW";
// import WavesDiv from "../../components/WavesDiv/WavesDiv";
// import AnimatedGallery from "../../components/animatedGallery/animatedGallery";
import BioComponent from "../../components/bioComponent/BioComponent";
// eslint-disable-next-line no-unused-vars
import AboutHeaderComponent from "../../components/aboutHeaderComponent/AboutHeaderComponent";
import BooksComponent from "../../components/BooksComponent/BooksComponent";
import Footer from "../../components/footer/Footer";
import BioCard from "../../components/bioCardComponent/BioCard";
BioCard






const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <BioComponent/>
      <BioCard img={"gato-prueba3.png"} text={"Otro texto"}  background={"canvaYellow.jpg"}/>
      <BooksComponent text="Mis libros"/>
      {/* <AboutHeaderComponent text="Mis libros" image="canvaYellow.jpg"/>
   */}
      <Footer/>
      
      
      {/* <DivSeparator>
        <AnimatedTextFullW direction={"up"} />
      </DivSeparator>
      <DivSeparator>
        <AnimatedTextBack />
      </DivSeparator>
      <DivSeparator>
        <AnimatedText direction={"left"} />
        <AnimatedText direction={"right"} />
      </DivSeparator>
      <DivSeparator>
      <AnimatedGallery direction={"right"} pic={"elena1.jpg"}  />
      </DivSeparator>
      <DivSeparator>
        <AnimatedText direction={"up"} />
        <AnimatedPic direction={"right"} pic={"elena1.jpg"}  />
      </DivSeparator>
      <DivSeparator>
        <AnimatedText direction={"up"} />
      </DivSeparator>
      <DivSeparator>
        <WavesDiv />
      </DivSeparator>
      <DivSeparator>
        <GradientDivAnimated />
      </DivSeparator> */}
    </div>
  );
};

export default Home;
