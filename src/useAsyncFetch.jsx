// A custom hook that calls fetch.
// A hook is a function that can be called by React components.
// This one is wrapped around the built-in effect hook.  
import fetch from 'cross-fetch';
import React, {useEffect} from 'react';

async function useAsyncFetch(url, month, year, options, thenFun, catchFun) {
  console.log("in useAsyncFetch");

  // send a POST request
  async function sendPostRequest(url, month, year) {
    
    let params = {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ month: month, year: year }
    ) };
    console.log('body', params.body);
    console.log("about to send POST request");
  
    let response = await fetch(url,params);
    if (response.ok) {
      await fetchData();
      let data = await response.text();
      return data;
    } else {
      throw Error(response.status);
    }
  }
  
  // the usual function that does a fetch
  async function fetchData() {
    // Send request to origin server at appropriate endpoint
    console.log("in fetchData");
    
    let api_url = "/query/getData";
    
    let response = await fetch(api_url);
    console.log("response: ");
    // Wait for origin server to send back JSON object
    let json = await response.json();

    // Sanity check the contents of the JSON
    console.log("api data passsed from server",json);
    thenFun(json);
  }

  // The effect hook is a function called when the component is created or updated.
  // In this case, "the component" refers to the componet using 
  // this useFetch hook.
  // Because we give it a second argument of [] (meaning "update when the variables in this empty list change"),
  // this particular effect hook will get run only after the componet is created, not when it is updated.
  // In particular, when the calling component is re-rendered its state variables change,
  // this effect does not get called again. 
  useEffect(function () {
    console.log("Calling fetch");
    
    sendPostRequest("/query/postDate", month, year)
    .then( function (response) {
      console.log("Response recieved", response);
      
    })
    .catch( function(err) {
      console.log("POST request error", err);
    });
    

    
  }, [month]);

}

export default useAsyncFetch;