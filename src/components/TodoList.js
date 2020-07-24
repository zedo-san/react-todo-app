import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    const todoElement = props.todos.map( todo => {
        console.log(todo.task)
        if(todo.task.toLowerCase() === props.mySearch.toLowerCase()){
            return <TodoItem
                    key={todo.id} 
                    taskId={todo.id} 
                    task={todo.task} 
                    completed={todo.completed} />
        }
        if(props.mySearch === ''){
            return <TodoItem
                    key={todo.id} 
                    taskId={todo.id} 
                    task={todo.task} 
                    completed={todo.completed} />
        }
        
                
      });


    return (
        <div>
            <h3>Tasks ({props.todos.length > 0 ? props.todos.length : 0})</h3>
            
            <table>
                {todoElement}
            </table>
            
        </div>
            
    );
}

export default TodoList;