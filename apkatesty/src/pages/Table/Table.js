import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Calendar.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';


function Tables() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <>
    
    <section class="button-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 my-5 p-2">
          <h1 class="font-weight-bold text-uppercase text-light title">Datepicker</h1>
          </div>
        
        
       
          
        <div class="col-sm-7"><div class="p-5 border rounded bg-success tasks text-light">
          <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>
    
          <p>1. Select a date from the beginning of the year to today</p>
          <DateRange
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
           moveRangeOnFirstSelection={false}
          ranges={state}
            />
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

export default Tables