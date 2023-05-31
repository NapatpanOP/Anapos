import "./HomePage.css";
import picturRoomGirl from "./assets/Room - Girl Working.png";
import { useAuthContext } from "./core/contexts/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import picture2 from "./assets/picture/pt-2.jpg";
import icontypesweb from "./assets/icon/icon-typeweb.png"
import icongrapg from "./assets/icon/icon-graph.png"
import iconnews from "./assets/icon/icon-news.png"

function HomePage() {
  const { token } = useAuthContext();

  return (
    <div>
      <div className="full-size">
        <div className="box">
          <p className="box-text1">ยินดีต้อนรับสู่</p>
          <div class="box-description1">
            <p className="box-text2">ANALYZES THE POSITION</p>
          </div>
          <div class="box-description2">
            <p className="box-text3">
              เว็บแอปพลิเคชั่นเพื่อรวบรวมข้อมูลการวางตำแหน่งโฆษณาสำหรับเว็บไซต์แต่ละประเภท
              โดยเรานำเว็บไซต์มาจากการจัดอันดับเว็บไซต์ที่มีผู้เข้าชมมากที่สุดอันดับที่
              1 ถึง 3 ในประเภทสื่อให้ความบันเทิง ข่าวสาร และสินค้าไอที
            </p>
          </div>

          <div class="bt-link-home">
            <Link to="#">
              <button
                type="button"
                class="btn btn-outline-warning"
                id="bt-about"
              >
                เกี่ยวกับ
              </button>
            </Link>
            <Link to="#">
              <button
                type="button"
                class="btn btn-outline-warning"
                id="bt-news"
              >
                ข่าวสาร
              </button>
            </Link>
          </div>

          <div class="box-content">
            <div class="box-content1">
              <img src={icontypesweb} alt="icon" class="icon" />
              <h5>ประเภทของเว็บไซต์</h5>
              <p>
                โดยจะแบ่งเว็บไซต์ทั้งหมดเป็นแต่ละประเภทดังนี้ บรรเทิง ข่าวสาร
                และธุรกิจ
              </p>
            </div>
            <div class="box-content2">
              <img src={icongrapg} alt="icon" class="icon" />
              <h5>กราฟ</h5>
              <p>
                แสดงผลต่างๆ ที่ผู้ใช้ได้ทำการเลือกต่างๆโดยหลักแล้วมีในรูปแบบ
                เฉพาะ และภาพรวม
              </p>
            </div>
            <div class="box-content3">
              <img src={iconnews} alt="icon" class="icon" />
              <h5>ข้อเสนอแนะ</h5>
              <p>
                ผู้ใช้สามารถแนะนำเว็บไซต์ต่างๆที่ผู้ใช้สนใจอยากให้นำมาวิเคราะห์ตำแหน่งโฆษณา
              </p>
            </div>
          </div>

          <div class="full-size2">
            <div class="box2">
              <p class="head-box2">เกี่ยวกับ Anapos</p>
              <h4>เว็บไซต์นี้ใช้สำรวจโครงสร้างการออกแบบของแต่ละเว็บไซต์</h4>
              <p>
                เป็นเว็บแอพพลิเคชั่นเพื่อรวบรวมข้อมูลการจัดวางตำแหน่งโฆษณาสำหรับเว็บไซต์แต่ละประเภท
                โดยเรานำเว็บไซต์มาจากการจัดอันดับเว็บไซต์ที่มีผู้เข้าชมมากที่สุดในประเทศไทยซึ่งส่วนมากเป็น
                ประเภทสื่อให้ความบันเทิง ข่าวสาร และธุรกิจ
              </p>
              <p>
                ซึ่งผู้ใช้จะมีส่วนช่วยในการรวบรวมข้อมูลเพื่อหาตำแหน่งการวางโฆษณาจากการเลือกเว็บไซต์ที่ตน
                เข้าใช้งานเป็นประจำและทำการเลือกตำแหน่งโฆษณาที่ตนรู้สึกสะดุดตามากที่สุดซึ่งเว็บไซต์จะทำการแสดงข้อมูลที่ผู้ใช้ทั้งหมดที่เลือกในรูปแบบของกราฟข้อมูลเพื่อให้ผู้ใช้นำข้อมูลไปพัฒนาเว็บไซต์
                หรือนำโฆษณาของตนเองไปติดต่อการวางพื้นที่โฆษณาให้มีประสิทธิภาพดียิ่งขึ้น
              </p>
              <Link to="#">
                <button type="button" class="btn btn-warning" id="bt-more">
                  เพิ่มเติมเกี่ยวกับเรา
                </button>
              </Link>
            </div>
            <img src={picture2} alt="pt-2" class="pt-2" />
          </div>

          <div class="full-size3">
            <div class="pt-3">
              <div class="box3">
                <div class="box3-text1">
                  <h1>71.75 ล้านคน</h1>
                  <p>ประชากรทั้งหมดในไทย</p>
                </div>
                <div class="box3-text2">
                  <h1>61.21 ล้านคน</h1>
                  <p>การใช้อินเทอร์เน็ตในประเทศไทย</p>
                </div>
                <div class="box3-text3">
                  <h1>8 ชั่วโมง 6 นาที</h1>
                  <p>เวลาในการใช้สื่อมัลติมีเดียออนไลน์ของคนไทยใน 1 วัน</p>
                </div>
              </div>
            </div>
            <div class="box4">
              <div class="box4-text">
                <p class="box4-text-head">ข้อมูลข่าวสารจาก</p>
                <h1>Global Digital Stat 2023</h1>
                <p>
                  เป็นรายงาน Digital 2023 Global Overview Report ของ We Are
                  Social โดยจะนำสถิติพฤติกรรมการการเข้า
                  สื่อออนไลน์จากคนทั่วโลกในแต่ละปี
                  ซึ่งทางเราจะเน้นข้อมูลของคนไทยเป็นหลัก
                </p>
              </div>
              <div class="card-container-box4">
                <div class="box4-card1">
                  <h5>การใช้ดิจิตอลไม่ค่อยเติบโต</h5>
                  <p>
                    จำนวนผู้ใช้งานอินเทอร์เน็ตเองเพิ่มขึ้นแค่ 1.9% จากปีก่อน{" "}
                  </p>
                  <Link to="#">
                    <button type="button" class="btn btn-warning" id="bt-readmore">
                      อ่านเพิ่มเติม
                    </button>
                  </Link>
                </div>
                <div class="box4-card2">
                  <h5>ค่าเฉลี่ยอายุคนไทยในปี 2023</h5>
                  <p>คนประเทศไทยปัจจุบันมีอายุโดยเฉลี่ยอยู่ 40.1 ปี</p>
                  <Link to="#">
                    <button type="button" class="btn btn-warning" id="bt-readmore">
                      อ่านเพิ่มเติม
                    </button>
                  </Link>
                </div>
                <div class="box4-card3">
                  <h5>การเข้าถึงอินเทอร์เน็ต</h5>
                  <p>การเข้าใช้อินเทอร์เน็ตของไทยนั้นอยู่ที่ 85.3%</p>
                  <Link to="#">
                    <button type="button" class="btn btn-warning" id="bt-readmore">
                      อ่านเพิ่มเติม
                    </button>
                  </Link>
                </div>
                <div class="box4-card4">
                  <h5>ค่าเฉลี่ยการเข้าอินเทอร์เน็ตผ่านคอมพิวเตอร์จากทั่วโลก</h5>
                  <p>คนไทยออนไลน์ผ่านคอมพิวเตอร์วันละ 3 ชั่วโมง 1 นาที</p>
                  <Link to="#">
                    <button type="button" class="btn btn-warning" id="bt-readmore">
                      อ่านเพิ่มเติม
                    </button>
                  </Link>
                </div>
                <div class="box4-card5">
                  <h5>เว็บไซต์ที่คนไทยเข้าชมมากที่สุด</h5>
                  <p>
                    คนประเทศไทยเข้า Google มากที่สุดเป็นอันดับ 1 ของเว็บทั้งหมด
                  </p>
                  <Link to="#">
                    <button type="button" class="btn btn-warning" id="bt-readmore">
                      อ่านเพิ่มเติม
                    </button>
                  </Link>
                </div>
                <div class="box4-card6">
                  <h5>
                    สัดส่วนการใช้เวลาเล่นอินเทอร์เน็ตระหว่างคอมพิวเตอร์กับมือถือ
                  </h5>
                  <p>
                    เวลาที่ออนไลน์ทั้งหมดเกือบ 2 ใน 3 นั้นเข้าผ่านมือถือเป็นหลัก
                  </p>
                  <Link to="#">
                    <button type="button" class="btn btn-warning" id="bt-readmore">
                      อ่านเพิ่มเติม
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
