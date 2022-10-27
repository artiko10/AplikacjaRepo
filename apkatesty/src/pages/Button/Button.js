import React, { useState } from "react";
import './Button.css';


function clickMe() {
  alert("You clicked me!");
}



export default function App() {
  return (
  <>
<section class="button-section">
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-12">
      <h1>Button</h1>
      </div>
    
    
     <div class="col-sm-6 col1"><div class="p-3 border bg-light">
     
      <h3>Button</h3><br></br>
      <h3>On completion of this exercise, <br></br>
      you can learn the following concepts:</h3>
        
      <ul>
        <li>click()</li>  
        <li>driver navigation commands</li> 
        <li>getLocation()</li>  
        <li>getCss()</li> 
        <li>getSize()</li>
        <li>isEnabled()</li>
        <br></br><br></br><br></br><br></br>
      </ul>
     </div>
    </div>
    
    <div class="col-sm-6 col1"><div class="p-3 border bg-light">
      
      <p>1. Find the height & width of the button</p>
      <button type="button" class="btn btn-primary" onClick={clickMe}>How tall & fat I am?</button>
        
      <p>2. Find the color of the button</p>
      <button type="button" class="btn btn-success" onClick={clickMe}>What is my color?</button>
        
      <p>3. Confirm button is diabled</p>
      <button type="button" class="btn btn-lg btn-primary" disabled>Disabled</button>
        
      <p>4. Go to Home and come back here</p>
      <a href="http://localhost:3000/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Go to home</a>

      <p>5. Choose your favorite footballer and check if he has been selected correctly</p>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">Left</button>
        <button type="button" class="btn btn-secondary">Middle</button>
        <button type="button" class="btn btn-secondary">Right</button>
      </div>
        
    </div></div>
    </div>
</div>   

<div class="container">
  <div class="col-sm-12">
     <p>Praca inżynierska - Testy automatyczne Cypress. Wszelkie prawa zastrzeżone</p> 
     </div>
</div>
</section>
</>
  );
}
