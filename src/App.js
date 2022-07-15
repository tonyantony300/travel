import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/sign-up' component={SignUp}/>
         <Route path='/services' component={Services}/>
         <Route path='/products' component={Products}/>
       </Switch>
      </Router>
    </>
  );
}

export default App;
