import React, { useEffect, useState } from "react";
import './App.css';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function App() {
  const [seeMore, setSeeMore] = useState(false);
  
  // when buttonAction is called, set seeMore variable to true
  function buttonAction() {  
      if (seeMore){
        setSeeMore(false);
      }else(setSeeMore(true))
  }

  if (seeMore) {

    return (
  
      <main>
      
      <button onClick={buttonAction}>See Less</button>
      
      <div id="datatext">
        Here's a quick look at some of the data on reservoirs from the <a href="https://cdec.water.ca.gov/index.html">California Data Exchange Center</a>, which consolidates climate and water data from multiple federal and state government agencies, and  electric utilities.  Select a month and year to see storage levels in the eleven largest in-state reservoirs.
      </div>
      
    </main>
      
      
      )
  }//end of if statement
  else{
    return (
      <main>
         
        <button onClick={buttonAction}>See More</button>
        
      </main>
    )
  }//end of else statement 

  // Testing Data
  let testProps = [{name: 'University of California-Davis', midIncome: 12875, sticker: 35532},{name: 'Stanford', midIncome: 3985, sticker: 74570},{name: 'California Polytechnic State University-San Luis Obispo', midIncome: 15601, sticker: 28927}]


  
  
  function SchoolChart(props) {
  const nicknames = new Map();
  nicknames.set(0, 'UC Davis');
  nicknames.set(1, 'Stanford');
  nicknames.set(2, 'Cal Poly-SLO');
  
  if (props.schools) {
    let n = props.schools.length;
    console.log(props.schools);

    // objects containing row values
    let stickerObj = {label: "Sticker Price",data: [], backgroundColor: ["pink"]}
    let midIncObj = {label: "Middle Income Family Price", data: [], backgroundColor: ["red"]}
    let labels = [];
    for (let i=0; i<n; i++) {
      stickerObj.data.push(props.schools[i].sticker);
      midIncObj.data.push(props.schools[i].midIncome);
      labels.push(nicknames.get(i));
    }


  let userData = {};
  userData.labels = labels;
  userData.datasets = [stickerObj, midIncObj];

console.log(userData);
let options = {
  plugins: {
    title: {
      display: true,
      text: 'Sticker vs. Middle Income Family Prices',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
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




  
}//end of app

export default App;