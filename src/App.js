import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contact from './components/Contact';
//import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    
<Router>
<NavBar />
<Switch>
  <Route path='/' exact component={Header}/>
  <Route path='/about' exact component={About}/>
  <Route path='/projects' exact component={Projects}/>
  <Route path='/skills' exact component={Skills}/>
  <Route path='/contact' exact component={Contact}/>
</Switch>
</Router>
  );
}

export default App;
