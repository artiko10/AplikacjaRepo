import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



function Forms() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>

    <section class="forms-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2 my-5 p-2">
          <h1 class="font-weight-bold text-uppercase text-light title text-center">Forms</h1>
          </div>
        
        
       
          
        <div class="col-sm-8 offset-sm-2"><div class="p-5 border rounded bg-success tasks text-light">
          <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>
    
          <p>1. Follow the positive and negative path of the form</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="inputFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
           />
           <Form.Control.Feedback type="invalid">
           Required field
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="inputUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
            Required field
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="inputLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"   
          />
           <Form.Control.Feedback type="invalid">
           Required field
            </Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group as={Col} md="3" controlId="inputWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="text" placeholder="Weight" required />
          <Form.Control.Feedback type="invalid">
          Required field
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="inputHeight">
          <Form.Label>Height</Form.Label>
          <Form.Control type="text" placeholder="Height" required />
          <Form.Control.Feedback type="invalid">
          Required field
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="inputCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
          Required field
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree terms"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
            
        </div></div>
        </div>
    </div>   
    </section>
    </>
  );
}

export default Forms