import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';


function StaticInfo() {

    return (
      <main>
      <h1>Water storage in California reservoirs</h1>
      <div id="text1">  
        <p>
          California's reservoirs are part of a <a href="https://www.ppic.org/wp-content/uploads/californias-water-storing-water-november-2018.pdf">complex water storage system</a>.  The State has very variable weather, both seasonally and from year-to-year, so storage and water management is essential.  Natural features - the Sierra snowpack and vast underground aquifers - provide more storage capacity,  but reservoirs are the part of the system that people control on a day-to-day basis.  Managing the flow of surface water through rivers and aqueducts, mostly from North to South, reduces flooding and attempts to provide a steady flow of water to cities and farms, and to maintain natural riparian habitats.  Ideally, it also transfers some water from the seasonal snowpack into long-term underground storage.  Finally, hydro-power from the many dams provides carbon-free electricity. 
        </p>
        <p>
          California's water managers monitor the reservoirs carefully, and the state publishes daily data on reservoir storage.
        </p>
      </div>
      
      <img src="https://cdn.theatlantic.com/thumbor/HYdYHLTb9lHl5ds-IB0URvpSut0=/900x583/media/img/photo/2014/09/dramatic-photos-of-californias-historic-drought/c01_53834006/original.jpg
      "/>
      <div id="caption">
        Lake Oroville in the 2012-2014 drought. Image credit Justin Sullivan, from The Atlatic article Dramatic Photos of California's Historic Drought.
      </div>
      
    </main>
      
      )
 
  
}//end of app

export default StaticInfo;