/* New cleaned up version of App.js */
import React, {useState} from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, Router } from 'react-router-dom';

import axios from 'axios';

// Import the pages for the individual webapps 
import FormManager from './pages/FormManager/FormManager';
import FormFiller from './pages/FormFiller/FormFiller';
import FormReceiver from './pages/FormReceiver/FormReceiver';
import MockFormPage from "./pages/MockFormPage/MockFormPage";
import Login from './pages/Login/Login';
import history from "./history";

import './App.css';

axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = ["http://localhost:5000"];
    const token = localStorage.getItem("token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default function App() {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken || null);

  // Login functionality:
  if (!token) {
      return <Login setToken={setToken} />
  }

  return ( 
    <div>
      <Router history={history}>
        <Switch> 
          {/* Route to login page */}
          <Route exact path="/">
            <Login setToken={setToken} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          {/* Route to FormManager page */}
          <Route exact path="/form-manager">
            <FormManager />
          </Route>
          {/* Route to FormFiller page */}
          <Route exact path="/form-filler">
            <FormFiller />
          </Route>
          {/* Route to FormReceiver page */}
          <Route exact path="/form-receiver">
            <FormReceiver />
          </Route>
          {/* Route to mock form page (temporary) */}
          <Route exact path="/form">
            <MockFormPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );  
}
