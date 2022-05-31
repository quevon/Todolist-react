import React, {useState} from 'react'
import './Todolist.css'
import TodoItem from './TodoItem'

const Todolist = () =>{
    const [state, setState] = useState({
        todo: '',
        todolist: []
    })
    const [edit, setEdit] = useState({
        editTodo: '',
        editIndex: ''
    })

    const[ isUpdate, setIsUpdate] =useState(false)
    const { todo, todolist} = state
    const { editTodo, editIndex} = edit
    
    const handleOnChangeEdit = (e) => {
        const {name, value} = e.target
        setEdit({...edit, [name]: value })
    }

    const handleOnClickEdit = (index,value) => {
        setIsUpdate(true)
        setEdit({editTodo: value, editIndex: index})
    }
    const handleOnClickCancel = () => {
        setIsUpdate(false)
    }

    

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
    const upDateTodo =  (index) =>{
        const list = todolist
        list[index] = editTodo
        setState({...state, todolist: list})
        setIsUpdate(false)
        setEdit({editTodo:'', editIndex: ''})
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
                                handleOnClickEdit={handleOnClickEdit}
                            />
                        )
                    }) : <span> No Records found</span>
               }
               {
                   isUpdate?
                   <div className="form-wrapper">
                        <input 
                            type="text" 
                            name="editTodo"
                            placeholder="Update todolist"
                            value={editTodo}
                            onChange={handleOnChangeEdit}    
                        />
                            <button onClick={ () => upDateTodo(editIndex)}>Update</button>
                            <button onClick={handleOnClickCancel}>Cancel</button>
                    </div> : ''
               }
               
           </div>
        </div>
      );
}

export default Todolist;