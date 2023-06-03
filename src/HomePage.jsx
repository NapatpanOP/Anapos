import "./HomePage.css";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "./core/contexts/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import picture2 from "./assets/picture/pt-2.jpg";
import icontypesweb from "./assets/icon/icon-typeweb.png";
import icongrapg from "./assets/icon/icon-graph.png";
import iconnews from "./assets/icon/icon-news.png";
import iconpeople from "./assets/icon/icon-people.png";
import iconword from "./assets/icon/icon-word.png";
import iconsocial from "./assets/icon/icon-social.png";
import icongroup from "./assets/icon/icon-group.png";
import iconaverage from "./assets/icon/icon-average.png";
import iconnumone from "./assets/icon/icon-num1.png";
import iconphone from "./assets/icon/icon-phone.png";
import iconnumtwo from "./assets/icon/icon-num2.png";
import iconnumthree from "./assets/icon/icon-num3.png";
import SignupHomePage from "./components/Signup-Homepage/SignupHomePage";
import Footer from "./components/Footer/Footer";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function HomePage() {
  const { token } = useAuthContext();

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <div className="content">
        <div className="full-size">
          <div class="box">
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
              แสดงผลต่างๆ ที่ผู้ใช้ได้ทำการเลือกต่างๆโดยหลักแล้วมีในรูปแบบ เฉพาะ
              และภาพรวม
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
      </div>

      <div class="full-size2">
        <div class="box2">
          <div class="box2-content">
            <p class="head-box">เกี่ยวกับ Anapos</p>
            <h3>เว็บไซต์นี้ใช้สำรวจโครงสร้างการออกแบบของแต่ละเว็บไซต์</h3>
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
          <div class="box2-img">
            <img src={picture2} alt="pt-2" class="pt-2" />
          </div>
        </div>
      </div>

      <div class="full-size3">
        <div class="pt-3">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div class="box3">
              <div class="box3-text">
                <img src={iconpeople} alt="icon" class="icon" />
                <h1>
                  {counterOn && (
                    <CountUp start={0} end="71" duration={2} delay={0} />
                  )}
                  .
                  {counterOn && (
                    <CountUp start={0} end="75" duration={2} delay={0} />
                  )}
                  &nbsp; ล้านคน
                </h1>
                <p>ประชากรทั้งหมดในไทย</p>
              </div>
              <div class="box3-text">
                <img src={iconword} alt="icon" class="icon" />
                <h1>
                  {counterOn && (
                    <CountUp start={0} end="61" duration={2} delay={0} />
                  )}
                  .
                  {counterOn && (
                    <CountUp start={0} end="21" duration={2} delay={0} />
                  )}
                  &nbsp; ล้านคน
                </h1>
                <p>การใช้อินเทอร์เน็ตในประเทศไทย</p>
              </div>
              <div class="box3-text">
                <img src={iconsocial} alt="icon" class="icon" />
                <h1>
                  {counterOn && (
                    <CountUp start={0} end="8" duration={3} delay={0} />
                  )}
                  &nbsp; ชั่วโมง &nbsp;
                  {counterOn && (
                    <CountUp start={0} end="6" duration={4} delay={0} />
                  )}
                  &nbsp; นาที
                </h1>
                <p>เวลาในการใช้สื่อมัลติมีเดียออนไลน์ของคนไทยใน 1 วัน</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        <div class="box4">
          <div class="box4-text">
            <p class="head-box">ข้อมูลข่าวสารจาก</p>
            <h1>Global Digital Stat 2023</h1>
            <p>
              เป็นรายงาน Digital 2023 Global Overview Report ของ We Are Social
              โดยจะนำสถิติพฤติกรรมการการเข้า สื่อออนไลน์จากคนทั่วโลกในแต่ละปี
              ซึ่งทางเราจะเน้นข้อมูลของคนไทยเป็นหลัก
            </p>
          </div>
          <div class="card-container-box4">
            <div class="box4-card1">
              <img src={icongroup} alt="icon" class="icon" />
              <h5>การใช้ดิจิตอลไม่ค่อยเติบโต</h5>
              <p>จำนวนผู้ใช้งานอินเทอร์เน็ตเองเพิ่มขึ้นแค่ 1.9% จากปีก่อน </p>
              <Link to="#">
                <button type="button" class="btn btn-warning" id="bt-readmore">
                  อ่านเพิ่มเติม
                </button>
              </Link>
            </div>
            <div class="box4-card2">
              <img src={iconaverage} alt="icon" class="icon" />
              <h5>ค่าเฉลี่ยอายุคนไทยในปี 2023</h5>
              <p>คนประเทศไทยปัจจุบันมีอายุโดยเฉลี่ยอยู่ 40.1 ปี</p>
              <Link to="#">
                <button type="button" class="btn btn-warning" id="bt-readmore">
                  อ่านเพิ่มเติม
                </button>
              </Link>
            </div>
            <div class="box4-card3">
              <img src={iconword} alt="icon" class="icon" />
              <h5>การเข้าถึงอินเทอร์เน็ต</h5>
              <p>การเข้าใช้อินเทอร์เน็ตของไทยนั้นอยู่ที่ 85.3%</p>
              <Link to="#">
                <button type="button" class="btn btn-warning" id="bt-readmore">
                  อ่านเพิ่มเติม
                </button>
              </Link>
            </div>
            <div class="box4-card4">
              <img src={iconsocial} alt="icon" class="icon" />
              <h5>ค่าเฉลี่ยการเข้าอินเทอร์เน็ตผ่านคอมพิวเตอร์จากทั่วโลก</h5>
              <p>คนไทยออนไลน์ผ่านคอมพิวเตอร์วันละ 3 ชั่วโมง 1 นาที</p>
              <Link to="#">
                <button type="button" class="btn btn-warning" id="bt-readmore">
                  อ่านเพิ่มเติม
                </button>
              </Link>
            </div>
            <div class="box4-card5">
              <img src={iconnumone} alt="icon" class="icon" />
              <h5>เว็บไซต์ที่คนไทยเข้าชมมากที่สุด</h5>
              <p>คนประเทศไทยเข้า Google มากที่สุดเป็นอันดับ 1 ของเว็บทั้งหมด</p>
              <Link to="#">
                <button type="button" class="btn btn-warning" id="bt-readmore">
                  อ่านเพิ่มเติม
                </button>
              </Link>
            </div>
            <div class="box4-card6">
              <img src={iconphone} alt="icon" class="icon" />
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

      <div class="full-size5">
        <div class="box5">
          <h2 class="text-head-box5 head-box5">
            เว็บไซต์ต่างๆทีนำมาวิเคราะห์ใน
          </h2>
          <h2 class="text-head-box5 head-box5-brand">ANAPOS</h2>
          <p>
            เว็บไซต์ที่ Anapos นำมานั้นส่วนใหญ่จะมาจากสถิติของ WE ARE SOCIAL
            โดยจะนำเว็บไซต์ที่คนไทยนั้นเข้าชมมากที่สุดในปี 2022
            มาแบ่งเป็นประเภทต่างๆ
          </p>
          <Link to="#">
            <button type="button" class="btn btn-warning" id="bt-more2">
              ข้อมูลเว็บไซต์เว็บไซต์เพิ่มเติม
            </button>
          </Link>
          <p class="name-brand-box5">
            YOUTUBE VIU TRUEID THAIRATH DAILYNEWS SANOOK BANANAIT ADVICE JIB
          </p>
        </div>
      </div>

      <div class="full-size6">
        <div class="box6">
          <p class="head-box">ประเภทของเว็บไซต์</p>
          <h2>แบ่งประเภทของแต่ละเว็บไซต์</h2>
          <p>เว็บไซต์ใน ANAPOS แบ่งได้เป็น 3 ประเภทดังนี้</p>

          <div class="card-container-box6">
            <div class="box6-card">
              <h3 class="text-brand-box6">YOUTUBE</h3>
              <p class="text-box6">ประเภท: บันเทิง</p>
              <div class="box6-vote">
                <p>คลิกเพื่อโหวต</p>
              </div>
            </div>
            <div class="box6-card">
              <h3 class="text-brand-box6">SANOOK</h3>
              <p class="text-box6">ประเภท: ข่าวสาร</p>
              <div class="box6-vote">
                <p>คลิกเพื่อโหวต</p>
              </div>
            </div>
            <div class="box6-card">
              <h3 class="text-brand-box6">ADVICE</h3>
              <p class="text-box6">ประเภท: ธุระกิจ</p>
              <div class="box6-vote">
                <p>คลิกเพื่อโหวต</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="full-size7">
        <div class="box7-content">
          <div class="box7-content-signup">
            <SignupHomePage />
          </div>
          <div class="box7-content-howto">
            <p class="head-box">สมัครสมาชิก</p>
            <h2>ขั้นตอนการสมัครสมาชิก</h2>
            <p>
              ในการสมัครสมาชิกนั้นทาง Anapos
              จะขออนุญาตเก็บบันทึกข้อมูลของผู้ใช้งานเพื่อนำไปปรับใช้ในการแก้ไขเว็บไซต์ต่อไปให้ดียิ่งขึ้น
              หากผู้ใช้สมัครแล้วจะสามารถดูข้อมูลดังต่อไปนี้ได้
            </p>
            <div class="box7-step">
              <img src={iconnumone} alt="icon" class="icon" />
              <div class="box7-step-content">
                <p class="box7-head-step">ตำแหน่งโฆษณา</p>
                <p>สามารถเข้าและเลือกดูโฆษณาของตำแหน่งต่างๆได้</p>
              </div>
            </div>
            <div class="box7-step">
              <img src={iconnumtwo} alt="icon" class="icon" />
              <div class="box7-step-content">
                <p class="box7-head-step">กราฟ</p>
                <p>สามารถเข้าไปดูผลลัพธ์ได้โดยละเอียด</p>
              </div>
            </div>
            <div class="box7-step">
              <img src={iconnumthree} alt="icon" class="icon" />
              <div class="box7-step-content">
                <p class="box7-head-step">ข้อเสนอแนะ</p>
                <p>
                  สามารถเข้าไปกรอกรายละเอียดเว็บไซต์ที่สนใจเพื่อให้ทาง ANAPOS
                  นำไปวิเคราะห์
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
