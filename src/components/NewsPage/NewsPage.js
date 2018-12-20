import React, { Component } from 'react';
import NewsList from './NewsList.js'
import Navbar from '../navbar'

import Modal from '../Modal/Modal'


class NewsPage extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div>
        <Modal></Modal>
        <Navbar></Navbar>
        <div className="newsPage">
          <NewsList></NewsList>
        </div>
      </div>
    );
  }
}


export default NewsPage;
