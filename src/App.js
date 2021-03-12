import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';

import Homepg from './component/Homepg'
import LeadsIndex from './component/LeadsIndex'
import CreateForm from './component/Create/CreateForm'
import ReadLead from './component/Read/ReadLead'
import UpdateLead from './component/Update/UpdateLead'
import UpdateNote from './component/Update/UpdateNote'
import ReadDes from './component/Read/ReadDes'

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
                <Route exact path = "/leads/:id" component={ReadLead} />
                <Route exact path = "/leads/:id/edit" component={UpdateLead} />
                <Route exact path = "/leads/:id/notes/:id" component={ReadDes} />
                <Route exact path = "/leads/:id/notes/:id/edit" component={UpdateNote} />
              </Switch>
            
            </header>
          </div> 
        </Router>
      )
    }
    
    
}

export default App;
