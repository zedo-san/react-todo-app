import React from 'react';











class MyTodo extends React.Component {
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
        this.callbackFunc = this.callbackFunc.bind(this);
    }
    callbackFunc = (searchMsg) => {
        this.setState({
            search: searchMsg
        })
    }
    render() {
        return (
            <center>
                <Clock />
                <SearchBar mySearch={this.callbackFunc}/>
                <TodoList todos={this.state.todos} mySearch={this.state.search} />
                
            </center>
        );
    }
    
}

export default MyTodo;