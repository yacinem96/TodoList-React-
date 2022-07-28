import React ,{useState} from 'react';


export const AddTodo = ({addTodo})=> {
  const [todo,setTodo]= useState("");

  return (
    <div className="row">
      <div className="col-md-10">
        <input type="text" id="Title" onChange={(e)=>{setTodo(e.target.value)}} placeholder="add todo" className="form-control" />
      </div>
      <div className="col-md-2">
        <button onClick={()=>{addTodo(todo); console.log(todo)}}  className="btn btn-primary w-100">Add</button>
      </div>
    </div>
  );

};
