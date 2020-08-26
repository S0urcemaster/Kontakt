import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Login";
import theme from "./Theme";
import { ThemeProvider } from '@material-ui/core/styles';

// const [user, setUser] = React.useState(null);
// export const UserContext = React.createContext({user: null, setUser: () => {}});
export const UserContext = React.createContext(null);

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <BrowserRouter basename="/kontakt">
              <UserContext.Provider value={null}>
                  <Switch>
                      <Route exact path="/login">
                          <Login />
                      </Route>
                      <Route path="/">
                          <App />
                      </Route>
                  </Switch>
              </UserContext.Provider>
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your content to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
