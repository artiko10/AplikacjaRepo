
import React, { useState } from 'react';
import Fade from 'react-bootstrap/Fade';
import './Button.css';




function clickMe() {
  alert("You clicked me!");
};



export default function App() {
  const [open, setOpen] = useState(false);
 
  
  return (
  <>

<section class="button-section">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 my-5 p-2">
      <h1 class="font-weight-bold text-uppercase text-light title">Button</h1>
      </div>
    
    
   
      
    <div class="col-sm-7"><div class="p-5 border rounded bg-success tasks text-light">
      <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>

      <p>1. Find the height & width of the button</p>
      <button type="button" class="btn btn-warning">How tall & fat I am?</button>
        
        
      <p>2. Find the color of the button</p>
      <button type="button" class="btn btn-primary" onClick={clickMe}>What is my color?</button>
        
      <p>3. Confirm button is diabled</p>
      <button type="button" class="btn btn-lg btn-warning" disabled>Disabled</button>
        
      <p>4. Go to Home and come back here</p>
      <a href="http://localhost:3000/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Go to home</a>

      <p>5. Click on the button and check if the message is displayed</p>
      <button type="button" class="btn btn-warning"  onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}>Click me</button>
         <Fade in={open}>
        <div id="example-fade-text" class="text-primary font-weight-bold text-uppercase">
         Brawo udało ci się mnie kliknąć!
        </div>
      </Fade>
        
    </div></div>
    
    <div class="col-sm-4 col1 my-5 offset-sm-1 "><div class="p-5 border rounded bg-success text-light">
     
     <h3>In these exercises, you will learn such functions as:</h3>
       
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
