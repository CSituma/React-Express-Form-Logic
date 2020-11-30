import React from 'react'
import Login from "./components/login/login"
import Dashboard from "./components/login/dashboard"
import Register from "./components/login/register"

import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

const App =()=> {

  
  
    return (
      <Router>
        <Switch>
     
        <Route path='/' exact component={Login}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/register' exact component={Register}/>
  
      
       </Switch>
      </Router>
    )
  
}

export default App;
