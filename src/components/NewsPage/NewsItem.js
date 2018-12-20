import React, { Component } from 'react';
import './NewsItem.css'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {displayBlock} from '../../Dux/modal'
class NewsItem extends Component {
  constructor(props){
    super(props)
    this.state ={
      storage: ''
    }
  }
  componentDidMount(){
    this.setState({
      storage: localStorage.getItem('id')
    })
  }
  handleEdit(){
    const {history,news} = this.props
    history.push('/addpage/'+news.id)
  }
  handleDelete(){
    const {history,news,displayBlock} = this.props
    const {location} = window

    displayBlock('block',news.id)
    /*axios.delete('http://agile-cliffs-83142.herokuapp.com/api/news/'+news.id)
    .then(res =>{
      console.log(res);
      location.reload()
    })*/
  }
  render() {
    const {news} = this.props
    return (
      <div className="newItem">
        <h3>{news.title}</h3>
        <div>
          <p>{news.detail}</p>
        </div>
        <div className="divButtonEdit">
          {(news.user+'' === this.state.storage)?
            <div>
              <button className="btn-edit" onClick={this.handleEdit.bind(this)}>Edit</button>
              <button className="btn-delete" onClick={this.handleDelete.bind(this)}>Delete</button>
            </div>
            :''}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>({})

const mapDispatchToProps = (dispatch)=>({
  displayBlock: (display,id) => dispatch(displayBlock(display,id))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NewsItem));
