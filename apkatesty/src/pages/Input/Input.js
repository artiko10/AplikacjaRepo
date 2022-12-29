import React from 'react'
import Form from 'react-bootstrap/Form';

function Input() {
  return (
    <>

    <section class="input-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2 my-5 p-2">
          <h1 class="font-weight-bold text-uppercase text-light title text-center">Input</h1>
          </div>
        
        
       
          
        <div class="col-sm-8 offset-sm-2"><div class="p-5 border rounded bg-success tasks text-light">
          <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>
    
          <p>1. Enter your name and press TAB</p>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter name" />
       
      </Form.Group>

      <p>2. Copy the text from input</p>
      <Form.Group className="mb-3">
        <Form.Control placeholder="sports"
         defaultValue="football"/>
      </Form.Group>

      <p>3. Enter the password and clear it</p>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"  />
      </Form.Group>
     
      </Form>
          <p>4. Check if the field is disabled</p>
          <Form.Group className="mb-3">
      
      <Form.Control placeholder="Disabled input" disabled />
    </Form.Group>
        </div></div>
        </div>
    </div>   
    </section>
    </>
  );
}

export default Input