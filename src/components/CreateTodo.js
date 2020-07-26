import React from 'react';



class CreateTodo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {};
        this.taskInput = React.createRef(); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        let newTodo = {
            id: Date.now(),
            task: this.taskInput.current.value,
            completed: false
        }
        this.props.addTask(newTodo);
        e.preventDefault();
        document.getElementById('taskInput').value = '';

    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mt-2 ml-3 flex">
                <input type="text" 
                        className="border px-3 py-1 w-2/3"
                        placeholder="Add Task ..." ref={this.taskInput} 
                        id='taskInput'/>
                <button type="submit" 
                        className="bg-purple-600 text-white px-2 py-1 rounded-sm ml-2">Add</button>
            </form>
        );
    }
}

export default CreateTodo;