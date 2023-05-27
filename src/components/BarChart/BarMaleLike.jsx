import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { data } from '../data.json'
// import { allUser } from '../allUser.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarMaleLike({ data, allUser }) {
  var maleUser = allUser.filter((user) => user.sex == 'MALE')

  const [userData, setData] = useState({
    labels: data.map((item) => item.title),
    datasets: [{
      label: "MALE",
      data: null,
      backgroundColor: [
        '#9EA1D4',
        '#FD8A8A',
        '#F1F7B5',
        '#88D7B5',
        '#00ADB5',
        '#61A48D',
        '#FF5858',
        '#7371D9',
        '#D071D9',
      ],
    }]
  })

  useEffect(() => {
    var maleUser = allUser.filter((user) => user.sex == 'MALE')
    var positionBrandStore = {} 
    data.forEach((brand) => { 
      positionBrandStore[brand._id] = 0
    })
    maleUser.forEach((user) => {
      user.ads_poitions_selected.forEach((ads) => {
        console.log(ads)
        positionBrandStore[ads.brand_id] += 1
      })
      
    })
    setData({
      labels: data.map((item) => item.title),
      datasets: [{
        label: "MALE",
        data: Object.values(positionBrandStore),
        backgroundColor: [
          '#9EA1D4',
          '#FD8A8A',
          '#F1F7B5',
          '#88D7B5',
          '#00ADB5',
          '#61A48D',
          '#FF5858',
          '#7371D9',
          '#D071D9',
        ],
      }]
    })
  }, [allUser, data])

  return (
    <div className="full-box">
      <div className="bar-chart">
        <BarChart chartData={userData} />
      </div>
    </div>
  )
}

export default BarMaleLike
