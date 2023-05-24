import "./HomePage.css"
import picturRoomGirl from "./assets/Room - Girl Working.png";
import { useAuthContext } from "./core/contexts/AuthProvider";

function HomePage() {
  const { token } = useAuthContext()
  
  return (
    <div>
      <div className="full-size">
        <div className="box">
          <p className="box-text1">This is a website that explores the design structure of each website.</p>
          <div class="box-description">
            <p className="box-text2">
          เว็บแอปพลิเคชั่นเพื่อรวบรวมข้อมูลการวางตำแหน่งโฆษณาสำหรับเว็บไซต์แต่ละประเภท 
          โดยเรานำเว็บไซต์มาจากการจัดอันดับเว็บไซต์ที่มีผู้เข้าชมมากที่สุดอันดับที่ 1 ถึง 3 ในประเภทสื่อให้ความบันเทิง ข่าวสาร และสินค้าไอที ซึ่งผู้ใช้จะมีส่วนช่วยในการรวบรวมข้อมูลเพื่อหาตำแหน่งการวางโฆษณาจากการเลือกเว็บไซต์ที่ตนเข้าใช้งานเป็นประจำและทำการเลือกตำแหน่งโฆษณาที่ตนรู้สึกสะดุดตามากที่สุด เว็บไซต์จะทำการแสดงข้อมูลที่ผู้ใช้ทั้งหมดเลือกในรูปแบบของกราฟข้อมูล เพื่อให้ผู้ใช้นำข้อมูลไปพัฒนาเว็บไซต์ของตนให้ดียิ่งขึ้น
          </p>
          </div> 
          <button type="button" class="btn btn-success" id="bt-start">Get Started</button>
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