import React from 'react';

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div className="mt-2 mb-2">
                <div className="mx-auto">
                    {this.props.isLoggedIn ? <LogoutButton handleLogout={this.props.handleLogout}/> : <LoginButton handleLogin={this.props.handleLogin}/>}
                </div>
            </div>
        )
    }
}

function LogoutButton(props) {
    return(
        <div className="grid grid-cols-2">
            <span className="text-right mr-3">Welcome</span>
            <button onClick={props.handleLogout} className="text-left">| <span className="underline text-purple-500 ml-3">Logout</span></button>
        </div>
    )
}
function LoginButton(props) {
    return(
        <div className="grid grid-cols-2">
            <span className="text-right mr-3">You are not logged in</span>
            <button onClick={props.handleLogin} className="text-left">| <span className="underline text-purple-500 ml-3">Login</span></button>
        </div>
    )
}
export default LoginControl;