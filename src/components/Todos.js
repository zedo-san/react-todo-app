import React from 'react';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import Clock from './Clock';

class Todos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    task: 'Code',
                    completed: false
                },
                {
                    id: 2,
                    task: 'Fix bed',
                    completed: true
                },
                {
                    id: 3,
                    task: 'Exercise',
                    completed: false
                }
            ],
            search: '',
            newTask: '',
        }
        this.searchInput = this.searchInput.bind(this);
        this.addTask = this.addTask.bind(this);
        }
    
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
        
    }

    searchInput(toSearch) {
        this.setState({
            search: toSearch
        })
    }
    
    addTask = (newTask) => {
        this.setState({
            todos: [...this.state.todos, newTask]
        });
    }
    
    render() {
        let todos = this.state.todos;
        return (
            <div className="text-center mx-auto mt-5">
                <Clock />
                <div className="border mx-24 mt-4 py-6 max-w-xs mx-auto">
                    <SearchBar searchInput={this.searchInput}/>
                    <div className="text-left mx-12">
                        <TodoList todos={todos} markComplete={this.markComplete} search={this.state.search}/>
                        <CreateTodo addTask={this.addTask}/>
                    </div>
                </div>
                
            </div>
        );
    }
    
}

export default Todos;