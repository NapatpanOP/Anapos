import React, { useEffect, useState } from "react";
import "./GraphPage.css";
import { useAuthContext } from "./core/contexts/AuthProvider";
import { useNavigate } from "react-router";
import BarAllLike from "./components/BarChart/BarAllLike";
import BarMaleLike from "./components/BarChart/BarMaleLike";
import BarFemaleLike from "./components/BarChart/BarFemaleLike";
import BarOtherLike from "./components/BarChart/BarOtherLike";
import BarTypePortalLike from "./components/BarChart/BarTypePortalLike";
import BarTypeNewLike from "./components/BarChart/BarTypeNewLike";
import BarTypeBusinessLike from "./components/BarChart/BarTypeBusinessLike";
import { BrandAPI } from "./apis/brandAPI";
import { UserAPI, testLoading } from "./apis/userAPI";
// import { data } from'./components/data.json'
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { baseImageUrl } from "./core/store/localVariable";

import Footer from "./components/Footer/Footer";
import picture1 from "./assets/picture/pt-11.jpg";
import iconsearch from "./assets/icon/icon-search.png";
import iconoverview from "./assets/icon/icon-overview.png";
import icontypeweb from "./assets/icon/icon-typeweb.png";
import iconsex from "./assets/icon/icon-sex.png"

function PageGraph() {
  const { token, loadingAction } = useAuthContext();
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState([]);
  const [brands, setBrands] = useState([]);

  if (!token) {
    navigate("/login");
  }

  const [viewGraph, setGraph] = useState("overview");
  const [mode, setMode] = useState("specific");

  useEffect(() => {
    const setup = () => {
      loadingAction.onLoading(true);
      BrandAPI.getAll().then((res) => {
        setBrands(res);
        UserAPI.getAll().then((resUser) => {
          setAllUser(resUser);
          loadingAction.onLoading(false);
        });
      });
    };

    setup();
  }, []);

  const onSelectBrandHandle = (brand) => {
    navigate("/graphposition", { state: { brand: brand } });
  };

  const handleFilter = (key) => {
    setMode(key);
  };

  const renderFilterOverview = () => {
    if (mode == "overview") {
      return (
        <div className="graphPage">
          <div class="box-bt-gp">
            <button
              className={`bt-gp btn ${
                mode === "overview" ? "bt-gp-at" : "bt-gp"
              }`}
              onClick={() => handleFilter("overview")}
            >
              <img src={iconoverview} alt="icon" class="icon-gp" />
            </button>
            <div class="text-bt-gp">
              <h5>ภาพรวมทั้งหมด</h5>
              <p>
                แสดงภาพรวมทั้งหมดของเว็บไซต์ใน ANAPOS
                โดยจะแสดงผลจากการเข้าไปโหวตของผู้ใช้
              </p>
            </div>
          </div>

          <div class="box-bt-gp">
            <button className={`bt-gp btn ${
                mode === "type" ? "bt-gp-at" : "bt-gp"
              }`}
              onClick={() => handleFilter("type")}>
              <img src={icontypeweb} alt="icon" class="icon-gp" />
            </button>
            <div class="text-bt-gp">
              <h5>ประเภทของเว็บไซต์</h5>
              <p>
              แสดงผลของมูลแต่ละประเภทโดยรายละเอียด
              แบ่งตามแต่ละประเภทต่างๆ
              </p>
            </div>
          </div>

          <div class="box-bt-gp">
            <button className={`bt-gp btn ${
                mode === "sex" ? "bt-gp-at" : "bt-gp"
              }`}
              onClick={() => handleFilter("sex")}>
              <img src={iconsex} alt="icon" class="icon-gp" />
            </button>
            <div class="text-bt-gp">
              <h5>เพศ</h5>
              <p>
              จะแสดงข้อมูลการเลือกจากผู้ใช้โดยจะแบ่งเป็นแต่ละเพศที่เข้าไปเลือกเว็บเว็บต่างๆ
              </p>
            </div>
          </div>
          {/* <select
            id="viewGraph"
            value={viewGraph}
            onChange={(e) => setGraph(e.target.value)}
          >
            <option key={"overview"} value="overview">
              OVERVIEW
            </option>
            <option key={"type"} value="type">
              TYPE
            </option>
            <option key={"sex"} value="sex">
              SEX
            </option>
          </select> */}
        </div>
      );
    }
  };

  // const textDescription = () => {
  //   if (mode ==  'overview') {
  //     return <div>
  //       <p className='text-description'>Displays aggregated data from the user's selection of ad placements on the website page. The data is broken down into Show Overview, Show By Site Type, and Show By User Gender.</p>
  //     </div>

  //   }
  // }

  const renderOverviewGraph = () => {
    switch (viewGraph) {
      case "overview":
        return <BarAllLike data={brands} />;
      case "type":
        return (
          <div className="filter-type">
            <BarTypePortalLike data={brands} />

            <BarTypeNewLike data={brands} />

            <BarTypeBusinessLike data={brands} />
          </div>
        );
      case "sex":
        return (
          <>
            <BarMaleLike data={brands} allUser={allUser} />

            <BarFemaleLike data={brands} allUser={allUser} />

            <BarOtherLike data={brands} allUser={allUser} />
          </>
        );
      default:
        break;
    }
  };

  const renderPageContent = () => {
    switch (mode) {
      case "specific":
        return (
          <div>
            <div class="box1-text-graph">
              <p class="head-box-graph">เฉพาะเจาะจง</p>
              <h1>เว็บไซต์ต่างๆใน ANAPOS</h1>
              <p>
                ในส่วนนี้จะแสดงข้อมูลต่างๆโดยแบ่งเป็นเป็นเฉพาะเจาะจงในการโหวตของผู้มาโหวตเว็บนั้นๆ
                ซึ่งจะแสดงผลกราฟที่แยกออกจากกันนำแนกเป็น 2 กลุ่มย่อยๆได้
                ตำแหน่งโฆษณา และการออกแบบโฆษณาบนเว็บไซต์
              </p>
            </div>
            <div className="card-graph">
              <div className="card-grid">
                {brands.map((item, index) => (
                  <div className="card-container-graph" key={index}>
                    <div
                      onClick={() => onSelectBrandHandle(item)}
                      className="product-card"
                    >
                      <h1 class="head-name-brand">{item.title}</h1>
                      <p class="text-name-type">ประเภท: {item.type}</p>
                      <div class="box-view-vote">
                        <p>คลิกเพื่อดูผลโหวต</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "overview":
        return (
          <div>
            <div class="box1-text-graph">
              <p class="head-box-graph">ภาพรวมทั้งหมด</p>
              <h1>เว็บไซต์ต่างๆใน ANAPOS</h1>
              <p>
                ในส่วนนี้จะแสดงข้อมูลเว็บไซต์ทั้งหมดใน ANAPOS
                เป็นรูปแบบของภาพรวม โดยจะโชว์ผลเป็นรูปแบบกราฟ ซึ่งแบ่งได้ดังนี้
                การแสดงผลภาพรวมของการโหวตทั้งหมดว่าเว็บในมีการเข้าโหวตมากที่สุด
                เพศ และ ประเภทของเว็บ
              </p>
            </div>
            {/* {renderOverviewGraph()} */}
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div>
      {/* <p className="text-head">Graph</p>
      {textDescription()} */}
      <div class="full-size-graph1">
        <div class="head-graph">
          <img class="picture-head-graph" src={picture1} alt="pt-7" />
          <div class="text-head-graph">
            <h1>ประเภท</h1>
            <h1 class="text-head-graph-web">กราฟ</h1>
          </div>
          <p class="text-dis-graph">
            ข้อมูลที่มาแสดงผลมาจากการที่ผู้ใช้ได้เข้ามาเลือกตำแหน่งของโฆษณาบนเว็บไซต์ต่างๆที่อยู่ใน
            aNAPOS ซึ่งข้อมูลต่างๆนั้น จะแบ่งได้ 2 ประเภทหลัก ได้แก่ เฉพาะเจาะจง
            กับ ภาพรวมทั้งหมด
          </p>
        </div>
      </div>

      <div className="bt-graph-home">
        {/* <button type="button" onClick={() => setMode('specific')} className={`btn ${mode == 'specific' ? 'btn-dark' : 'btn-outline-dark'}`}>
          SPECIFIC
        </button>
        <button type="button" onClick={() => setMode('overview')} className={`btn ${mode == 'overview' ? 'btn-dark' : 'btn-outline-dark'}`}>
          OVERVIEW
        </button> */}
        <div
          class="bt-specific"
          onClick={() => setMode("specific")}
          className={`btn ${
            mode == "specific" ? "bt-specific-at" : "bt-specific"
          }`}
        >
          <img src={iconsearch} alt="icon" class="icon" />
          <h4>เฉพาะเจาะจง</h4>
          <p>
            ข้อมูลที่โชว์จะมีในเรื่องของ ตำแหน่งโฆษณา และ
            การออกแบบจากเว็บไซต์ต่างๆ
          </p>
        </div>
        <div
          class="bt-overview"
          onClick={() => setMode("overview")}
          className={`btn ${
            mode == "overview" ? "bt-overview-at" : "bt-overview"
          }`}
        >
          <img src={iconoverview} alt="icon" class="icon" />
          <h4>ภาพรวมทั้งหมด</h4>
          <p>ข้อมูลส่วนนี้จะโชว์เรื่องของ ภาพรวมทั้งหมด เพศและประเภทของเว็บ</p>
        </div>
      </div>

      {renderPageContent()}

      {renderFilterOverview()}

      <Footer />
    </div>
  );
}

export default PageGraph;
