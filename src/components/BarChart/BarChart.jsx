import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as Chartjs } from 'chart.js/auto'

function BarChart({chartData}) {

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
      <Bar data={chartData} options={chartOptions}/>
  )
}

export default BarChart
