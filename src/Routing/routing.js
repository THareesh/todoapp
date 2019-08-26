import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from '../components/Home'
import Login from '../components/login'
import Sign from  '../components/sign'
 

class Routing extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                <Switch>
                    <Route exact={true} path="/"  component = {Home} />
                    <Route path="/home"  component = {Home} />
                    <Route path="/login"  component = {Login} />
                    <Route path="/sign"  component = {Sign} />
                </Switch>
                </Router>
            </React.Fragment>
        )
    }
}
export default Routing
