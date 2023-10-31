import React, { useEffect, useState } from 'react'
import { TodoList } from '../TodoList'
import 'bootstrap/dist/css/bootstrap.css'
/**
* @author
* @function Todo
**/

export const Todo = (props) => {
    const [tasks,setTasks]=useState([])
    const [input,setInput]=useState('')

    useEffect(()=>{
       localStorage.setItem('todos',JSON.stringify(tasks))
    },[tasks])


    useEffect(()=>{
      const storedTodos=JSON.parse(localStorage.getItem('todos') || [])
      setTasks(storedTodos)
    },[])
    const addTask =()=>{
        if(input){
            const newTask={ 
                id: Date.now(),
                title :input,
                status:true
            }

            setTasks([...tasks,newTask]);
            setInput('');
        }
        console.log(tasks)
    }

    const delTask=(id)=>{
        const updatedTasks=tasks.filter((task)=> task.id !== id);
        setTasks(updatedTasks);
    }

    const taskStatusHandler=(id) =>{
      const updatedTodos = tasks.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
      setTasks(updatedTodos);
    }
  return(
    <>
        <div className="card m-3" >
          <div className="card-body">
            <p className="d-flex justify-content-center align-items-center">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Enter the Task  ..." 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button className='btn btn-primary m-3' onClick={addTask}> + </button>
            </p>
          </div>
        </div>
        <TodoList tasks={tasks}  delTask={delTask} taskStatus={taskStatusHandler} />
    </>
   )

 }