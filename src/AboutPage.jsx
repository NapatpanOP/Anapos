import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import picture1 from "./assets/picture/pt-7.png";
import picture2 from "./assets/picture/pt-2.jpg";
import iconpeople from "./assets/icon/icon-people.png";
import iconword from "./assets/icon/icon-word.png";
import iconsocial from "./assets/icon/icon-social.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function AboutPage() {

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <div class="full-size-about1">
        <div class="head-about">
          <img class="picture-head" src={picture1} alt="pt-7" />
          <div class="text-head-about">
            <h1>เกี่ยวกับ</h1>
            <h1 class="text-head-about-web">ANAPOS</h1>
          </div>
        </div>
      </div>

      <div class="full-size-about2">
          <div class="box2-about">
            <div class="box2-content-about">
              <p class="head-box2-about">เกี่ยวกับ Anapos</p>
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
            </div>
            <div class="box2-img-about">
              <img src={picture2} alt="pt-2" class="pt-2-about" />
            </div>
          </div>
        </div>

        <div class="full-size-about3">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div class="box3-about">
              <div class="box3-text-about">
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
              <div class="box3-text-about">
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
              <div class="box3-text-about">
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

        <div class="full-size-about4">
          <div class="box4-content-about">
            <p>นักพัฒนา ANAPOS</p>
            <h1>ทีมพัฒนาในการสร้าง ANAPOS</h1>
            <div class="dev-about">
              <div class="dev-profile-about1">

              </div>
              <div class="dev-profile-about2">
                  <div class="">

                  </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default AboutPage;
