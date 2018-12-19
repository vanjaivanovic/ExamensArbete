import React from 'react';
import './App.css';
import './Assets/Styles/Keyframes.css';

import {
 BrowserRouter as Router,
 Route
} from 'react-router-dom';

import Home from './Components/Routes/Home.js';
import Menu from './Components/Routes/Menu.js';
import About from './Components/Routes/About.js';
import Contact from './Components/Routes/Contact.js';


function App() {
 return(
    <Router>
       <div>
           <Route path="/" component={Home} exact/>
           <Route path="/Menu" component={Menu} />
           <Route path="/About" component={About} />
           <Route path="/Contact" component={Contact} />
         </div>
     </Router>
 );
}


export default App;
