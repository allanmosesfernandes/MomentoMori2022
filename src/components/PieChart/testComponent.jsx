import React from 'react'
import { useState } from 'react';


const testComponent = () => {


    const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  return (
    <div>testComponent</div>
  )
}
/* const chartData = {
    labels: ["Days Passed", "Days left"],
    datasets: [
        {
            data: [timePassed.days, 365],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)"],
            borderWidth: 1
        }
    ]
};
 */
export default testComponent