import React,{Component} from 'react'
import './LoginPage.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class LoginPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      user:'',
      password: ''
    }
  }
  handleUser(e){
    this.setState({user: e.target.value})
  }
  handlePassword(e){
    this.setState({password: e.target.value})
  }

  handleLogin(){
    const {history} = this.props
    axios.post('https://agile-cliffs-83142.herokuapp.com/api/user/auth',{
      username: this.state.user,
      password: this.state.password
    })
    .then((res)=>{
      console.log(res);
      localStorage.setItem('firstName', res.data.first_name)
      localStorage.setItem('id', res.data.id)
      history.push('/home')
    })

    this.setState({
      user: '',
      password: ''
    })
  }

  handleRegis(){
    const {history} = this.props
    history.push('/register')
  }
  render(){
    return(
      <div className="loginPage">
        <div className="loginCard">
          <div className="loginForm">
            <div>
              <h1>Login Form</h1>
            </div>
            <div className="userInput">
              <h3>User</h3>
              <input  type="text" onChange={this.handleUser.bind(this)}></input>
            </div>
            <div className="passInput">
              <h3>Password</h3>
              <input  type="password" onChange={this.handlePassword.bind(this)}></input>
            </div>
            <br></br>
            <div className="btn-login">
              <button onClick={this.handleLogin.bind(this)}>LOGIN</button>
            </div>
            <div>
              <a href="" onClick={this.handleRegis.bind(this)}>Register New User</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginPage)
