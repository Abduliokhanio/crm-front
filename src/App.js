import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';

import Homepg from './component/Homepg'
import LeadsIndex from './component/LeadsIndex'
import CreateForm from './component/Create/CreateForm'
import ReadBlog from './component/Read/ReadLead'
import UpdateBlog from './component/Update/UpdateLead'

//Nav
import Navigationbar from './component/nav/Navigationbar'

class App extends Component {
  
    render(){
      return (
        <Router>
          <div>
            <header >
            <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>

              <Navigationbar/>

              <Switch>
                <Route exact path = "/" component={Homepg} />
                <Route exact path = "/leads" component={LeadsIndex} />
                <Route exact path = "/leads/new" component={CreateForm} />
                <Route exact path = "/leads/:id" component={ReadBlog} />
                <Route exact path = "/leads/:id/edit" component={UpdateBlog} />
              </Switch>
            
            </header>
          </div> 
        </Router>
      )
    }
    
    
}

export default App;
