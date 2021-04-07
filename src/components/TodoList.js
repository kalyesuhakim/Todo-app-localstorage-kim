import { IconButton } from '@material-ui/core'
import { CheckCircle, Delete, Edit } from '@material-ui/icons'
import React from 'react'

const TodoList = ({todos,setTodos,setEditTodo}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const handleComplete = (todo) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {...item, completed: !item.completed}
            }
            return item;
        }));
    }
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id ===id);
        setEditTodo(findTodo);
    }
    return (
        <div className="">
           {
               todos.map((todo) => (
                   <li className="list-item" key={todo.id}>
                       <input type="text" value={todo.title} className={`list ${todo.completed ? "complete" : ""}`} onChange={e=>e.preventDefault()} />
                       <div>
                           <IconButton onClick={() => handleComplete(todo)} >
                               <CheckCircle className="button-complete task-button"/>
                           </IconButton>
                           <IconButton onClick={() => handleEdit(todo)}>
                               <Edit className="button-edit task-button"/>
                           </IconButton>
                           <IconButton onClick={() => handleDelete(todo)}>
                               <Delete className="button-delete task-button" color="secondary" />
                           </IconButton>
                       </div>
                   </li>
               ))
           }
        </div>
    )
}

export default TodoList
