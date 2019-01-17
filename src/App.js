import React, { Component } from 'react';
import './App.css';
import './Assets/Styles/Keyframes.css';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from './Components/Routes/Home.js';
import Menu from './Components/Routes/Menu.js';
import About from './Components/Routes/About.js';
import Contact from './Components/Routes/Contact.js';
import GDPR from './Components/Gdpr.js';


class App extends Component {
  render(){
    return(
       <div>
         <BrowserRouter>
          <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Menu" component={Menu} />
             <Route path="/About" component={About} />
             <Route path="/Contact" component={Contact} />
             <Route path="/Gdpr" component={GDPR} />
           </Switch>
         </BrowserRouter>
       </div>
    );
  }
 
}


export default App;
