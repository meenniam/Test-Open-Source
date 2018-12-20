import React ,{Component} from 'react'
import './RegisterPage.css'
import axios from 'axios'

import validation from './validation'
import {withRouter} from 'react-router-dom'

class RegisterPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      firstName:'',
      lastName: '',
      username: '',
      password: '',
      confirmPass: '',
      errors: {}
    }
  }
  handleFirstName(e){
    this.setState({
      firstName: e.target.value
    })
  }
  handleLastName(e){
    this.setState({
      lastName: e.target.value
    })
  }

  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  handleConPassword(e){
    this.setState({
      confirmPass: e.target.value
    })
  }

  isValid(){
    const {errors,isValid} = validation(this.state)

    if(!isValid){

      this.setState({errors})
    }

    return isValid

  }

  handleRegis(){
    const {history} = this.props
    if(this.isValid()){
      this.setState({
        errors: {}
      })
      axios.post('https://agile-cliffs-83142.herokuapp.com/api/user',{
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        username: this.state.username,
        password: this.state.password
      })
      .then((res)=>{
        history.push('/')
      })
    }
  }

  render(){
    const {errors} = this.state
    return(
      <div className="registerPage">
        <div className="registerCard">
          <h2>Register Form</h2>
          <div className="formRegis">
            <div>
              <h3>Firstname</h3>
              <input type="text" onChange={this.handleFirstName.bind(this)}></input>
              <label>{errors.firstName}</label>
            </div>
            <div>
              <h3>Lastname</h3>
              <input type="text" onChange={this.handleLastName.bind(this)}></input>
              <label>{errors.lastName}</label>
            </div>
            <div>
              <h3>username</h3>
              <input type="text" onChange={this.handleUsername.bind(this)}></input>
              <label>{errors.username}</label>
            </div>
            <div>
              <h3>password</h3>
              <input type="password" onChange={this.handlePassword.bind(this)}></input>
              <label>{errors.password}</label>
            </div>
            <div>
              <h3>confirm password</h3>
              <input type="password" onChange={this.handleConPassword.bind(this)}></input>
              <label>{errors.confirmPass}</label>
            </div>

          </div>
          <hr></hr>
          <div className="btn-regis">
            <button onClick={this.handleRegis.bind(this)}>Confirm</button>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(RegisterPage)
