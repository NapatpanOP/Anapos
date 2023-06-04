import React, { useState, useEffect, Fragment } from "react";
import "./TypesWebPage.css";
import BrandsCard from "./components/BrandsCard/BrandsCard";
import Footer from "./components/Footer/Footer";
import picture1 from "./assets/picture/pt-8.jpg";

const TypesWeb = () => {
  return (
    <div>
      <div class="full-size-type">
        <div class="head-type">
          <img class="picture-head-type" src={picture1} alt="pt-8" />
          <div class="text-head-type">
            <h1>ประเภทเว็บไซต์</h1>
          </div>
        </div>
      </div>

      <div class="box1-text-type">
        <p class="head-box-type">ประเภทเว็บไซต์</p>
        <h1>เว็บไซต์ต่างๆ ที่นำมาวิเคราะห์</h1>
        <p>
        เว็บไซต์ที่ Anapos นำมานั้นส่วนใหญ่จะมาจากเว็บไซต์คนไทยเข้าชมมากที่สุดในปี 2022 แล้วมาแบ่งเป็นประเภทต่างๆ
        โดยแบ่งได้ 3 ประเภทด้วยกัน ได้แก่ บรรเทิง ข่าวสาร และธุรกิจ
        สามารถเลือกเว็บไซต์ที่สนใจหรือใช้บ่อยและกดเลือกตำแหน่งของโฆษณาที่ชื่นชอบได้เลย
        </p>
      </div>

      <Fragment>
        <BrandsCard filter={true} />
      </Fragment>

      <Footer />
    </div>
  );
};

export default TypesWeb;
