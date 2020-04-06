import React, { Component } from 'react'

import classes from '../CarListHandler/CarListHandler.css'
import AddCar from "../AddCar/AddCar";
import MoreInfo from '../Person/MoreInfo';

class carTable extends Component {
    constructor(props) {
        super(props);
        this.rerenderCarTableCallback = this.rerenderCarTableCallback.bind(this);
    }

    state = {
        cars: [
            {id: 1, marka: 'Audi', nazwa: 'A4', dataProd: 2002, cena: 20000, akcja: "Usuń"},
            {id: 2, marka: 'Toyota', nazwa: 'Corolla', dataProd: 1999, cena: 5000, akcja: "Usuń"},
            {id: 3, marka: 'Honda', nazwa: 'Civic', dataProd: 2010, cena: 25000, akcja: "Usuń"},
        ],
        showDetails: false
    };

    toggleCarHandler = () =>  {
        const doesShow = this.state.showDetails;
        this.setState({showDetails: !doesShow});
    }

    detailLook = () => {
      const cars = [];
      let i = 0;
      if (this.state.cars) {
        for (const car of this.state.cars){
          i++;
          cars.push(<tr key={car.id}onClick={() => this.renderCarTable(car.id)}>
            <td>{i}</td>
            <td>{car.marka}</td>
            <td>{car.nazwa}</td>
            <td>{car.dataProd}</td>
            <td>{car.cena}</td>
          </tr>)
        }
      }
      return cars;
    };
    deleteChangedHandler = ( event, id ) => {
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
    };

    deleteCarHandler = (carIndex) => {
        const cars = [...this.state.cars];
        cars.splice(carIndex, 1);
        this.setState({cars: cars});
    };

    renderCarTable () {
        return this.state.cars.map((car, index) => {
            const {id, marka, nazwa, dataProd, cena, akcja} = car;
            return (
                <tr key = {id}>
                    <td>{id}</td>
                    <td>{marka}</td>
                    <td>{nazwa}</td>
                    <td>{dataProd}</td>
                    <td>{cena}</td>
                    <td><button onClick={() => this.deleteCarHandler(index)}>{akcja}</button></td>
                </tr>

            )
        }
        )
    }

    renderCarTableHeader () {
        let header = Object.keys(this.state.cars[0]);
        return header.map((key, index) => {
            return <th key = {index}>{key.toUpperCase()}</th>
        })
    }

    rerenderCarTableCallback(cars) {
        this.setState({
            cars: cars
        });
    }

    render () {
        return (
            <div className="App">
                <h1 id='title' className={classes.title}>Wypożyczalnia aut</h1>
                <p>Dostępne auta</p>
                <table id = 'cars' className={classes.cars}>
                    <tbody>
                        <tr>{this.renderCarTableHeader()}</tr>
                        {this.renderCarTable()}
                        
                    </tbody>
                </table>

                <br />
                <br />
                <AddCar
                    cars={this.state.cars}
                    onChange={this.rerenderCarTableCallback}
                />

                <br />
                <br />
                <MoreInfo/>
            </div>
        );
    };
}

export default carTable;