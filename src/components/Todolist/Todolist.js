import React, {useState} from 'react'
import './Todolist.css'

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

        setState({...state, todolist: list})
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
                            <div className="row-wrapper">
                                <span>{value}</span>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        )
                    }) : <span> No Records found</span>
               }
               
           </div>
        </div>
      );
}

export default Todolist;