import React from 'react';
import { render } from '@testing-library/react';



class CreateTodo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            taskInput: ''
        };
        this.taskInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleTodoSubmit = this.handleTodoSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({
            taskInput: event.target.value
        });
    }
    handleTodoSubmit(e) {
        this.props.addTodo(this.state.taskInput);
        this.taskInput = '';
        e.preventDefault();
        
    }
    render() {
        
        return (
            <form onSubmit={(e) => this.handleTodoSubmit(e)}>
                <input type="text" placeholder="Add Task ..." onChange={this.handleChange} ref={this.taskInput}/>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default CreateTodo;