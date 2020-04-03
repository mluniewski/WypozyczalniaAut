import React from 'react';
import classes from './App.css';
import CarTable from './CarListHandler/CarListHandler'
import AddCar from '../src/AddCar/AddCar';
import ListOfCars from '../src/Containter/ListOfCats/ListOfCars';
import FullDetailLook from './Components/FullDetailLook';


function App() {
  return <div className ={classes.App}>
  <CarTable/>
  <br></br>
  <br></br>
  <AddCar/>
  <FullDetailLook/>
  </div>
} 
    

export default App; 