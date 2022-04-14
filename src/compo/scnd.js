import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { add } from '../slices/todoslice'
import { useSelector, useDispatch } from 'react-redux'

export default function Scnd() {

    const dispatch = useDispatch()
    const [task, setTask] = useState()

    const data = useSelector(state => state.todo.state)
    
    const onClick = (e) => {
        const rand= Math.floor((Math.random()*10000))
        dispatch(add({ task,  rand}))
    }

    return (
      <div>
        {/* {console.log(id)} */}
        <h3>Add Task</h3>
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
        />
       <Link to="/"> <button onClick={onClick}>Add</button> </Link>
        <br />
        <br />
        <br />
        
          <button>See Table</button>
        
        {/* {console.log(data)} */}
      </div>
    );
}
