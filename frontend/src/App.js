import React from "react";
import HomePage from './Componnets/home.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from './Componnets/PrivateRoute';
import { LoginPage } from "./Componnets/LoginPage";

export default class App extends React.Component {
  render() {
      return (
              <div className="container-fluid">
                      <Router>
                          <div>
                              <PrivateRoute exact path="/" component={HomePage} />
                              <Route path="/login" component={LoginPage} />
                          </div>
                      </Router>
                  </div>
      );
  }
}
