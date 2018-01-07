import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Router, browserHistory } from 'react-router';
import Usercom from "./usercom"
import Home from './home';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './login';
import Sign from './signup';
import MissingShow from './MissingShow';
import MainPage from './Main-page';
import CrimeShow from "./CrimeShow";

// import  Report from "./report.js";


import registerServiceWorker from './registerServiceWorker';

const Allcomponents = () => (
    <Router history={browserHistory}>

        <Route path="/" component={MainPage} />
        <Route path="/home" component={Home} />
        <Route path="/MissingShow" component={MissingShow} />
        <Route path="/CrimeShow" component={CrimeShow} />
        <Route path="/signup" component={Sign} />
        <Route path="/login" component={Login} />
        <Route path="/usercom" component={Usercom} />


    </Router>

);




ReactDOM.render(<Allcomponents />, document.getElementById('root'));
registerServiceWorker();
