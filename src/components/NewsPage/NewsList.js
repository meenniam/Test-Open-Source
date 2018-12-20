import React, { Component } from 'react';
import axios from 'axios'
import NewsItem from './NewsItem'

class NewsList extends Component {
  constructor(props){
    super(props)
    this.state={
      news: []
    }

  }
  componentDidMount(){
    axios.get('http://agile-cliffs-83142.herokuapp.com/api/news')
    .then((res)=>{
      this.setState({news: res.data})
    })
  }
  render() {
    const newItem = this.state.news.map((val,ind)=>(
      <NewsItem news={val} key={ind}></NewsItem>
    ))
    return (
      <div className="">
        {newItem}
      </div>
    );
  }
}

export default NewsList;
