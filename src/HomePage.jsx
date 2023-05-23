import "./HomePage.css"
import BrandsCard from "./components/BrandsCard/BrandsCard";
import picturRoomGirl from "./assets/Room - Girl Working.png";
import { useAuthContext } from "./core/contexts/AuthProvider";

function HomePage() {
  const { token } = useAuthContext()
  
  return (
    <div>
      <div className="full-size">
        <div className="box">
          <p className="box-text1">Welcome to ...</p>
          <p className="box-text2">Anapos</p>
          <p className="box-text3">This is a website that explores the design structure of each website.</p>
        </div>
        <img src={picturRoomGirl} alt="Image" className="picture-roomGirl"/>
      </div>
        
        <div className="head-web">
          <p>About the website</p> 
        </div>
        
    </div>
    
  );
}

export default HomePage;