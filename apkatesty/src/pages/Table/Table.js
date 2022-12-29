import React, {useState} from 'react'
import MockData from '../Table/MOCK_DATA.json'



function Tables() {
 
const [data, setdata] = useState(MockData)
const [order, setorder] = useState("ASC")
const sorting = (col) => {
  if (order === "ASC") {
    const sorted = [...data].sort((a, b) =>
    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    );
    setdata(sorted);
    setorder("DSC");
  }

  if (order === "DSC") {
    const sorted = [...data].sort((a, b) =>
    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
    );
    setdata(sorted);
    setorder("ASC");
  }
};

  return (
    <>
    
    <section class="button-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2 my-5 p-2">
          <h1 class="font-weight-bold text-uppercase text-light title text-center">Table</h1>
          </div>
        
        
       
          
        <div class="col-sm-8 offset-sm-2"><div class="p-5 border rounded bg-success tasks text-light">
          <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>
    
          <p>1. Sort the table</p>
         <div className='container'>        
          <table id="MyTable" className="table text-light" >
            <thead>
              <th onClick={()=>sorting("first_name")}>Name</th>
              <th onClick={()=>sorting("last_name")}>Last name</th>
              <th onClick={()=>sorting("car")}>car</th>
              <th onClick={()=>sorting("color")}>color</th>
              <th onClick={()=>sorting("city")}>city</th>
            </thead>
            <tbody>
              { data.map((d)=>(
                <tr key={d.id}>
                  <td>{d.first_name}</td>
                  <td>{d.last_name}</td>
                  <td>{d.car}</td>
                  <td>{d.color}</td>
                  <td>{d.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
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

export default Tables