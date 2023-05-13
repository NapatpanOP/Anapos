import "./HomePage.css"
import BrandsCard from "./components/BrandsCard/BrandsCard";
import picturRoomGirl from "./assets/Room - Girl Working.png";
import { useNavigate } from "react-router";

function HomePage() {
  const nevigate = useNavigate()
  const click = () => {
    nevigate("/select-graphics-position", {state:{id: '645fc254f502bd7a851337d5', position: 0}})
}
  return (
    <div>
      <div class="full-size">
        <div class="box">
          <p class="box-text1">Welcome to ...</p>
          <p class="box-text2">OKIOKI</p>
          <p class="box-text3">This is a website that explores the design structure of each website.</p>
        </div>
        <img src={picturRoomGirl} alt="Image" class="picture-roomGirl"/>
      </div>
        
        <div class="head-web">
          <p>WEBSITE</p> 
    <button onClick={() => click()}>test</button>
        </div>
        
        <div class="brands-list-home">
          <BrandsCard/>
        </div>
    </div>
    
  );
}

export default HomePage;