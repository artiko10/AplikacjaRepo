import React from 'react'
import './Home.css';

function Home() {
  return (
    <>

    <section class="slider-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2 my-5 p-2">
          <h1 class="font-weight-bold text-uppercase text-light title text-center">Automated test learning application</h1>
          </div>
        
        
       
          
        <div class="col-sm-8 offset-sm-2"><div class="p-5 border rounded bg-success tasks text-light">
        <h3 class="font-weight-bold text-uppercase text-light title text-center">About project</h3>
    <p class="textHome">
    I would like to present an application that was done as part of an engineering thesis, on the topic "Automated test design of a web application using the Cypress Io tool". The application has been divided into several tabs between which we can navigate using the navigation bar at the top of the screen. These tabs have been divided thematically due to the components they contain, e.g. buton, dropdown, input, etc. Each tab has different tasks for the user to automate. I was able to automate the entire application in a separate project using Cypress.io tool.
    </p>
        
            
        </div></div>
        
        </div>
    </div>   
    
  
    </section>
    </>
  );
}

export default Home