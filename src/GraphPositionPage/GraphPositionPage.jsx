import React, { useEffect, useState } from "react";
import "./GraphPositionPage.css";
import BarChart from "../components/BarChart/BarChart";
import { useLocation } from "react-router";
import { baseImageUrl } from "../core/store/localVariable";
import picture1 from "../assets/picture/pt-11.jpg";
import Footer from "../components/Footer/Footer";

function GraphPosition() {
  const [pageGraph, setGraph] = useState(0);
  const [mode, setMode] = useState("position");
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const location = useLocation();
  const [brandData, setBrandData] = useState({});
  const renderFilter = () => {
    if (mode == "graphic") {
      return (
        <div className="select-graphPage-position">
          <p>เลือกตำแหน่งที่ต้องการได้ที่นี่</p>
          <select
            id="pageGraph"
            value={pageGraph}
            onChange={(e) => setGraph(parseInt(e.target.value))}
          >
            {brandData?.adsPositions?.map((_, index) => (
              <option key={index} value={index}>
                ตำแหน่งที่ {index + 1}
              </option>
            ))}
          </select>
        </div>
      );
    }
  };

  const renderrBoxContent = () => {
    if (mode == "position") {
      return (
        <div className="full-box-content-graph1">
          <div className="full-box-graph-img">
            <img
              src={baseImageUrl + brandData?.full_image}
              alt="position-photo"
              className="position-photo-gp"
            />
          </div>

          <div className="full-box-graph-barchart">
            <div className="bar-chart">
              <BarChart chartData={chartData} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="full-box-content-graph2">
          {renderFilter()}
          <div className="full-box-content-graph2-1">
            <div className="left-contain">
              {brandData?.adsPositions[pageGraph]?.images_urls.map(
                (image, index) => {
                  return (
                    <img
                      key={index}
                      src={baseImageUrl + image.images_url}
                      alt="position-photo"
                      className="graphics-photo"
                    />
                  );
                }
              )}
            </div>
            <div className="full-box-graph-barchart">
              <div className="bar-chart">
                <BarChart
                  chartData={{
                    labels: brandData?.adsPositions[pageGraph]?.images_urls.map(
                      (_, index) => `BANNER ${index + 1}`
                    ),
                    datasets: [
                      {
                        label: `POSITION ${pageGraph + 1}`,
                        data: brandData?.adsPositions[
                          pageGraph
                        ]?.images_urls.map((item) => item.selected_counts),
                        backgroundColor: [
                          "#F1F7B5",
                          "#FD8A8A",
                          "#88D7B5",
                          "#00ADB5",
                          "#61A48D",
                          "#9EA1D4",
                          "#FF5858",
                          "#7371D9",
                          "#D071D9",
                        ],
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    if (location.state) {
      setBrandData(location.state.brand);
      setChartData({
        labels: location.state.brand?.adsPositions.map(
          (_, index) => `POSITION ${index + 1}`
        ),
        datasets: [
          {
            label: location.state.brand?.title,
            data: location.state.brand?.adsPositions.map(
              (item) => item.selected_counts
            ),
            backgroundColor: [
              "#FF5858",
              "#88D7B5",
              "#FD8A8A",
              "#F1F7B5",
              "#00ADB5",
              "#61A48D",
              "#9EA1D4",
              "#7371D9",
              "#D071D9",
            ],
          },
        ],
      });
    }
  }, [brandData]);

  const textDescription = () => {
    if (mode == "position") {
      return (
        <div>
          <div class="box1-text-type">
            <p class="head-box-type">ประเภทเว็บไซต์ {brandData?.type}</p>
            <h1>{brandData?.title}</h1>
            <p>แสดงข้อมูลการเลือกตำแหน่งโฆษณาแบบภาพรวมของผู้ใช้งาน</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div class="box1-text-type">
            <p class="head-box-type">ประเภทเว็บไซต์ {brandData?.type}</p>
            <h1>{brandData?.title}</h1>
            <p>
              แสดงข้อมูลการเลือกตำแหน่งโฆษณาแบบเฉพาะเจาะจงตำแหน่ง
              เพื่อดูว่ากราฟิกแบบใดมีผู้ใช้เลือกบ้างและมีจำนวนเท่าไร
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div class="full-size-graph1">
        <div class="head-graph">
          <img class="picture-head-graph" src={picture1} alt="pt-7" />
          <div class="text-head-graph">
            <h1>กราฟข้อมูล</h1>
            <h1 class="text-head-graph-web">{brandData?.title}</h1>
          </div>
          <p class="text-dis-graph-position">
            ข้อมูลที่มาแสดงผลมาจากการที่ผู้ใช้ได้เข้ามาเลือกตำแหน่งของโฆษณาบนเว็บไซต์{" "}
            {brandData?.title} ที่อยู่ใน ANAPOS ซึ่งสามารถแบ่งดูข้อมูลได้โดยมี
            การเลือกดูภาพรวมตำแหน่งโฆษณา และ
            การเลือกดูเฉพาะตำแหน่งโฆษณาเพื่อเลือกดูกราฟิก
          </p>
        </div>
      </div>

      <div class="box-content-graph-position">

        {textDescription()}

        <div className="bt-graph">
          <button
            type="button"
            onClick={() => setMode("position")}
            className={`btn ${
              mode == "position" ? "bt-position-gp-at" : "bt-position-gp"
            }`}
          >
            ภาพรวม
          </button>
          <button
            type="button"
            onClick={() => setMode("graphic")}
            className={`btn ${
              mode == "graphic" ? "bt-position-gp-at" : "bt-position-gp"
            }`}
          >
            เจาะจงตำแหน่ง
          </button>
        </div>

        {/* {renderFilter()} */}

        {renderrBoxContent()}

        <Footer />
      </div>
    </div>
  );
}

export default GraphPosition;
