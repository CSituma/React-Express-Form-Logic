import React from 'react'
import Login from "./components/login/login"

import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

const App =()=> {

  
  
    return (
      <Router>
        <Switch>
     
        <Route path='/' exact component={Login}/>
  
      
       </Switch>
      </Router>
    )
  
}

export default App;
