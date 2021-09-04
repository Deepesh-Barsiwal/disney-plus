import React from 'react'
import Navbar from './Navbar'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './Home'
import Falcon from './Falcon'
import Hanuman from './Hanuman'
import Alladin from './Alladin'
import Descendient from './Descendient'
import War from './War'
import Manada from './Manada'
import Women from './Women'
import RightStuff from './RightStuff'
import Bad from './Bad'
import Snake from './Snake'
import Luca from './Luca'
import Loki from './Loki'
import Dinner from './Dinner'
import President from './President'
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
        <Route exact path="/manada" component={Manada}/>
        <Route exact path="/women" component={Women}/>
        <Route exact path="/rightStuff" component={RightStuff}/>
        <Route exact path="/bad" component={Bad}/>
        <Route exact path="/snake" component={Snake}/>
        <Route exact path="/luca" component={Luca}/>
        <Route exact path="/loki" component={Loki}/>
        <Route exact path="/dinner" component={Dinner}/>
        <Route exact path="/president" component={President}/>
        <Redirect to="/"/>
      </Switch>
    </>
  )
}

export default App
