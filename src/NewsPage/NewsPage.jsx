import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import "./Newspage.css"
import picture1 from "../assets/picture/pt-9.png"
import Footer from '../components/Footer/Footer'
import { datanews } from "./DataNews.json"

function NewsPage1() {
  const [dataID, setDataID] = useState(0)
  const location = useLocation()
  useEffect(() => {
    const id = location.state.id
    console.log(id)
    setDataID(id)
  }, [location.state])

  return (
    <div>
      <div class="full-size-news">
        <div class="head-news">
          <img class="picture-head-news" src={picture1} alt="pt-9" />
          <div class="text-head-news">
            <h2>ข้อมูลข่าวสาร</h2>
            <h1>Global Digital Stat 2023</h1>
          </div>
        </div>
      </div>

      <div>
        <div>
          
        </div>
        <div>

        </div>
      </div>
      {dataID}
      <Footer/>
    </div>
  )
}

export default NewsPage1
