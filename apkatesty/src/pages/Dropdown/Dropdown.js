import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import  'react-multiple-select-dropdown-lite/dist/index.css';
import './Dropdown.css';



function Dropdowns() {
  const [choice, setChoice]=useState('')
  const name=["Anna", "Jan", "Marcin", "Agata", "Konrad", "Paulina", "Jakub", "Krystyna", "Anna"]
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
 

  return (
    <>

    <section class="dropdown-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2 my-5 p-2">
          <h1 class="font-weight-bold text-uppercase text-light title text-center">Dropdown</h1>
          </div>
        
        
       
          
        <div class="col-sm-8 offset-sm-2"><div class="p-5 border rounded bg-success tasks">
          <h3 class="font-weight-bold text-uppercase text-center text-light">Tasks</h3>
    
          <p class="text-light">1. Select your favourite sport</p>
          <div class="select">
        <select>
            <option>--Select--</option>
            <option>Football</option>
            <option>Volleyball</option>
            <option>Basketball</option>
            <option>Golf</option>
        </select>
        <div class="select_arrow">
        </div>
    </div>
      

          <p class="text-light">2. Search for name and select it</p>
          <div className="main">
            <input className="inputDropdown" list="data" onChange={(e) =>setChoice(e.target.value)} placeholder="Search"/>
            <datalist id="data">
              {name.map((op)=><option className="optionName">{op}</option>)}
            </datalist>
            <h4 class="text-light my-3">{choice}</h4>
          </div>
          <p class="text-light">3. Choose one of the products and print all the options</p>
          <DropdownButton
      alignRight
      title="Select item"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="milk">milk</Dropdown.Item>
              <Dropdown.Item eventKey="bread">bread</Dropdown.Item>
              <Dropdown.Item eventKey="butter">butter</Dropdown.Item>
              <Dropdown.Item eventKey="potato">potato</Dropdown.Item>
              <Dropdown.Item eventKey="tomato">tomato</Dropdown.Item>
              <Dropdown.Item eventKey="cheese">cheese</Dropdown.Item>
             
      </DropdownButton>
      <h4 class="text-light mt-4">You selected: {value}</h4>
        </div></div>
        
       
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

export default Dropdowns