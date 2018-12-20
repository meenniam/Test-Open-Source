import React, { Component } from 'react';
import NewsPageOwnList from './NewsPageOwnList.js'
import Navbar from '../navbar'


class NewsPageOwn extends Component {
  componentDidMount(){
    console.log(localStorage.getItem('id'));
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="newsPage">
          <NewsPageOwnList></NewsPageOwnList>
        </div>
      </div>
    );
  }
}

export default NewsPageOwn;
