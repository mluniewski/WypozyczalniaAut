import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Reservation from './NewCar'
import classes from '../src/Person/MoreInfo.css'
import CarTable from './CarListHandler/CarListHandler'
import AddCar from '../src/AddCar/AddCar';


class App extends Component {
  state = {
    cars: [
      
    ],
    otherState: 'some other value',
    showCars: true                    
  }

  nameChangedHandler = ( event, id ) => {
    const carIndex = this.state.cars.findIndex(p => {
      return p.id === id;
    });

    const car = {
      ...this.state.cars[carIndex]
    };

    car.nazwa = event.target.value;

    const cars = [...this.state.cars];
    cars[carIndex] = car;

    this.setState( {cars: cars} );
  }
/*
  addCarHandler = (carIndex) => {
    const cars = [...this.state.cars];

  }
*/
  deleteCarHandler = (carIndex) => {
    const cars = [...this.state.cars];
    cars.splice(carIndex, 1);
    this.setState({cars: cars});
  }


  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let cars = null;

    if ( this.state.showCars ) {
      cars = (
        <div>
          {this.state.cars.map((car, index) => {
            return <td>
              
              <AddCar/>

              <Person
              click={() => this.deleteCarHandler(index)}
              marka={car.marka}
               nazwa={car.nazwa} 
               dataProd={car.dataProd} 
               cena={car.cena}
               key={car.id}
              changed={(event) => this.nameChangedHandler(event, car.id)} /> </td>
          })}
          
         <Reservation/>
        </div>
      );
    }
    return (
      <CarTable/>
    );
  }
}

export default App; 