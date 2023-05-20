import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { data } from '../data.json'
// import { allUser } from '../allUser.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarOtherLike({data, allUser}) {
  var maleUser = allUser.filter((user) => user.sex == 'Other')
  console.log(maleUser)
  var likeList = [] 
  data.forEach((brand) => {
    likeList.push(maleUser.filter((m) => brand.like.includes(m._id)))
  });
  console.log(likeList)
  const [userData, setData] = useState({
    labels: data.map((data) => data.title),
    datasets: [{
      label: "Other",
      data: likeList.map((item) => item?.length),
      backgroundColor: [
        '#FD8A8A',
        '#F1F7B5',
        '#88D7B5',
        '#00ADB5',
        '#61A48D',
        '#9EA1D4',
        '#FF5858',
        '#7371D9',
        '#D071D9',
      ],
    }]
  }) 

  return (
    <div class="full-box">
      <div class="bar-chart">
        <BarChart chartData={userData}/>
      </div>
    </div>
  )
}

export default BarOtherLike
