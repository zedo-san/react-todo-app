import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    // const todoElement = props.todos.map( todo => {
    //     console.log(todo.task)
    //     if(todo.task.toLowerCase() === props.mySearch.toLowerCase()){
    //         return <TodoItem
    //                 key={todo.id} 
    //                 taskId={todo.id} 
    //                 task={todo.task} 
    //                 completed={todo.completed} />
    //     }
    //     if(props.mySearch === ''){
    //         return <TodoItem
    //                 key={todo.id} 
    //                 taskId={todo.id} 
    //                 task={todo.task} 
    //                 completed={todo.completed} />
    //     }
        
                
    //   });
    function searchFilter(search) {
        return search.task.toLowerCase().includes(props.mySearch);
    }
    function handleTodos() {
        if(props.mySearch.length > 0){
            return props.todos.filter(searchFilter);
        }
        else{
            return props.todos
        }
    }
    const todos = handleTodos();
    return (
        <div>
            <h3>Tasks ({props.todos.length > 0 ? props.todos.length : 0})</h3>
            
            <table>
                {todos.map(todo => {
                    return <TodoItem
                    key={todo.id} 
                    taskId={todo.id} 
                    task={todo.task} 
                    completed={todo.completed} />
                })}
                
            </table>
            
        </div>
            
    );
}

export default TodoList;