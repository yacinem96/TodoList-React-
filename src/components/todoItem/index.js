import React  from 'react';
import './style.css';

export const ToDoItem = ({item,removeTodo,completeTodo}) => {


  return (
    <div className="card mb-3">
      <div className="card-body ">
        <div className="row">
          <div className="col-md-9 d-flex justify-content-start">
            <h3 className="card-title">{item.title}  </h3>
          </div>
          <div className="col-md-3 ">
            <button onClick={()=>removeTodo(item.id)}  className="btn btn-danger">x</button>
            {!item.isFinished && 
              <button onClick={()=>completeTodo(item.id)} className="btn btn-success">v</button>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};
