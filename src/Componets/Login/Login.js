
import React from 'react';
import { Link } from 'react-router-dom'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            userBool: false,
            passwordBool: false
        }

    }
    submitLogin = () => {
        if (!this.state.userBool && !this.state.passwordBool) {
            window.localStorage.setItem('isLogin', "true");
            this.props.history.push('/home')
        } else {
            window.localStorage.setItem('isLogin', "false");
            this.props.history.push('/')
        }

    }
    userNameChange = (e) => {
        this.setState({
            userName: e.target.value
        })
        if (e.target.value.toLowerCase() === 'guise') {
            this.setState({
                userBool: false
            })
        } else {
            this.setState({
                userBool: true
            })
        }

    }
    passwordChange = (e) => {
        this.setState({
            password: e.target.value
        })
        if (e.target.value.toLowerCase() === 'guise@123') {
            this.setState({
                passwordBool: false
            })
        } else {
            this.setState({
                passwordBool: true
            })
        }
    }
    render() {
        return (
            <div className="login_wrap">
                <h3>GUISE Login</h3>
                <div className="form_wrap">
                    <div className="form-group">
                        <label>User Name</label>
                        <input className="form-control" type="text" placeholder="Enter Your User Name" onChange={this.userNameChange} />
                        {this.state.userBool ?
                            <p className="text-danger">user name is incorrect.</p> : null}
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" placeholder="Enter Your Password" onChange={this.passwordChange} />
                        {this.state.passwordBool ?
                            <p className="text-danger">passowrd is incorrect.</p> : null}
                    </div>
                    <div className="button-group text-right mt-5">
                        <Link className="btn btn-success" onClick={this.submitLogin}>Submit</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;