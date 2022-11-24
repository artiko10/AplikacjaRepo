import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Upload.css';
import MyImage from '../Upload/picture.jpeg'
import React,{useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import MultiRangeSlider from "multi-range-slider-react";




function Upload() {

  const [photoFile, setPhoto] = useState();

  const deletePhoto = () => {
    setPhoto();
};
 
  const Confirm = (e) => {
      e.preventDefault() 
      alert(URL.createObjectURL(photoFile))

  }

  const photoSwitch = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
};
   
const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>

    <section class="button-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 my-5 p-2">
          <h1 class="font-weight-bold text-uppercase text-light title">Upload</h1>
          </div>
        
        
       
          
        <div class="col-sm-7"><div class="p-5 border rounded bg-success tasks">
          <h3 class="font-weight-bold text-uppercase text-center text-light">Tasks</h3>
    
          <p class="text-light">1. Upload</p>
          
          <form Confirm={ Confirm } className="form-inline">
                <div className="form-group">
                <label class="text-light">Choose File to Upload: </label>
                <input type="file" className="form-control" onChange={photoSwitch} accept="image/*"/>
                </div> <br/>
                <button type="submit" className="btn btn-primary" >Upload File</button>
            </form>
 
        {photoFile && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(photoFile)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={deletePhoto} style={styles.delete}>
              Delete Photo
            </button>
          </div>
        )}
            
            <p class="text-light">2. Download</p>

          <img src={MyImage} alt="dsf.jpeg" /> <br></br>
          <a href={MyImage} download={MyImage}><button type='submit' className="btn btn-primary">Download Now</button></a>

          <p class="text-light">3. Print</p>
          <div class="print__section">
        
          <div ref={componentRef} className="card">
            <div class="float__start">
              <h3 class="card-title mb-0">Personal data</h3>
            </div>
            <hr />
            <div class="float__infoss">
              <ul>
                <li> Name : <span> Jan </span> </li>
                <li> Surname : <span> Kowalski </span> </li>
                <li> Gender : <span> Male </span> </li>
                <li> Email : <span> jan.kowalski@gmail.com</span> </li>
                <li> Age: <span> </span> 48 </li>
                <li> Profession : <span> Teacher </span> </li>
                <li> Hobby : <span>Sport</span> </li>
                <li> Phone : <span> 500 500 500 </span> </li> 
              </ul>
            </div>
          </div>
          <button onClick={handlePrint} className="print__button btn btn-primary">  Print </button> 
        </div>  
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

export default Upload

const styles = {
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};