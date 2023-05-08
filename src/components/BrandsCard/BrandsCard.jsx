import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import data from './data.json';
import { BrandAPI } from '../../apis/brandAPI';
import { UserAPI } from '../../apis/userAPI';
import './BrandsCard.css';

function BrandsCard() {
  var loginUser = JSON.parse(localStorage.getItem('user')) ?? false;
  const [data, setData] = useState([]);
  const [likes, setLikes] = useState();
  const refreshAllBrands = () => {
     BrandAPI.getAll().then((v) => {
    setData(v)
  })}
  // const data = BrandAPI.getAll() ?? [];
  // console.log(data)

  const handleLike = (item, index) => {
    if (!loginUser.brands_like.includes(item._id)) {
      var updateUser = loginUser
      updateUser.brands_like.push(item._id)
      console.log(updateUser)
      UserAPI.updateBrandsLike(updateUser).then((res) => {
        console.log(res)
        loginUser = res
        localStorage.setItem('user', JSON.stringify(loginUser))
      })
      console.log(loginUser._id)
      item.like.push(loginUser._id)
      console.log(item)
      BrandAPI.updateLike(item).then((res) => {
        var m = data
        m[index] = res
        setData([...m])
      })

      // setLikes(likes.filter((id) => id !== itemId));
    } else {
      var updateUser = loginUser
      const targetIndex = updateUser.brands_like.indexOf(item._id);
      if (targetIndex > -1) { // only splice array when item is found
        updateUser.brands_like.splice(targetIndex, 1); // 2nd parameter means remove one item only
      }
      console.log(updateUser)
      UserAPI.updateBrandsLike(updateUser).then((res) => {
        console.log(res)
        loginUser = res
        localStorage.setItem('user', JSON.stringify(loginUser))
      })
      console.log(loginUser._id)
      // item.like.push(loginUser._id)
      const targetBIndex = item.like.indexOf(loginUser._id);
      if (targetBIndex > -1) { // only splice array when item is found
        item.like.splice(targetBIndex, 1); // 2nd parameter means remove one item only
      }
      console.log(item)
      BrandAPI.updateLike(item).then((res) => {
        var m = data
        m[index] = res
        setData([...m])
      })
    }
    // else {
    //   setLikes([...likes, itemId]);
    // }
  };

  useEffect(() => {
    refreshAllBrands()
  }, [])

  return (
    <div className="brand-list">
       <div className="card-container">
        {data.map((card, index) => (
        <div className="card-item" key={card._id}>
          <div className="card-image">
            <img src={card.image} alt={card.title} />
            <p>Website Type: {card.type}</p>
          </div>
          <div className="card-content">
            <div className="card-like" onClick={() => handleLike(card, index)}>
              <FontAwesomeIcon
                icon={faHeart}
                className={card.like.includes(loginUser._id) ? 'like-icon active' : 'like-icon'}
              />
              <p>{card.like.length}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default BrandsCard;
