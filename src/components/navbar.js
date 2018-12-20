import React,{Component} from 'react'
import './navbar.css'
import {Link,withRouter} from 'react-router-dom'

class Navbar extends Component{
  handleLogout(){
    localStorage.removeItem('id')
    const {history} = this.props
    history.push('/')
  }
  render(){
    return(
      <div className="nav">
        <div className="row">
          <div className="column-50">
            <div className="logo">
              <img src="http://ku.90sjimg.com/element_origin_min_pic/17/03/02/489f5b921754ace7d3ed99b90d1fb0bf.jpg" width="70px"></img>
              <Link to="/home">Title</Link>
            </div>
          </div>
          <div className="column-50">
            <div>
              <ul>
                <li><a href="" onClick={this.handleLogout.bind(this)}>LOGOUT</a></li>
                <li><Link to="/addpage">ADD</Link></li>
                <li><Link to="/news">NEWS</Link></li>
                <li><Link to="/home">ALL</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)
