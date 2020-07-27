import React from 'react';

function TodoItem(props) {
    const getStyle = () => {
        return{
            textDecoration: props.completed ? 'line-through' : 'none',
        }
    }
    const getClass = () => {
        return props.completed ? 'col-span-3 text-gray-500' : 'col-span-3 text-gray-700'
    }
    
    return(
        
            <div className="grid grid-cols-5 mt-1">
                    <div className="col-span-1 text-center">
                            <input type="checkbox" 
                                   onChange={() => props.markComplete(props.id)}
                                   checked={props.completed}
                            />
                    </div>
               
                    <span className={getClass()} style={getStyle()}>{props.task}</span>
                    <button className="col-span-1 text-purple-500" onClick={() => props.deleteTodo(props.id)}>x</button>
            </div>
            
      
    )
}


export default TodoItem;

