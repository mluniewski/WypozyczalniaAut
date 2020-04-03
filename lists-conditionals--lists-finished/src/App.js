import React from 'react';
import classes from './App.css';
import CarTable from './CarListHandler/CarListHandler'
import AddCar from '../src/AddCar/AddCar';
import ListOfCars from '../src/Containter/ListOfCats/ListOfCars';


function App() {
  return <div className ={classes.App}>
  <CarTable/>
  <br></br>
  <br></br>
  <AddCar/>

  </div>
} 
    

export default App; 