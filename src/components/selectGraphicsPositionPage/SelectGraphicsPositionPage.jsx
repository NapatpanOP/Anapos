import { useLocation, useNavigate, useParams } from "react-router";
import { BrandAPI } from "../../apis/brandAPI";
import "./SelectGraphicsPositionPage.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { UserAPI } from "../../apis/userAPI";
import { useAuthContext } from "../../core/contexts/AuthProvider";
import { baseImageUrl } from "../../core/store/localVariable";
import picture1 from "../../assets/picture/pt-10.jpg";
import Footer from "../Footer/Footer";
// useReducer

const SelectGraphicsPositionPage = () => {
  const { token, loadingAction } = useAuthContext();
  // const { id, position } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [brand, setBrand] = useState();
  const [show, setShow] = useState(false);
  // const [formParam, setFormParam] = useState(null);
  const [idState, setId] = useState("");
  const [position, setPosition] = useState();
  const [selectedGraphicIndex, setSelectedGraphicIndex] = useState();

  const [currentPositionIndex, setCurrentPositionIndex] = useState();
  const [currentGraphicIndex, setCurrentGraphicIndex] = useState();

  const [comment, setNote] = useState("");

  useEffect(() => {
    const setup = () => {
      if (location.state) {
        setId(location.state.id);
        setPosition(location.state.position);
        loadingAction.onLoading(true);
        BrandAPI.getById(location.state.id).then((res) => {
          setBrand(res);
          UserAPI.getById(token._id).then((resUser) => {
            const userBrandSelected = resUser.ads_poitions_selected.find(
              ({ brand_id }) => brand_id === res._id
            );
            console.log(userBrandSelected);
            setCurrentPositionIndex(
              userBrandSelected?.ad_index_position ?? null
            );
            setCurrentGraphicIndex(userBrandSelected?.ad_index_graphic ?? null);
            loadingAction.onLoading(false);
          });
        });
      } else {
        navigate("/");
      }
    };

    setup();
  }, []);

  const handleClose = () => setShow(false);

  const onClickGraphicHandle = (index) => {
    setSelectedGraphicIndex(index);
    setShow(true);
  };

  const confirmHandle = () => {
    // var requestData = brand
    // requestData.adsPositions[location.state.position].selected_counts += 1
    // requestData.adsPositions[location.state.position].images_urls[selectedGraphicIndex].selected_counts += 1
    setShow(false);
    loadingAction.onLoading(true);
    BrandAPI.addBrandPositionCount({
      id: brand._id,
      positionIndex: location.state.position,
      graphicIndex: selectedGraphicIndex,
      currentPositionIndex: currentPositionIndex,
      currentGraphicIndex: currentGraphicIndex,
      comment: {
        user_id: token._id,
        comment: comment,
      },
    }).then((res) => {
      var requestUser = token;
      UserAPI.selectPosition({
        id: token._id,
        comment: {
          brand_id: brand._id,
          comment: comment,
        },
        ads_poitions_selected: {
          brand_id: res._id,
          brand_title: res.title,
          ad_index_position: position,
          ad_index_graphic: selectedGraphicIndex,
        },
      }).then(() => {
        loadingAction.onLoading(false);
        navigate("/typesweb");
      });
    });
  };

  // const refreshData = (id) => {
  //     console.log(id)
  //     BrandAPI.getById(id).then((res) => {
  //         console.log(res)
  //         setBrand(res)
  //     })
  // }

  const renderButtonList = () => {
    if (brand) {
      return (
        <>
          {" "}
          {brand.adsPositions[location.state.position].images_urls.map(
            (img, index) => {
              return (
                <button
                  onClick={() => onClickGraphicHandle(index)}
                  type="button"
                  key={index}
                  className={`btn ${
                    currentGraphicIndex == index &&
                    currentPositionIndex == location.state.position
                      ? "btn-dark"
                      : "btn-outline-dark"
                  }`}
                >
                  BANNER {index + 1}
                </button>
              );
            }
          )}{" "}
          <button
            onClick={() => onClickGraphicHandle(-1)}
            type="button"
            key={-1}
            className={`btn ${
              currentGraphicIndex == -1 &&
              currentPositionIndex == location.state.position
                ? "btn-dark"
                : "btn-outline-dark"
            }`}
          >
            NON SELECT
          </button>
        </>
      );
    } else {
      return;
    }
  };

  const renderImageList = () => {
    if (brand) {
      return brand.adsPositions[location.state.position].images_urls.map(
        (img, index) => {
          console.log(img);
          return (
            <div class="bg-card-img">
              <h5>การออกแบบ {index + 1}</h5>
              <img
                src={baseImageUrl + img.images_url}
                alt=""
                key={index}
                onClick={() => onClickGraphicHandle(index)}
              />
            </div>
          );
        }
      );
    } else {
      return;
    }
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <div className="position-container">
      {/* <img src={ baseImageUrl + brand?.logo_brand} alt="logo" className="main-logo" />
            <p className='text-description'>Choose the design that's right for you. by clicking on the banner at the bottom of this page.</p>
           */}

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

      <div class="box-text-position">
        <p class="box-head-text-position">ประเภทเว็บไซต์ {brand?.type}</p>
        <h2>{brand?.title}</h2>
        <p>
          ส่วนนี้เป็นการออกแบบกราฟิกโฆษณาบนเว็บไซต์นั้น
          โดยส่วนใหญ่จะนำโฆษณาที่เคยมีอยู่แล้วนำมาปรับแก้ไขบางอย่าง
          เพื่อเอามาวัดความชอบของผู้ใช้แล้วนำไปปรับแก้ไขในอนาคต
        </p>
      </div>

      <h4 class="position-gp">ตำแหน่ง {location.state.position +1}</h4>

      <div class="box-img-list">
        <div className="position-img-list">{renderImageList()}</div>
      </div>
      {/* <div className="comment-banner">
        <label htmlFor="comment">Reasons to choose this graphic?</label>
        <textarea
          className="comment-form"
          id="comment"
          value={comment}
          onChange={handleNoteChange}
        ></textarea>
      </div> */}

      {/* <div className="button-list-contain">{renderButtonList()}</div> */}

      <div className="button-list-contain">
        <button
          onClick={() => onClickGraphicHandle(-1)}
          type="button"
          key={-1}
          id="bt-nonsend"
          className={`btn ${
            currentGraphicIndex == -1 &&
            currentPositionIndex == location.state.position
              ? "btn-dark"
              : "btn-outline-dark"
          }`}
        >
          ข้าม
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ยืนยันการเลือกกราฟิก</Modal.Title>
        </Modal.Header>
        <Modal.Body>คุณยีนยันที่จะเลือกกราฟิกนี้ใช่หรือไม่?</Modal.Body>
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
            ยืนยัน
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
};

export default SelectGraphicsPositionPage;
