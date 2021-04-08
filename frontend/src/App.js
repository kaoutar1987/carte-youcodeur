import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/page/Home';
import About from './components/page/About';
import login from './components/page/Login';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import NotFound from './components/page/NotFound';
import AddUser from './components/users/addUser';
import EditUser from './components/users/EditUser';
import User from "./components/users/User";

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/login" component={login} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
         
          <Route component={NotFound} />
          
   
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
