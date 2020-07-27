import React from 'react';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import Clock from './Clock';
import LoginControl from './LoginControl'

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
            isLoggedIn: false
        }
        this.searchInput = this.searchInput.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
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
    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter( function(todo){
                return todo.id !== id
            })
        })
    }
    handleLogin() {
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogout() {
        this.setState({
            isLoggedIn: false
        })
    }
    render() {
        let todos = this.state.todos;
        let todoapp = <div className="border mx-24 mt-4 py-6 max-w-xs mx-auto">
                        <SearchBar searchInput={this.searchInput}/>
                        <div className="text-left mx-12">
                            <TodoList todos={todos} markComplete={this.markComplete} search={this.state.search} deleteTodo={this.deleteTodo}/>
                            <CreateTodo addTask={this.addTask}/>
                        </div>
                    </div>
                
        return (
            <div className="text-center mt-5">
                <Clock />
                <LoginControl isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
                <div className="mt-3 text-center">
                    <h1 className="text-4xl font-mono text-purple-700 font-bold max-w-xs mx-auto shadow-sm">Todo List App</h1>
                </div>
                {this.state.isLoggedIn ? todoapp : null}
                
                
            </div>
        );
    }
    
}

export default Todos;