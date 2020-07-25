import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillMount(){
        clearInterval(this.timerId);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="text-2xl">
                <p>{this.state.date.toLocaleTimeString()}</p>
                <hr className="mx-12"></hr>
            </div>
        )
    }
}

export default Clock;
