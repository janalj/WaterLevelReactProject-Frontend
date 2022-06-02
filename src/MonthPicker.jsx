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
    
    // useAsyncFetch("/query/getData", data.year, data.month, {}, thenFun, catchFun);
    console.log("updated year: ",data.year);
    console.log("updated month: ",data.month);
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