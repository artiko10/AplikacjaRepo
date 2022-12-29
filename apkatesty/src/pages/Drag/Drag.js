import React, {useState, useRef} from "react"
import './Drag.css';

function Drag() {

  const [Caption, setCaption] = useState("")
    const [tasks, setTask] = useState([
        {
            todo: "Clean the room",
            isDragging: false, 
            complete: false   
        },
        {
            todo: "Throw away the garbage!",
            isDragging: false, 
            complete: false     
        }
    ])

    
    let taskMoveOver = useRef() 
    let taskMove = useRef()   

    function Begining(a,ind){
        taskMove.current = ind;
    }

    function taskAdd(){
      if(Caption.length > 0){
          setTask([...tasks, { todo:Caption, complete: false,isDragging: false    }])
      }
  }

    function GoTo(a,ind){
        taskMoveOver.current = ind

        const newArr = [...tasks]

        let endArr = []

        newArr.forEach(item=>{
            endArr.push({
                todo: item.todo,
                isDragging: false,
                complete: item.complete,
            })
        })

        endArr[ind].isDragging = true;

        setTask(endArr)


    }

    function TaskClick (a, ind){
      switch(a.detail){
          case 1:
              const taskArr = []
              tasks.forEach((item, i)=>{
                  if(i === ind){
                      taskArr.push({
                          todo: item.todo,
                          complete: !item.complete
                      })
                  }else{
                      taskArr.push(item)
                  }
              })

              setTask(taskArr)
              break;
          case 2:
              setTask( tasks.filter((item,iy)=> iy !== ind) )
              break;

          default:
              break;
      }
  }

    function Finish(a,ind){
        const firstArr = [...tasks]

        const elementMaster = firstArr[taskMove.current]
        firstArr.splice(taskMove.current, 1)
        firstArr.splice(taskMoveOver.current, 0, elementMaster)

        taskMove.current = null;
        taskMoveOver.current = null;

        let addArr = []

        firstArr.forEach(item=>{
            addArr.push({
                todo: item.todo,
                complete: item.complete,
                isDragging: false
            })
        })

        setTask(addArr)
    }

    
    return (
      <>
  
      <section class="drag-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 offset-sm-2 my-5 p-2">
            <h1 class="font-weight-bold text-uppercase text-light title text-center">Drag & Drop</h1>
            </div>
          
          
         
            
          <div class="col-sm-8 offset-sm-2"><div class="p-5 border rounded bg-success tasks ">
            <h3 class="font-weight-bold text-uppercase text-center text-light my-5 mt-5">Tasks</h3>
            <div class="textTask">
            <p class="text-light">1. Verify correct operation of adding, deleting and moving new tasks</p>
            </div>
      
            <div className="taskContainer" class="todoApp">
            <input onChange={a=> setCaption(a.target.value)} className="inputAddTask" type="text" placeholder="type a new task" />
            <button onClick={()=> taskAdd()} className="addTaskButton">add task</button>
            <div className="TaskDisplayContainer">
                {tasks.map((todo, ind)=>(
                    <React.Fragment>

                    <h3 className="TaskCaption" onClick={a=> TaskClick(a, ind)} draggable droppable onDragStart={a=> Begining(a,ind)} style={{textDecoration: todo.complete ? "line-through" : "none", background: todo.complete ? "red" : null}} onDragEnter={a=> GoTo(a,ind)} onDragEnd={a=> Finish(a,ind)}  >{todo.todo}</h3>
                    {todo.isDragging ?  <div className="drag-indicator"></div> : null}
                   
                    </React.Fragment>
                    
                ))}
            </div>
        </div>

          </div></div>
          
          </div>
      </div>   
      </section>
      </>
    );

    

  }
  
  export default Drag