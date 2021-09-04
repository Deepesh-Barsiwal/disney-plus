import React from 'react'
import Navbar from './Navbar'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './Home'
import Falcon from './Falcon'
import Hanuman from './Hanuman'
import Alladin from './Alladin'
import Descendient from './Descendient'
import War from './War'
const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/falcon" component={Falcon}/>
        <Route exact path="/hanuman" component={Hanuman}/>
        <Route exact path="/alladin" component={Alladin}/>
        <Route exact path="/descendient" component={Descendient}/>
        <Route exact path="/war" component={War}/>
        <Redirect to="/"/>
      </Switch>
    </>
  )
}

export default App
