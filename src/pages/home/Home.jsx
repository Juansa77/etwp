
import "./Home.css"
import AnimatedText from "../../components/AnimatedText/AnimatedText"
import DivSeparator from "../../components/DivSeparator/DivSeparator"

const Home = () => {
  return (
    <div className="home">
    <DivSeparator><AnimatedText direction={"left"}/><AnimatedText direction={"right"}/></DivSeparator>
    <DivSeparator ><AnimatedText direction={"up"}/><AnimatedText direction={"right"}/></DivSeparator>
    <DivSeparator><AnimatedText/></DivSeparator>
    <DivSeparator><AnimatedText/></DivSeparator>
    <DivSeparator><AnimatedText/></DivSeparator>
    

    </div>
  )
}

export default Home