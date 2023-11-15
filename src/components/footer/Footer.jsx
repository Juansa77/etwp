
import "./Footer.css"
import { FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {

  const emailAddress = 'juansalvador.garcia.ramirez@gmail.com';
return (
  <div className="footer">
  <div className="footer-contact-wrapper">
  <div className="textWrap">
    <h1>Contacta conmigo</h1>
    <h4>(muerdo)</h4>
    </div>
    <div className="footer-social-wrap">
  
      <a className="footerAnchor" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/juan-salvador-garcia-b6183a232/`}>
      <FaSquareXTwitter size="50px"/>
      </a>
      <a className="footerAnchor" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/juan-salvador-garcia-b6183a232/`}>
      <FaSquareInstagram size="50px" />
      </a>
    </div>
  </div>
  <div className="footerWrap">
  
    <div className="footer-text-wrap">
      <h3 className="footerText">
        Coded with <FaHeart /> and caffeine by Juansa García
      </h3>
    </div>
    <div className="footer-links-wrap">
      <a className="footerAnchor" href={`mailto:${emailAddress}`}>
        <MdEmail />
      </a>
      <a className="footerAnchor" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/juan-salvador-garcia-b6183a232/`}>
        <FaLinkedin size="21px" />
      </a>
    </div>
  </div>
  </div>
);
};

export default Footer