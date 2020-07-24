import React from 'react';

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.taskId,
            task: props.task,
            completed: props.completed
        }
        
        this.changeState = this.changeState.bind(this);
        this.setItemState = this.setItemState.bind(this);
    }
    componentDidMount() {
        this.setItemState();
    }
    
    
    setItemState() {
        const taskHolder = document.getElementById("task"+this.state.id);
        const taskCheckbox = document.getElementById("taskCheckbox"+this.state.id);

        if(this.state.completed){
            taskHolder.style.textDecorationLine = "line-through";
            taskCheckbox.checked = true;
        }
        else{
            taskHolder.style.textDecorationLine = "none";
            taskCheckbox.checked = false;
        }
    }
    changeState() {
        this.setState({
            completed: !this.state.completed
        }, () => this.setItemState());
    }

    render() {
        
        return(
            <tr>
                <td>
                    <input 
                        type="checkbox" 
                        onClick={this.changeState} 
                        id={"taskCheckbox"+this.state.id}
                    /> 
                </td>
                <td>
                    <span id={"task"+this.state.id}>{this.state.task}</span>
                </td>
                
            </tr>
            
        )
    }
}

export default TodoItem;

