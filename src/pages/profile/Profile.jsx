

import BioCard from "../../components/bioCardComponent/BioCard"
import BioCardRight from "../../components/bioCardRight/bioCardRight"
import "./Profile.css"


const Profile = () => {
  return (
    <div className="profile-container">
      <BioCard img={"elenaTR2.png"} text={"Texto de ejemplo"} background={"canvaYellow.jpg"}/>
      <BioCardRight/>
      <BioCard img={"gato-prueba3.png"} text={"Otro texto"} />
    </div>
  )
}

export default Profile