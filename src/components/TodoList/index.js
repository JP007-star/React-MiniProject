import React from 'react'
import Slider from 'react-bootstrap/Switch';

/**
* @author
* @function TodoList
**/

export const TodoList = ({tasks,delTask,taskStatus}) => {
  return(
    <>
      {
        tasks.map((task ,index) =>(
            <div className="card m-3" key={index} >
            <div className="card-body">
              <p className="d-flex justify-content-center align-items-center">
                <span className='m-3' style={{textDecoration: task.status ? 'line-through': 'none'}}>{task.title}</span>                
                <Slider onChange={()=>taskStatus(task.id)}  />
                <button className='btn btn-outline-danger ' onClick={()=>delTask(task.id)}>X</button>
              </p>
            </div>
          </div>
        ))
      }
       
       
    </>
   )

 }