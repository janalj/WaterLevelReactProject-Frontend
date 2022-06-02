import React, { useEffect, useState } from "react";
// an third-party component from NPM
import MonthYearPicker from 'react-month-year-picker';
import './App.css';

function MonthPicker(props) {

  let date = props.date;
  let defultData = date.month + "/" + date.year;
  
  const [visible, updateVisible] = useState(false);

  function showFun() {
    updateVisible(true);
  }

  function pickedYear(year) {
    updateVisible(true);
    props.yearFun(year);
  }

  function pickedMonth(month) {
    updateVisible(false);
    props.monthFun(month);
  }


  if (visible) {
    console.log("Picked month",date.month);
    console.log("Picked year: ", date.year);
    return (
      <div id="dropDown">
        <div id="changeMonth">Change month: </div>
        <input
          placeholder={defultData}
          className="inputMonthYear"
          onClick={showFun}
        />
        <div id="month-year-picker">
          <MonthYearPicker
            caption=""
            selectedMonth={date.month}
            selectedYear={date.year}
            minYear={2000}
            maxYear={2022}
            onChangeYear={pickedYear}
            onChangeMonth={pickedMonth}
          />
        </div>
      </div>);
  } else {
    return (
      <div id="dropDown">
        <div id="changeMonth">Change month: </div>
        <input
          placeholder={defultData}
          className="inputMonthYear"
          onClick={showFun}
        />
      </div >
    )
  }
}

export default MonthPicker;