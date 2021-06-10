import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Home1 from './pages/home1';
import Post from './pages/post';
import User from './pages/user';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home1' component={Home} />
        <Route path='/post' component={Post} />
        <Route path='/user' component={User} />
      </Switch>
    </Router>
  );
}

export default App;
