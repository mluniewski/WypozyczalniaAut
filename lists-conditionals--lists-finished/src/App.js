import React from 'react';
import classes from './App.css';
import CarTable from './CarListHandler/CarListHandler'
import AddCar from '../src/AddCar/AddCar';


function App() {
  return <div classname ={classes.App}>
  <CarTable/>
  <br></br>
  <br></br>
  <AddCar/>
  </div>
} 
    

export default App; 