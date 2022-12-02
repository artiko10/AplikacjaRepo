import React from 'react'
import Form from 'react-bootstrap/Form';

function Input() {
  return (
    <>

    <section class="input-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 my-5 p-2">
          <h1 class="font-weight-bold text-uppercase text-light title">Input</h1>
          </div>
        
        
       
          
        <div class="col-sm-7"><div class="p-5 border rounded bg-success tasks text-light">
          <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>
    
          <p>1.Enter your name and press TAB</p>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter name" />
       
      </Form.Group>

      <p>2. Copy the text from input</p>
      <Form.Group className="mb-3">
        <Form.Control placeholder="sports"
         defaultValue="football"/>
      </Form.Group>

      <p>3. Enter the password and check if it is properly secured</p>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"  />
      </Form.Group>
     
      </Form>
            
          <p>4.Chek if the field is readOnly</p>
          <Form.Control type="text" placeholder="Readonly input here..." readOnly defaultValue="nothing can be entered here"/>
          <p>5. Check if the field is disabled</p>
          <Form.Group className="mb-3">
      
      <Form.Control placeholder="Disabled input" disabled />
    </Form.Group>
        </div></div>
        
        <div class="col-sm-4 col1 my-5 offset-sm-1 "><div class="p-5 border rounded bg-success text-light">
         
         <h3>In these exercises, you will learn such functions as:</h3>
           
         <ul>
           <li>Java calendar & moment.js</li>  
           <li>How to set dynamic dates</li> 
           <li>How to handle calendar elements</li>  
           
        
           
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

export default Input