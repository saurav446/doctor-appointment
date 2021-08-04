import React  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Deshboard from './components/Deshboard/Dashboard/Deshboard'; 
 

function App() { 
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        
        <Route path="/appointment">
       <Appointment />
        </Route>  

      
        <Route path="/dashboard/appointment">
       <Deshboard />
        </Route> 
         
      </Switch> 
    </Router>
  );
}

export default App;
