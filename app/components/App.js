import React,{Component} from 'react';
import Stats from './Statistics';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from "./Nav";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Route path='/stats' component={Stats}/>
                </div>
            </Router>
        )
    }
}

export default App;