import "./HomePage.css"
import BrandsCard from "./components/BrandsCard/BrandsCard";
import picturRoomGirl from "./assets/Room - Girl Working.png"

function PageHome() {
  return (
    <div>
        <div class="box">
          <p class="box-text1">Welcome to ...</p>
          <p class="box-text2">OKIOKI</p>
          <p class="box-text3">This is a website that explores the design structure of each website.</p>
          <img src={picturRoomGirl} alt="Image" class="picture-roomGirl" />
        </div>
        <p className="head-web">WEBSITE</p> 
        <BrandsCard />
    </div>
    
  );
}

export default PageHome;