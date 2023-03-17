// import logo from './logo.svg';


import './App.css';
// import React, { Component } from 'react';
import React, { useState } from "react";

// import { render } from 'react-dom';
const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)
// Function to generate random food results
const foodList = [
  "Hawker Food",
  "Fast Food",
  "Chinese Food",
  "Malay Food",
  "Indian Food",
  "Salad",
  "Vegetarian Food",
  "Burrito",
  "Pizza", 
  "Tacos",
  "Protein Shake", 
  "Japanese Food",
  "Korean Food",
  "KBBQ",
  "Mookata",
  "Thai Food",
  "Vietnamese Food",
  "Cup Noods!"
];


function getRandomFood(){
  return foodList[Math.floor(Math.random() * foodList.length)];
}
  
// Main Function
function App() {
  
  function WhathappenswhenyouPressMe(){
  window.alert(getRandomFood())
  };
  return (
    <div className="App">
      <header className="App-header">
    
        <p>
          Hello there!<Emoji symbol="👋" />
    

        </p>
        <n>
          Feelin' hangry but can't decide what to eat? 
        </n>
        <n>
          <Emoji symbol="🍲" /> <Emoji symbol="🍱" />  <Emoji symbol="🍙" />  <Emoji symbol="🍟" />  <Emoji symbol="🍢" />  <Emoji symbol="🥗" /> <Emoji symbol="🍔" /> <Emoji symbol="🍕" /> <Emoji symbol="🌯" /> 

        </n>
        <n>
          Fret not! Simply hit the button to get a suggestion!  
        </n>
        <p>
        <button 
          style ={{width:"200px", height:"40px",}}
          onClick={WhathappenswhenyouPressMe} 
          >Press for Food Recos!</button><b></b> 

        
        </p>
        
         
        
      </header>
    </div>
  );
}

export default App;
