import "./HomePage.css"
import BrandsCard from "./components/BrandsCard/BrandsCard";
import picturRoomGirl from "./assets/Room - Girl Working.png";

function HomePage() {
  return (
    <div>
      <div class="full-size">
      <img src={picturRoomGirl} alt="Image" class="picture-roomGirl"/>
        <div class="box">
          <p class="box-text1">Welcome to ...</p>
          <p class="box-text2">OKIOKI</p>
          <p class="box-text3">This is a website that explores the design structure of each website.</p>
        </div>
      </div>
        
        <div class="head-web">
          <p>WEBSITE</p> 
        </div>
        <div class="brands-list-home">
          <BrandsCard/>
        </div>
    </div>
    
  );
}

export default HomePage;