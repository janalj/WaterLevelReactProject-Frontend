import React, { useEffect, useState } from "react";
import './App.css';
import useAsyncFetch from './useAsyncFetch';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import MonthPicker from './MonthPicker';

function App() {
  // Month Picker 
  const [date, setDate] = useState({ month: 6, year: 2022 });

  function yearChange(newYear) {
    let m = date.month;
    setDate({ year: newYear, month: m });
  }

  function monthChange(newMonth) {
    let y = date.year;
    setDate({ month: newMonth, year: y });
  }

  useEffect(() => {
    console.log("I Only run once (When the component gets mounted)")
  }, [date.year]);

  const [seeMore, setSeeMore] = useState(false);
  // when buttonAction is called, set seeMore variable to true
  function buttonAction() {
    if (seeMore) {
      setSeeMore(false);
    } else (setSeeMore(true))
  }

  
  // // Testing Data
  // let testProps = [{ name: 'University of California-Davis', midIncome: 12875, sticker: 30 }, { name: 'Stanford', midIncome: 3985, sticker: 20 }, { name: 'California Polytechnic State University-San Luis Obispo', midIncome: 15601, sticker: 40 }, { name: 'Stanford', midIncome: 3985, sticker: 50 }, { name: 'California Polytechnic State University-San Luis Obispo', midIncome: 15601, sticker: 35 }, { name: 'Stanford', sticker: 40 }, { name: 'California Polytechnic State University-San Luis Obispo', midIncome: 15601, sticker: 40 }, { name: 'Stanford', midIncome: 3985, sticker: 74570 }, { name: 'California Polytechnic State University-San Luis Obispo', midIncome: 15601, sticker: 25 }];

  
  // make ajax call, return an object
  // returnedObjectName = {} replace testProps with ObjectName
  
  let testProps = [];
  useAsyncFetch("query/getData", date.year, date.month, {}, thenFun, catchFun);
  
  function thenFun (result) {
    testProps = result;
    // render the list once we have it
  }
  
  function catchFun (error) {
    console.log(error);
  }


  if (seeMore) {  // if seeMore is true 
    return (
      <div id = "MonthPickerWrapper">
        <button onClick={buttonAction}>See Less</button>
        <div id="datatext" className='bodyText'>
          Here's a quick look at some of the data on reservoirs from the <a href="https://cdec.water.ca.gov/index.html">California Data Exchange Center</a>, which consolidates climate and water data from multiple federal and state government agencies, and  electric utilities.  Select a month and year to see storage levels in the eleven largest in-state reservoirs.
      </div>
        <WaterChart waterData={testProps}> </WaterChart> 
        <MonthPicker
          // props 
          date={date}
          yearFun={yearChange}
          monthFun={monthChange}
        />

      </div>


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



console.log()
function WaterChart(props) {
  const nicknames = new Map();
  nicknames.set(0, 'Shasta');
  nicknames.set(1, 'Ororville');
  nicknames.set(2, 'Trinity Lake');
  nicknames.set(3, 'New Melones');
  nicknames.set(4, 'San Luis');
  nicknames.set(5, 'Don Pedro');
  nicknames.set(6, 'Berryessa');
  //Station Ids: SHA, ORO, CLE, NML, LUS, DNP, BER 

  if (props.waterData) { 
    let n = props.waterData.length;
    console.log("Water Data", props.waterData);
    
    // objects containing row values
    let stickerObj = { data: [], backgroundColor: ["rgb(66,145,152)"], barThickness: 20 }
    let labels = [];
    for (let i = 0; i < 7; i++) {
      stickerObj.data.push(props.waterData[i].waterLevel);
      labels.push(nicknames.get(i));
    }

    // Returned the capacity array here 
    let capacity = [4552000, 3537577, 2447650, 317000, 1062000, 2030000, 1602000];
    //capacities for: SHA, ORO, CLE, NML, LUS, DNP, BER 

    let difference = [10, 10, 10, 10, 10, 10, 10];
  
    console.log("stickerObj array: ", stickerObj.data[0]);
    for (let i = 0; i < 7; i++) {
        difference[i] = capacity[i]-stickerObj.data[i];
    }
    console.log("difference array: ", difference);

    let stackedObj = { data: difference, backgroundColor: ["rgb(120,199,227)"], barThickness: 20 }



    let userData = {};
    userData.labels = labels;
    userData.datasets = [stickerObj, stackedObj];

    console.log("User Data", userData);
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
          stacked: true

        },

        y: {
          grid: {
            display: false
          },
          min: 10,
          max: 60,
          ticks: {
            stepSize: 10
          },
          stacked: true

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