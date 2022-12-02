import React,{useState} from 'react'
import Select from "react-select";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import  'react-multiple-select-dropdown-lite/dist/index.css';
import './Dropdown.css';



function Dropdowns() {
  const [selects,setSelects]=useState();
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
 const options = [
  {value: "opcja 01", label: "opcja 01"},
  {value: "opcja 02", label: "opcja 02"},
  {value: "opcja 03", label: "opcja 03"},
  {value: "opcja 04", label: "opcja 04"},
  {value: "opcja 05", label: "opcja 05"},
  {value: "opcja 06", label: "opcja 06"},
  
 ];

  return (
    <>

    <section class="dropdown-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 my-5 p-2">
          <h1 class="font-weight-bold text-uppercase text-light title">Dropdown</h1>
          </div>
        
        
       
          
        <div class="col-sm-7"><div class="p-5 border rounded bg-success tasks">
          <h3 class="font-weight-bold text-uppercase text-center text-light">Tasks</h3>
    
          <p class="text-light">1. Select your favourite sport</p>
          <Dropdown.Menu show value={selects} onChange={e=>setSelects(e.target.value)}>
            <Dropdown.Item eventKey="1">Tenis</Dropdown.Item>
            <Dropdown.Item eventKey="2">Football</Dropdown.Item>
            <Dropdown.Item eventKey="3">Volleyball</Dropdown.Item>
            <Dropdown.Item eventKey="4">Basketball</Dropdown.Item>
          </Dropdown.Menu>
          <h3>{selects}</h3>
          <br></br><br></br><br></br><br></br><br></br><br></br>

          <p class="text-light">2. Search for option1 and select it</p>
          <Select
          className="select"
           isMulti 
           options={options}
           isClearable={true}
           isSearchable={true}
           isDisabled={false}
           isLoading={false}
           isRtl={false}/>
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
      <h4 class="text-warning mt-4">You selected: {value}</h4>
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

export default Dropdowns