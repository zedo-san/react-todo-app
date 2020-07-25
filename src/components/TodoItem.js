import React from 'react';

function TodoItem(props) {
    const getStyle = () => {
        return{
            textDecoration: props.completed ? 'line-through' : 'none',
        }
    }
    const getClass = () => {
        return props.completed ? 'ml-2 text-gray-500' : 'ml-2 text-gray-700'
    }
    
    return(
        <div style={getStyle()}>
            <input type="checkbox" 
                    className=""
                    onChange={() => props.markComplete(props.id)}
                    checked={props.completed}/>
            <span className={getClass()}>{props.task}</span>
        </div>
    )
}


export default TodoItem;

