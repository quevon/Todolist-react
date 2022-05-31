import React from 'react';


export default function TodoItem(props){
    const {
        index,
        value,
        deleteTodo
    } = props
    return(
        <div key={index} className="row-wrapper">
            <span>{value}</span>
            <button>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
    )
    
}