import React, { useEffect, useState } from "react";
// an third-party component from NPM
import MonthYearPicker from 'react-month-year-picker';
import './App.css';

function MonthPicker(props) {

  let date = props.date;

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
    return (
      <div>
        <input
          defaultValue={date.month + "/" + date.year}
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
      <main>
        <input
          defaultValue={date.month + "/" + date.year}
          className="inputMonthYear"
          onClick={showFun}
        />
      </main >
    )
  }
}

export default MonthPicker;