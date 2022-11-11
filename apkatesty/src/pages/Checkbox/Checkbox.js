import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

const Sports = [
  { name: "Football" },
  { name: "Basketball" },
  { name: "Volleyball" },
  { name: "Golf" },
  { name: "Tenis" }
];

function Checkbox() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(Sports);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  const [checked, setChecked] = React.useState(true);
  return (
    <>

<section class="button-section">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 my-5 p-2">
      <h1 class="font-weight-bold text-uppercase text-light title">Checkbox</h1>
      </div>
    
    
   
      
    <div class="col-sm-7"><div class="p-5 border rounded bg-success tasks text-light">
      <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>

      <p>1. Cofirm you can select only one radio button</p>
     
      <Form>
      {['radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <Form.Check
           
            label="1"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            
            label="2"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
        </div>
      ))}
    </Form>
     
    
        
      <p>2. Find which one is selected</p>
    
    <Form.Check 
     defaultChecked={checked}
     onChange={() => setChecked(!checked)}
            label={`Option one`}
          />
         <Form.Check
            label={`Option two`} 
          />
      <p>3. Find the bug</p>
      
      <Form>
        <div className="mb-3">
          <Form.Check 
            label={`Yes`}
          />
          <Form.Check
            label={`No`} 
          />
        </div>
    </Form>
        
      <p>4. Confirm last field is disabled</p>
      <Form>
      
        <div className="mb-3">
          <Form.Check
            inline
            label="1"
          
           
          />
          <Form.Check
            inline
            label="2"
            
           
          />
          <Form.Check
            inline
            disabled
            label="3 (disabled)"
            
           
          />
        </div>
      
    </Form>

      <p>5. Confirm that all options are selected</p>
      <form className="form w-100">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">Select all</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
        
    </div></div>
    <div class="col-sm-4 col1 my-5 offset-sm-1"><div class="p-5 border rounded bg-success text-light">
     
     <h3 class="text-center">On completion of this exercise, 
     you can learn the following concepts:</h3>
       
     <ul>
       <li>click()</li>  
       <li>isSelected()</li> 
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

export default Checkbox