import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Login";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basename="/kontakt">
          <Switch>
              <Route exact path="/login">
                  <Login />
              </Route>
              <Route path="/">
                  <App />
              </Route>
          </Switch>
      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your content to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
