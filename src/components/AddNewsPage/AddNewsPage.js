import React,{Component} from 'react'
import "./AddNewPage.css"
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import Navbar from '../navbar'

class AddNewsPage extends Component{
  constructor(props){
    super(props)
    this.state={
      title: '',
      detail: '',
      error: ''
    }
  }

  componentDidMount(){
    const {params} = this.props.match
    if(params.id){

      axios.get('http://agile-cliffs-83142.herokuapp.com/api/news/'+params.id)
      .then((res)=>{
        console.log(res);
        this.setState({
          title: res.data[0].title,
          detail:res.data[0].detail
        })
      })
    }
  }

  handleTitle(e){
    this.setState({title: e.target.value})
  }
  handleDetail(e){
    this.setState({detail: e.target.value})
  }

  handleSave(){
    const {history} = this.props
    const {params} = this.props.match
    if(params.id){
      axios.put('http://agile-cliffs-83142.herokuapp.com/api/news/'+params.id,{
        title: this.state.title,
        detail: this.state.detail
      })
      .then((res)=>{
        console.log(res);
        history.push('/home')
      })
      .catch(err=>{
        this.setState({error: "message eror"})
      })
    }
    else {
      axios.post('http://agile-cliffs-83142.herokuapp.com/api/news',{
        title: this.state.title,
        detail: this.state.detail,
        user: parseInt(localStorage.getItem('id'))
      })
      .then((res)=>{
        console.log(res);

        history.push('/home')
      })
      .catch(err=>{
        this.setState({error: "message eror"})
      })
    }
    this.setState({
      detail:'',
      title: ''
    })
  }
  handleCansel(){
    const {history} = this.props
    history.push('/')
  }
  render(){
    const {title,detail} = this.state
    return(
      <div>
        <Navbar></Navbar>
        <div className="addPage">
          <div className="form">
            <div>
              <h3>Title</h3>
              <input type="text" className="titleInput" value={title} onChange={this.handleTitle.bind(this)}></input>
            </div>
            <br></br>
            <div>
              <h3>Detail</h3>
              <textarea type="text" className="detailInput" value={detail} onChange={this.handleDetail.bind(this)}></textarea>
            </div>
            <br></br>
            <div style={{'testAlign':'center','color':'red'}}>
              <p>{this.state.error}</p>
            </div>
            <div className="divButton">
              <button className="btn-cansel" onClick={this.handleCansel.bind(this)}>CANSEL</button>
              <button className="btn-add" onClick={this.handleSave.bind(this)}>ADD</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(AddNewsPage)
