import React from 'react';
import { render } from '@testing-library/react';



class CreateTodo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            taskInput: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
        this.sendNewTodo = this.sendNewTodo.bind(this);

    }
    handleChange(event) {
        this.setState({
            taskInput: event.target.value
        });
    }
    handleTodoSubmit(e) {
        e.preventDefault();
        this.sendNewTodo();
        
    }
    sendNewTodo = () => {
        this.props.addTodo(this.state.taskInput);
    }
    render() {
        
        return (
            <form onSubmit={this.sendNewTodo}>
                <input type="text" placeholder="Add Task ..." onChange={this.handleChange}/>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default CreateTodo;