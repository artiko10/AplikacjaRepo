import { useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range';


function Calendar() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <>
    
    <section class="calendar-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2 my-5 p-2">
          <h1 class="font-weight-bold text-uppercase text-light title text-center">Datepicker</h1>
          </div>
        <div class="col-sm-8 offset-sm-2"><div class="p-5 border rounded bg-success tasks text-light">
          <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>
    
          <p>1. Select a date from the beginning of the year to today</p>
          <DateRange
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
           moveRangeOnFirstSelection={false}
          ranges={state}
            />
        </div></div>
        
        </div>
    </div>   
    </section>
    </>
  );
}

export default Calendar