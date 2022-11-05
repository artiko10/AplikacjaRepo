import React from "react";

import './Button.css';




function clickMe() {
  alert("You clicked me!");
};



export default function App() {
  
 
  
  return (
  <>

<section class="button-section bg-dark">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 my-5 p-2">
      <h1 class="font-weight-bold text-uppercase text-light title">Button</h1>
      </div>
    
    
   
      
    <div class="col-sm-7"><div class="p-5 border rounded bg-primary tasks text-light">
      <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>

      <p>1. Find the height & width of the button</p>
      <button type="button" class="btn btn-warning" onClick={clickMe}>How tall & fat I am?</button>
        
      <p>2. Find the color of the button</p>
      <button type="button" class="btn btn-success" onClick={clickMe}>What is my color?</button>
        
      <p>3. Confirm button is diabled</p>
      <button type="button" class="btn btn-lg btn-warning" disabled>Disabled</button>
        
      <p>4. Go to Home and come back here</p>
      <a href="http://localhost:3000/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Go to home</a>

      <p>5. Choose your favorite footballer and check if he has been selected correctly</p>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">Left</button>
        <button type="button" class="btn btn-secondary">Middle</button>
        <button type="button" class="btn btn-secondary">Right</button>
      </div>
        
    </div></div>
    <div class="col-sm-1 col1"></div>
    <div class="col-sm-4 col1 my-5 "><div class="p-5 border rounded bg-primary text-light">
     
     <h3>On completion of this exercise, 
     you can learn the following concepts:</h3>
       
     <ul>
       <li>click()</li>  
       <li>driver navigation commands</li> 
       <li>getLocation()</li>  
       <li>getCss()</li> 
       <li>getSize()</li>
       <li>isEnabled()</li>
       
     </ul>
    </div>
   </div>
    </div>
</div>   

<div class="container">
  <div class="col-sm-12 text-white text-center my-5 ">
     <p class="text-light">Praca inżynierska - Testy automatyczne Cypress. Wszelkie prawa zastrzeżone</p> 
     </div>
</div>
</section>
</>
  );
}
