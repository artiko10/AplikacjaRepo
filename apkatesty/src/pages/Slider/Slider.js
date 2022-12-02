import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Slider.css';

function Slider() {

    const [data,setData]=useState(0)
    const [grade,setGrade]=useState('1')
  
    const [begining,setbegin]=useState(0)
    const [ending,setending]=useState(51)

    useEffect(()=>{
        if(data == 0){
          setGrade("1")
        }else if(data == 30){
          setGrade("2")
        }else if(data == 50){
          setGrade("3")
        }else if(data == 70){
          setGrade("4")
        }else if(data == 90){
          setGrade("5")
        }else if(data == 100){
          setGrade("6")
        }
      },[data])

return (
    <>

<section class="slider-section">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 my-5 p-2">
      <h1 class="font-weight-bold text-uppercase text-light title">Slider</h1>
      </div>
    
    
   
      
    <div class="col-sm-7"><div class="p-5 border rounded bg-success tasks text-light">
      <h3 class="font-weight-bold text-uppercase text-center">Tasks</h3>

      <h5 class="text-light my-5">1. Check the percentage range for the grade</h5>
          <div>
            <input type='range' min='0' max="100" step="1" value={data} onChange={(e)=>setData(e.target.value)}/>
            <h5>{data} %</h5>
            <h5 className="text-danger">Grade: {grade}</h5>
          </div>
          <h5 class="text-light my-5">2. Check the minimum and maximum range for both sliders </h5>
          <input type='range' min='0' max="50" step="1" value={begining} onChange={(e)=>setbegin(e.target.value)}/>
            <h5>from: {begining}</h5>
            <input type='range' min='51' max="100" step="1" value={ending} onChange={(e)=>setending(e.target.value)}/>
            <h5>to: {ending}</h5>
            <h5 class="text-light my-5">3. Check if this slider is disabled</h5>
            <label for="disabledRange" class="form-label">Disabled range</label>
            <input type="range" class="form-range" id="disabledRange" disabled></input>
        
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
export default Slider