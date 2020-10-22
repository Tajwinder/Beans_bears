import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Favourites from './components/Favourites'
import Card from './components/Card'

function App() {
  return (
    <BrowserRouter>
         <div>
           <Navbar/> 

           <Switch>
             {/* <Card/> */}
            <Route path='/' exact component={Home}/>
            <Route path='/favourites' exact component={Favourites}/>
           </Switch>
            
         </div>
     </BrowserRouter>
  );
}

export default App;
