import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import data from './data.json';
import { BrandAPI } from "../../apis/brandAPI";
import { UserAPI } from "../../apis/userAPI";
import "./BrandsCard.css";
import { useAuthContext } from "../../core/contexts/AuthProvider";
import { useNavigate } from "react-router";
import { baseImageUrl } from "../../core/store/localVariable";

function BrandsCard({ filter }) {
  const { token, loadingAction } = useAuthContext();
  const navigate = useNavigate();

  console.log("init brands card");
  const [loginUser, setLoginUser] = useState(token);
  // var loginUser = JSON.parse(localStorage.getItem('user')) ?? false;

  const [cards, setData] = useState([]);
  var [userLike, setUserLike] = useState([]);

  const refreshUserBrandsLike = () => {
    if (!token) {
      return;
    }
    loadingAction.onLoading(true);
    UserAPI.getUserLike({ id: loginUser._id }).then((res) => {
      setUserLike(res);
      loadingAction.onLoading(false);
    });
  };

  const refreshAllBrands = () => {
    loadingAction.onLoading(true);
    BrandAPI.getAll().then((v) => {
      setData(v);
      loadingAction.onLoading(false);
    });
  };
  // const data = BrandAPI.getAll() ?? [];
  // console.log(data)

  const handleLike = (item, index) => {
    if (!token) {
      return;
    }
    if (!userLike.includes(item._id)) {
      var updateUser = loginUser;
      userLike.push(item._id);
      updateUser.brands_like = userLike;
      loadingAction.onLoading(true);
      UserAPI.updateBrandsLike(updateUser).then((res) => {
        setLoginUser(res);
        userLike = res.brands_like;
        localStorage.setItem("token", JSON.stringify(loginUser));
        loadingAction.onLoading(false);
      });
      item.like.push(loginUser._id);
      loadingAction.onLoading(true);
      BrandAPI.updateLike(item).then((res) => {
        var m = filteredCards;
        m[index] = res;
        setData([...m]);
        loadingAction.onLoading(false);
      });

      // setLikes(likes.filter((id) => id !== itemId));
    } else {
      var updateUser = loginUser;
      const targetIndex = userLike.indexOf(item._id);
      if (targetIndex > -1) {
        // only splice array when item is found
        userLike.splice(targetIndex, 1); // 2nd parameter means remove one item only
      }
      updateUser.brands_like = userLike;
      loadingAction.onLoading(true);
      UserAPI.updateBrandsLike(updateUser).then((res) => {
        setLoginUser(res);
        userLike = res.brands_like;
        localStorage.setItem("token", JSON.stringify(loginUser));
        loadingAction.onLoading(false);
      });
      // item.like.push(loginUser._id)
      const targetBIndex = item.like.indexOf(loginUser._id);
      if (targetBIndex > -1) {
        // only splice array when item is found
        item.like.splice(targetBIndex, 1); // 2nd parameter means remove one item only
      }
      loadingAction.onLoading(true);
      BrandAPI.updateLike(item).then((res) => {
        var m = filteredCards;
        m[index] = res;
        setData([...m]);
        loadingAction.onLoading(false);
      });
    }
    // else {
    //   setLikes([...likes, itemId]);
    // }
  };

  const [selectedType, setSelectedType] = useState("All");

  // const handleFilter = (event) => {
  //   setSelectedType(event.target.value);
  // };

  const handleFilter = (key) => {
    setSelectedType(key);
  };

  const filteredCards = cards.filter((card) => {
    if (selectedType === "All") {
      return true;
    } else {
      return card.type === selectedType;
    }
  });

  const renderWarning = () => {
    if (!token) {
      return (
        <div className="warning-banner">
          please login for vote your favorite ads
        </div>
      );
    }
  };

  const renderFilter = () => {
    if (filter) {
      return (
        <div className="type-page">
          <button class="bt-type1" onClick={() => handleFilter("บันเทิง")}>บันเทิง</button>
          <button class="bt-type2" onClick={() => handleFilter("ข่าวสาร")}>ข่าวสาร</button>
          <button class="bt-type3" onClick={() => handleFilter("ธุรกิจ")}>ธุรกิจ</button>
          {/* <select onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Portal">Portal</option>
            <option value="New">New</option>
            <option value="Business">Business</option>
          </select> */}
        </div>
      );
    }
  };

  const handleCardClick = (url) => {
    if (token) {
      window.location.href = url;
    }
  };

  const positionSelectHandle = (id) => {
    console.log("test ", id);
    navigate("/select-position", { state: { id: id } });
  };

  useEffect(() => {
    const setup = () => {
      if (token) {
        loadingAction.onLoading(true);
        UserAPI.getById(loginUser?._id).then((resUser) => {
          console.log(resUser);

          setLoginUser(resUser);
          loadingAction.onLoading(false);
        });
      } else {
        setLoginUser(token);
      }
    };

    setup();
    refreshAllBrands();
    refreshUserBrandsLike();
  }, [token]);

  const renderVoteBanner = (id) => {
    if (
      loginUser?.ads_poitions_selected?.find(({ brand_id }) => brand_id === id)
    ) {
      return (
        <div className="voted-banner" onClick={() => handleLike(card, index)}>
          โหวต
        </div>
      );
    }
  };

  const cancelVoteHandle = (index) => {
    const userBrandSelected = loginUser?.ads_poitions_selected?.find(
      ({ brand_id }) => brand_id === filteredCards[index]._id
    );
    loadingAction.onLoading(true);
    BrandAPI.addBrandPositionCount({
      id: filteredCards[index]._id,
      user_id: token._id,
      isUnselect: true,
      currentPositionIndex: userBrandSelected?.ad_index_position ?? null,
      currentGraphicIndex: userBrandSelected?.ad_index_graphic ?? null,
    }).then((res) => {
      var m = filteredCards;
      m[index] = res;
      setData([...m]);
      UserAPI.selectPosition({
        id: token._id,
        brand_id: filteredCards[index]._id,
        isUnselect: true,
        ads_poitions_selected: {
          brand_id: res._id,
        },
      }).then((resUser) => {
        loadingAction.onLoading(false);
        setLoginUser(resUser);
      });
    });
  };

  return (
    <div className="brand-list">
      {renderFilter()}
      {renderWarning()}
      <div className="card-container">
        {filteredCards.map((card, index) => (
          <div
            className="card-item"
            key={card._id}
            style={{ pointerEvents: token != null ? "auto" : "none" }}
          >
            <div
              className="card-image"
              onClick={() => positionSelectHandle(card._id)}
            >
              {/* <img src={baseImageUrl + card.image} alt={card.title} /> */}
              <h1 class="head-name-brand">{card.title}</h1>
              <p class="text-name-type">ประเภท: {card.type}</p>
            </div>
            <div className="card-content">
              <div className="flex-row">
                <div
                  className="card-like"
                  onClick={() => handleLike(card, index)}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={
                      card.like.includes(loginUser?._id)
                        ? "like-icon active"
                        : "like-icon"
                    }
                  />
                  <p>{card.like.length}</p>
                </div>
                {renderVoteBanner(card._id)}
              </div>
              {/* <hr /> */}
              <div className="brand-vote-card">
                <div
                  className="brand-vote-status"
                  onClick={() =>
                    loginUser?.ads_poitions_selected?.find(
                      ({ brand_id }) => brand_id === card._id
                    )
                      ? cancelVoteHandle(index)
                      : positionSelectHandle(card._id)
                  }
                >
                  {loginUser?.ads_poitions_selected?.find(
                    ({ brand_id }) => brand_id === card._id
                  )
                    ? "คลิกหากต้องการยกเลิกการโหวต"
                    : "คลิกเพื่อโหวต"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandsCard;
