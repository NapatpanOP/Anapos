import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { data } from '../data.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarTypeNewLike({data}) {
  const filterredPortal = data.filter((item) => {
    return item.type === "New";
});
  const [userData, setData] = useState({
    labels: filterredPortal.map((item) => item.title),
    datasets: [{
      label: "News Website",
      data: data.map((item) => item.like.length),
      backgroundColor: [
        '#F1F7B5',
        '#FD8A8A',
        '#88D7B5',
      ],
    }]
  })

  useEffect(() => {
    setData({
      labels: filterredPortal.map((item) => item.title),
      datasets: [{
        label: "News Website",
        data: data.map((item) => item.like.length),
        backgroundColor: [
          '#F1F7B5',
          '#FD8A8A',
          '#88D7B5',
        ],
      }]
    })
  }, [data])

  return (
    <div className="full-box">
      <div className="bar-chart">
        <BarChart chartData={userData}/>
      </div>
    </div>
  )
}

export default BarTypeNewLike
