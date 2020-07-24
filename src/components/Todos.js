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
                    task: 'Get up',
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
            search: ''
        }

        this.mySearchCallback = this.mySearchCallback.bind(this);
        this.addTodoCallback = this.addTodoCallback.bind(this);

        }
    mySearchCallback = (searchMsg) => {
        this.setState({
            search: searchMsg
        })
    }
    addTodoCallback = (newTask) => {
        const addNewTask = {
            id: Date.now(),
            task: newTask,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, addNewTask]
        });
    }

    render() {
        return (
            <center>
                <Clock />
                <SearchBar mySearch={this.mySearchCallback}/>
                <TodoList todos={this.state.todos} mySearch={this.state.search} />
                <br/>
                <CreateTodo addTodo={this.addTodoCallback}/>
                <br/>
                
            </center>
        );
    }
    
}

export default Todos;