import React, { Component } from 'react';
import axios from 'axios'
import NewsPageOwnItem from './NewsPageOwnItem'

class NewsPageOwnList extends Component {
  constructor(props){
    super(props)
    this.state={
      news: []
    }

  }
  componentDidMount(){
    const id = parseInt(localStorage.getItem('id'))
    axios.get('http://agile-cliffs-83142.herokuapp.com/api/user/'+id+'/news')
    .then((res)=>{
      this.setState({news: res.data})
    })
  }
  render() {
    const newItem = this.state.news.map((val,ind)=>(
      <NewsPageOwnItem news={val} key={ind}></NewsPageOwnItem>
    ))
    return (
      <div className="">
        {newItem}
      </div>
    );
  }
}

export default NewsPageOwnList;
