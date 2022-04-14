import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteAc } from "../slices/todoslice";
import { useDispatch } from "react-redux";
import Third from "./third";
import { toggle } from "../slices/tablecntrlSlice";


export default function First() {
  
  const dispatch = useDispatch()

  const data = useSelector((state) => state.todo.state);


  const handleShow= ()=>{
    dispatch(toggle())
  }
  return (
    <div>
      <h3>Todo task</h3>
      <br />
      <br />
      <br />

      <Link to="/add">
        <button>Add Task</button>{" "}
      </Link>

      <br />
      <br />
      <button onClick={handleShow}>Show</button>
      <br />

      <Third />

      {/* {console.log(data)} */}
      <div className="printTable">
       
      </div>
    </div>
  );
}
