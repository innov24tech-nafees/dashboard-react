import React, { useState } from "react";

import { Line } from 'react-chartjs-2';
import {Chart as chartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';

chartJs.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler
)


function RockLineChart(){

    const [data, setData]= useState({

        labels:['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6','Day 7','Day 8','Day 9','Day 10','Day 11','Day 12',],
        datasets: [
            {
                label:"First DataSet",
                data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
                backgroundColor: '#a5cedb',
                // borderColor: 'red',
                border: false,
                tension: '0.4',
                fill: true,
                showLine: false,
            },
            

            {
                label:"First DataSet",
                data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
                backgroundColor: '#84a8ff',
                // borderColor: 'red',
                border: false,
                tension: '0.4',
                fill: true,
                showLine: false,
                yAxisID: 'y-axis-0',
                
                gridLines: {
                    display: false,
                  }
              },

              {
                label:"First DataSet",
                data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
                backgroundColor: '#2055eb',
                // borderColor: 'red',
                border: false,
                tension: '0.4',
                fill: true,
                showLine: false
              }
        ]
    })
    return(

        <>
          <div style={{ height: "290px" }}>
   <Line  data={data}></Line>
   </div>
        </>
    )
}
export default RockLineChart;