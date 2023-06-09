import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BrandAPI } from "../apis/brandAPI";
import "./SelectPositionPage.css";
import { UserAPI } from "../apis/userAPI";
import { useAuthContext } from "../core/contexts/AuthProvider";
import { baseImageUrl } from "../core/store/localVariable";
import picture1 from "../assets/picture/pt-10.jpg";

import Footer from "../components/Footer/Footer";

import YoutubePosition from "../components/Position/YouTubePosition/YoutubePosition";
import ViuPosition from "../components/Position/ViuPosition/ViuPosition";
import TrueIDPosition from "../components/Position/TrueIDPosition/TrueIDPosition";
import SanookPosition from "../components/Position/SanookPosition/SanookPosition";
import DailynewsPosition from "../components/Position/DailynewsPosition/DailynewsPosition";
import ThaiRathPosition from "../components/Position/ThaiRathPosition/ThaiRathPosition";
import BananaPosition from "../components/Position/BananaPosition/BananaPosition";
import JibPosition from "../components/Position/JibPosition/JibPosition";
import AdvicePosition from "../components/Position/AdvicePosition/AdvicePosition";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/modal'

function SelectPositionPage() {
  const { token, loadingAction } = useAuthContext();
  const [show, setShow] = useState(false);
  const [idState, setId] = useState("");

  const [currentPositionIndex, setCurrentPositionIndex] = useState();
  const [selectPosition, setSelectPosition] = useState();

  const handleClose = () => setShow(false);

  // var selectId = "";
  const onClickGraphicHandle = (position) => {
    // console.log(id);
    // selectId = id;
    setSelectPosition(position);
    setShow(true);
  };

  const [brand, setBrand] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const confirmHandle = () => {
    setShow(false);
    navigate("/select-graphics-position", {
      state: { id: brand._id, position: selectPosition },
    });
  };

  useEffect(() => {
    const setup = () => {
      if (location.state) {
        setId(location.state.id);
        loadingAction.onLoading(true);
        BrandAPI.getById(location.state.id).then((res) => {
          setBrand(res);
          UserAPI.getById(token._id).then((resUser) => {
            const userBrandSelected = resUser.ads_poitions_selected.find(
              ({ brand_id }) => brand_id === res._id
            );
            setCurrentPositionIndex(
              userBrandSelected?.ad_index_position ?? null
            );
            loadingAction.onLoading(false);
          });
        });
      } else {
        navigate("/");
      }
    };

    setup();
  }, []);
  const renderButtonList = () => {
    if (brand) {
      return brand.adsPositions.map((img, index) => {
        return (
          <button
            onClick={() => onClickGraphicHandle(index)}
            type="button"
            key={index}
            className={`btn ${
              currentPositionIndex == index ? "btn-dark" : "btn-outline-dark"
            }`}
          >
            POSITION {index + 1}
          </button>
        );
      });
    } else {
      return;
    }
  };

  const renderSelectPage = () => {
    if (brand != null) {
      switch (brand.title) {
        case "Youtube":
          return (
            <YoutubePosition
              selectPosHandle={(index) => onClickGraphicHandle(index)}
              currentPositionIndex={currentPositionIndex}
            />
          );
        case "Viu":
          return (
            <ViuPosition
              selectPosHandle={(index) => onClickGraphicHandle(index)}
              currentPositionIndex={currentPositionIndex}
            />
          );
        case "TrueID":
          return (
            <TrueIDPosition
              selectPosHandle={(index) => onClickGraphicHandle(index)}
              currentPositionIndex={currentPositionIndex}
            />
          );
        case "Sanook":
          return (
            <SanookPosition
              selectPosHandle={(index) => onClickGraphicHandle(index)}
              currentPositionIndex={currentPositionIndex}
            />
          );
        case "Dailynews":
          return (
            <DailynewsPosition
              selectPosHandle={(index) => onClickGraphicHandle(index)}
              currentPositionIndex={currentPositionIndex}
            />
          );
        case "ThaiRath":
          return (
            <ThaiRathPosition
              selectPosHandle={(index) => onClickGraphicHandle(index)}
              currentPositionIndex={currentPositionIndex}
            />
          );
        case "Banana":
          return (
            <BananaPosition
              selectPosHandle={(index) => onClickGraphicHandle(index)}
              currentPositionIndex={currentPositionIndex}
            />
          );
        case "Jib":
          return (
            <JibPosition
              selectPosHandle={(index) => onClickGraphicHandle(index)}
              currentPositionIndex={currentPositionIndex}
            />
          );
        case "Advice":
          return (
            <AdvicePosition
              selectPosHandle={(index) => onClickGraphicHandle(index)}
              currentPositionIndex={currentPositionIndex}
            />
          );
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      <div class="full-size-select-position">
        <div class="head-select-position">
          <img
            class="picture-head-select-position"
            src={picture1}
            alt="pt-10"
          />
          <div class="text-head-select-position">
            <h1>ประเภทเว็บไซต์</h1>
            <h1 class="text-head-position-web">{brand?.type}</h1>
          </div>
        </div>
      </div>

      <div class="box-text-position-head">
        <div class="box-text-position1">
          <img
            src={baseImageUrl + brand?.web_image ?? ""}
            class="web-img-position"
            data-bs-toggle="modal"
            data-bs-target="#imageExample"
          />

          <div className="modal fade" id="imageExample" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        <img src={baseImageUrl + brand?.fullweb_image ?? ""} className="d-block w-100"/>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div class="box-text-position2">
          <p class="box-head-text-position">ประเภทเว็บไซต์ {brand?.type}</p>
          <h2>{brand?.title}</h2>
          <p>
            ส่วนนี้แสดงตำแหน่งโฆษณาต่างๆ ในเว็บไซต์นั้นๆ
            โดยรูปภาพทางด้านซ้ายนั้นเป็นตัวอย่าง บางส่วนของเว็บไซต์
            เพื่อให้ผู้ใช้เข้าใจว่าตำแหน่งไหนนำมาวิเคราะห์
            ซึ่งจะมีกรอบสีเหลืองขอบ ไว้แสดงถึงตำแหน่ง
            หากสนใจตำแหน่งไหนให้คลิกเลือกด้านล่างนี้ได้เลย โดยตำแหน่งการ
            จัดวางนั้นได้นำมาในวันที่ 1 มิถุนายน 2566
          </p>
        </div>
      </div>

      <div class="box-text-position-example">
        <p class="box-head-text-position">เลือกตำแหน่งโฆษณา</p>
        <h3>ตำแหน่งของโฆษณาที่นำมาวิเคราะห์</h3>
      </div>

      {renderSelectPage()}

      {/* <img
        src={baseImageUrl + brand?.full_image ?? ""}
        alt="position"
        className="position"
      />

      <div className="bt-position">{renderButtonList()}</div> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ยืนยันการเลือกตำแหน่ง</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          คุณยืนยันที่จะเลือกตำแหน่งนี้ใช่หรือไม่? กดถัดไปเพื่อยืนยัน
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            class="btn btn-success"
            id="bt-close"
            onClick={handleClose}
          >
            ยกเลิก
          </Button>
          <Button
            variant="primary"
            class="btn btn-success"
            id="bt-next"
            onClick={() => confirmHandle()}
          >
            ถัดไป
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
}

export default SelectPositionPage;
