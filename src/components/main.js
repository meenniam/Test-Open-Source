import React from 'react'

import {Switch,Route} from 'react-router-dom'
import NewsPage from './NewsPage/NewsPage'
import AddNewsPage from './AddNewsPage/AddNewsPage.js'
import LoginPage from './LoginPage/LoginPage'
import NewsPageOwn from './NewsPageOwn/NewsPageOwn'

import RegisterPage from './RegisterPage/RegisterPage'


const main = ()=>(
  <div>
    <Switch>
      <Route axact path="/home" component={NewsPage}></Route>
      <Route axact path="/register" component={RegisterPage}></Route>
      <Route axact path="/news" component={NewsPageOwn}></Route>
      <Route exact path="/addpage" component={AddNewsPage}/>
      <Route exact path="/addpage/:id" component={AddNewsPage}/>
      <Route axact path="/" component={LoginPage}></Route>
    </Switch>
  </div>
)

export default main
