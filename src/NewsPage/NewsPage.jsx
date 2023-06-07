import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import "./Newspage.css"
import picture1 from "../assets/picture/pt-9.png"
import Footer from '../components/Footer/Footer'
import { datanews as newsLists } from "./DataNews.json"
import { baseImageUrl } from '../core/store/localVariable'
import { text } from '@fortawesome/fontawesome-svg-core'

function NewsPage1() {
  const [newsId, setNewsId] = useState()

  const location = useLocation()
  useEffect(() => {
    const id = location.state.id
    setNewsId(id)
  }, [location.state])

  const renderPageHandle = () => {
    if (newsId) {
      const newsData = newsLists.find((news) => news.id == newsId)
      if (newsData.img.length == 1) {
        return <div className="two-side-container">
          <div className="news-left-side">
            <img src={baseImageUrl + newsData.img[0]} />
          </div>
          <div className="news-right-side">
            <p class="head-news-text">{newsData.head}</p>
            <h3 class="head-discription-news">{newsData.headDiscription}</h3>
            <p>{newsData.discription}</p>
          </div>
        </div>
      } else {
        return <div className='column-container'>
          <div className="title">
            <p class="head-news-text">{newsData.head}</p>
            <h3 class="head-discription-news">{newsData.headDiscription}</h3>
            <p>{newsData.discription}</p>
          </div>
          <div className="image-box">
            {newsData.img.map((img) => {
              return <img src={baseImageUrl + img}/>
            })}
          </div>
        </div>
      }
    }
  }
  return (
    <div>
      <div className="full-size-news">
        <div className="head-news">
          <img className="picture-head-news" src={picture1} alt="pt-9" />
          <div className="text-head-news">
            <h2>ข้อมูลข่าวสาร</h2>
            <h1>Global Digital Stat 2023</h1>
          </div>
        </div>
      </div>
      {renderPageHandle()}
      <Footer/>
    </div>
  )
}

export default NewsPage1
