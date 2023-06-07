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
    console.log(position)
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
      console.log(location.state);
      if (location.state) {
        setId(location.state.id);
        loadingAction.onLoading(true);
        BrandAPI.getById(location.state.id).then((res) => {
          console.log(res);
          setBrand(res);
          UserAPI.getById(token._id).then((resUser) => {
            const userBrandSelected = resUser.ads_poitions_selected.find(
              ({ brand_id }) => brand_id === res._id
            );
            console.log(userBrandSelected);
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
    console.log("test ", brand);
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
    if(brand != null) {
      console.log(brand.title)
      switch (brand.title) {
        case "Youtube":
          return <YoutubePosition selectPosHandle={(index) => onClickGraphicHandle(index)}/>
        case "Viu":
        case "TrueID":
        case "Sanook":
        case "Dailynews":
        case "ThaiRath":
        case"Banana":
        case "Jib":
        case "Advice":
          break
        default:
          break;
      }
    }
  }

  return (
    <div>
      <div class="full-size-select-position">
        <div class="head-select-position">
          <img class="picture-head-select-position" src={picture1} alt="pt-10" />
          <div class="text-head-select-position">
            <h1>ประเภทเว็บไซต์</h1>
            <h1 class="text-head-position-web">{brand?.type}</h1>
          </div>
        </div>
      </div>

      <div class="box-text-position">
        <p class="box-head-text-position">ประเภทเว็บไซต์ {brand?.type}</p>
        <h2>{brand?.title}</h2>
        <p>ส่วนนี้แสดงตำแหน่งโฆษณาต่างๆ ในเว็บไซต์นั้นๆ หากสนใจตำแหน่งไหนให้คลิกเลือกด้านล่างนี้ได้เลย โดยตำแหน่งการจัดวางนั้นได้นำมาในวันที่ 1 พฤษภาคม 2566</p>
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
          <Modal.Title>Position selection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          If sure to select this position, press Save and press Next.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            class="btn btn-success"
            id="bt-close"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            class="btn btn-success"
            id="bt-next"
            onClick={() => confirmHandle()}
          >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer/>
    </div>
  );
}

export default SelectPositionPage;
