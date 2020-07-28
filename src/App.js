import React from 'react';
import logo from './logo.svg';
import styles from './App.css';
// import { Provider } from 'react-redux';
// import store from './store';
import { createBrowserHistory } from 'history';
import Sidebar from './Components/Sidebar';
import axios from 'axios';
import {useState, useEffect} from "react";
import UniversalPage from './Components/UniversalPage';
import ItemlistPage from './Components/ItemlistPage';
import { BrowserRouter as Router } from "react-router-dom";

 
import { BrowserRouter, Switch, Route, Link , browserHistory} from "react-router-dom";

export const history = createBrowserHistory()

function App() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  return (
    <Router history={{}}>

   <div style={{display:'flex'}}>
      <Sidebar/>
      <div style={{ width: "calc(100% - 150px)"}}>
          <Route exact path='/films' component={ItemlistPage}></Route>
          <Route exact path="/people" component={ItemlistPage}></Route>
          <Route exact path='/planets' component={ItemlistPage}></Route>
          <Route exact path="/species" component={ItemlistPage}></Route>
          <Route exact path="/starships" component={ItemlistPage}></Route>
          <Route exact path="/vehicles" component={ItemlistPage}></Route>
          <Route  path="/films/:id" component={UniversalPage}></Route>
          <Route  path="/people/:id" component={UniversalPage}></Route> 
          <Route  path="/planets/:id" component={UniversalPage}></Route>
          <Route  path="/species/:id" component={UniversalPage}></Route>
          <Route  path="/starships/:id" component={UniversalPage}></Route>
          <Route  path="/vehicles/:id" component={UniversalPage}></Route>
      </div>
   </div>
   </Router>

  );
}

export default App;
