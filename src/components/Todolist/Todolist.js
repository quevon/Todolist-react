import React, {useState} from 'react'
import './Todolist.css'
import TodoItem from './TodoItem'

const Todolist = () =>{
    const [state, setState] = useState({
        todo: '',
        todolist: []
    })
    const { todo, todolist} = state
    
    const handleOnChange = (e) => {
        const {name, value} = e.target

        setState({...state, [name]: value })
    }

    const createTodo =  () =>{
        const list = todolist
        list.push(todo)

        setState({todo: '', todolist: list})
    }
    const deleteTodo =  (index) =>{
        const list = todolist
        list.splice(index, 1)

        setState({todo: '', todolist: list})
    }
    return (
        <div className="todolist-container">
           <div className="form-wrapper">
                <input 
                    type="text" 
                    name="todo"
                    placeholder="Create todolist"
                    value={todo}
                    onChange={handleOnChange}    
                />
                <button onClick={createTodo}>Add</button>
           </div>
           <div className="table-main">
               {
                   todolist.length ?
                    todolist.map((value, index) => {
                        return(
                            <TodoItem
                                key={index}
                                index={index}
                                value={value}
                                deleteTodo={deleteTodo}
                            />
                        )
                    }) : <span> No Records found</span>
               }
               
           </div>
        </div>
      );
}

export default Todolist;