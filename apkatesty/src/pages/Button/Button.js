
import React, { useState } from 'react';
import Fade from 'react-bootstrap/Fade';
import './Button.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Modal from 'react-bootstrap/Modal';



function clickMe() {
  alert("You clicked me!");
};



export default function App() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);

  const toggle=()=>{
    setState(!state);
  }
 
  //tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      This is tooltip
    </Tooltip>
  );

  //popup
  const [displayPopup, setPopup] = useState(false);

  const closePopup = () => setPopup(false);
  const showPopup = () => setPopup(true);
  
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
        
      <p>1. Click on the button and see if it displays a popup with the content</p>
      <Button data-cy="PopupButton" variant="danger" onClick={showPopup}>
      Open popup
      </Button>

      <Modal show={displayPopup} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Example popup</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={closePopup}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <p>2. Hover over the button and check the text on the tooltip</p>

      <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button data-cy="TooltipButton" variant="warning">Check tooltip</Button>
    </OverlayTrigger>

      <p>3. Find the color of the button</p>
      <button type="button" data-cy="ColorButton" class="btn btn-primary" onClick={clickMe}>Check color</button>
        
      <p>4. Confirm button is diabled</p>
      <button type="button" data-cy="DisabledButton" class="btn btn-lg btn-warning" disabled>Disabled</button>
        
      <p>5. Go to Home and come back here</p>
      <a href="http://localhost:3000/" data-cy="HomeButton" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Go to home</a>

      <p>6. Change color of the button</p>
      <div id="task 6">
      <button onClick={toggle} className={'toggle--button ' + (state ? 'toggle--close':'')}>
        {state ? 'change to yellow' : 'change to blue'}
      </button>
      </div>   
      <p>7. Click on the button and check if the message is displayed</p>
      <button type="button" data-cy="MessageButton" class="btn btn-warning"  onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}>Click me</button>
         <Fade in={open}>
        <div id="example-fade-text" class="text-primary font-weight-bold text-uppercase">
        Congratulations, you have successfully clicked the button!
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
