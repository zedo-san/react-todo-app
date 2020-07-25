import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            markComplete: props.markComplete,
            
        }
        this.searchFilter = this.searchFilter.bind(this);
        this.handleTodos = this.handleTodos.bind(this);
    }
    searchFilter = (search) => {
        return search.task.toLowerCase().includes(this.props.search.toLowerCase())
    }

    handleTodos() {
        if(this.props.search.length > 0){
            return this.props.todos.filter(this.searchFilter)
        }
        else{
            return this.props.todos;
        }
    }
    
    render() {
        const todos = this.handleTodos();
        return (
            <div className="mt-3">
                <h3 className="text-2xl font-bold text-center">Tasks (<span className="text-purple-600">{this.props.todos.length > 0 ? this.props.todos.length : 0}</span>)</h3>

                
                <div className="">
                {todos.map( todo => {
                    return <TodoItem  
                                key={todo.id} 
                                id={todo.id} 
                                task={todo.task} 
                                completed={todo.completed}
                                markComplete = {this.state.markComplete} 
                            />            
                })}
                </div>
                
              



                   
            </div>
        )
    }
}

export default TodoList;