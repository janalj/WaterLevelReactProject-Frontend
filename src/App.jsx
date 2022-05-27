import React, { useEffect, useState } from "react";
import './App.css';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function App() {
  const [seeMore, setSeeMore] = useState(false);
  // when buttonAction is called, set seeMore variable to true
  function buttonAction() {
    if (seeMore) {
      setSeeMore(false);
    } else (setSeeMore(true))
  }
  if (seeMore) {  // if seeMore is true 
    return (
      <main>
        <button onClick={buttonAction}>See Less</button>
        <div id="datatext">
          Here's a quick look at some of the data on reservoirs from the <a href="https://cdec.water.ca.gov/index.html">California Data Exchange Center</a>, which consolidates climate and water data from multiple federal and state government agencies, and  electric utilities.  Select a month and year to see storage levels in the eleven largest in-state reservoirs.
      </div>

        <SchoolChart schools={testProps}> </SchoolChart>

      </main>


    )
  }//end of if statement
  else { // if seeMore is false
    return (
      <main>
        <button onClick={buttonAction}>See More</button>
      </main>
    )
  }//end of else statement 

}//end of app

// Testing Data
let testProps = [{ name: 'University of California-Davis', midIncome: 12875, sticker: 30 }, { name: 'Stanford', midIncome: 3985, sticker: 20 }, { name: 'California Polytechnic State University-San Luis Obispo', midIncome: 15601, sticker: 40 }, { name: 'Stanford', midIncome: 3985, sticker: 50 }, { name: 'California Polytechnic State University-San Luis Obispo', midIncome: 15601, sticker: 35 }, { name: 'Stanford', sticker: 40 }, { name: 'California Polytechnic State University-San Luis Obispo', midIncome: 15601, sticker: 40 }, { name: 'Stanford', midIncome: 3985, sticker: 74570 }, { name: 'California Polytechnic State University-San Luis Obispo', midIncome: 15601, sticker: 25 }]



function SchoolChart(props) {
  const nicknames = new Map();
  nicknames.set(0, 'Shasta');
  nicknames.set(1, 'Ororville');
  nicknames.set(2, 'Trinity Lake');
  nicknames.set(3, 'New Melones');
  nicknames.set(4, 'San Luis');
  nicknames.set(5, 'Don Pedro');
  nicknames.set(6, 'Berryessa');

  if (props.schools) {
    let n = props.schools.length;
    console.log(props.schools);

    // objects containing row values
    let stickerObj = { data: [], backgroundColor: ["rgb(120,199,227)"], barThickness: 40 }
    let labels = [];
    for (let i = 0; i < 7; i++) {
      stickerObj.data.push(props.schools[i].sticker);
      labels.push(nicknames.get(i));
    }


    let userData = {};
    userData.labels = labels;
    userData.datasets = [stickerObj];
    
    console.log("User Data",userData);
    let options = {
      plugins: {
        // remove the label
        legend: {
          display: false
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        
        x: {
          
          grid: {
            display: false
          },
          ticks: {
                    maxRotation: 50,
                    minRotation: 50,
            
                },
          
        },
        
        y: {
          grid: {
            display: false
          }, 
          min:10,
          max: 80,
          ticks: {
          stepSize: 10
        }      
                    
        }
       
      }
    };


    return (
      <div id="chart-container">
        <Bar options={options} data={userData} />
      </div>
    )
  }
}




export default App;