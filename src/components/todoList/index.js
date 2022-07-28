import React ,{useState,useEffect} from 'react';
import { AddTodo } from '../addTodo';
import { ToDoItem } from '../todoItem';
import { todos } from '../../data';



export const TodoList = () => {

  const [todosl,setTodosl]= useState([]);

  useEffect(() => {
    setTodosl(todos);
  }, []);

  const addTodo=(title)=> {

    const item = { 
      id: new Date().getTime(),    
      title,
      isFinished:false
    };

    setTodosl([...todosl,item]);

  }

  const removeTodo=(id) => {
    setTodosl(todosl.filter((item) => {
      return(item.id!==id) 
     }))

  }

  const completeTodo=(id) => {
    setTodosl(todosl.map(e => {
      if (e.id===id) {
        e.isFinished=true;
      }
      return e
    }))
  }

  return (
    <div className="container">
      <h1>im to do list</h1>
      <div className="row mb-3">
        <div className="col-md-8 offset-md-2">
          <AddTodo addTodo={addTodo} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 offset-md-2">
        {
          todosl &&
         todosl.map((item) => { return <ToDoItem
          item={item}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          key={item.id}
         
        />
         })
          
        }
         
        </div>
      </div>
    </div>
  );
};
