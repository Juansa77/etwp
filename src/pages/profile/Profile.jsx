

import BioCard from "../../components/bioCardComponent/BioCard"
import BioCardRight from "../../components/bioCardRight/bioCardRight"
import "./Profile.css"


const Profile = () => {
  return (
    <div className="profile-container">
      <BioCard/>
      <BioCardRight/>
    </div>
  )
}

export default Profile