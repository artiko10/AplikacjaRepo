import React from 'react'
import './Drag.css';
import Container from 'react-bootstrap/Container'
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable"
import {useState} from 'react';
import { SortableItem } from './Sort';
function Drag() {

  const [languages, setLanguages] = useState(["Poland", "Spain", "Germany", "England", "Egypt", "Norway"]);
    
    return (
      <>
  
      <section class="drag-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 my-5 p-2">
            <h1 class="font-weight-bold text-uppercase text-light title">Drag & Drop</h1>
            </div>
          
          
         
            
          <div class="col-sm-7"><div class="p-5 border rounded bg-success tasks ">
            <h3 class="font-weight-bold text-uppercase text-center text-light">Tasks</h3>
      
          
            <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            >
              <Container className="p-3" style={{"width": "50%"}} align="center">

              <h5 class="text-light">Sort countries in alphabetical order:</h5>
                <SortableContext
                  items={languages}
                  strategy={verticalListSortingStrategy}
                  >
                      {languages.map(language => <SortableItem key={language} id={language}/>)}
                </SortableContext>

              </Container>

            </DndContext>

          </div></div>
          
          <div class="col-sm-4 col1 my-5 offset-sm-1 "><div class="p-5 border rounded bg-success text-light">
           
           <h3>In these exercises, you will learn such functions as:</h3>
             
           <ul>
             <li>Java calendar & moment.js</li>  
             <li>How to set dynamic dates</li> 
             <li>How to handle calendar elements</li>  
             
          
             
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

      function handleDragEnd(event) {
        console.log("Drag end called");
        const {active, over} = event;
        console.log("ACTIVE:" + active.id);
        console.log("OVER:" + over.id);

        if(active.id !== over.id) {
          setLanguages((items) => {
            const activeIndex = items.indexOf(active.id);
            const overIndex = items.indexOf(over.id);
            console.log(arrayMove(items, activeIndex, overIndex));
            return arrayMove(items, activeIndex, overIndex);
          });
        }
      }

  }
  
  export default Drag