/* eslint-disable no-unused-vars */

import AboutDinamic from "../../components/AboutDinamic/AboutDinamic";
import HeroDinamic from "../../components/HeroDinamic/HeroDinamic";
import "./newHome.css";

const NewHome = () => {
  return (
    <div className="home-container">
      <HeroDinamic />
      <AboutDinamic />
    </div>
  );
};

export default NewHome;
