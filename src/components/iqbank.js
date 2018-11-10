import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import iqbank_bg from '../resources/images/iqbank.PNG';
import App from './app';

export default class Iqbank extends Component{
    render(){
        return(
            <div style={{}}>
                <Router>
                    <Route exact path='/' component={App}>
                    <Link to='/home'>hello</Link>
                    <Image src={iqbank_bg} fluid />
                    </Route>
                </Router>
            </div>
        );
    }
}