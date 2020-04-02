import React, { Component } from 'react'

import classes from '../CarListHandler/CarListHandler.css'

class carTable extends Component {
    state = {
      cars: [
        { id: 1, marka: 'Audi', nazwa: 'A4',  dataProd: 2002, cena: 20000, akcja: "Usuń"},
        { id: 2, marka: 'Toyota', nazwa: 'Corolla',  dataProd: 1999, cena: 5000, akcja: "Usuń" },
        { id: 3, marka: 'Honda', nazwa: 'Civic',  dataProd: 2010, cena: 25000, akcja: "Usuń" },
      ]
    }

    saveCar = (event) => {
        event.preventDefault();
    }

    addChangeHandler = (event) => {
        const newCar = {
        marka: event.target.marka.value, 
        nazwa: event.target.nazwa.value,
        dataProd: event.target.dataProd.value,
        cena: event.target.cena.value
        }
        const cars = [...this.state.cars];   
        cars.push(newCar)
        this.setState({car: cars})
}

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
      }

      deleteCarHandler = (carIndex) => {
        const cars = [...this.state.cars];
        cars.splice(carIndex, 1);
        this.setState({cars: cars});
      }
renderCarTable () {
    return this.state.cars.map((car, index) => {
        const {id, marka, nazwa, dataProd, cena, akcja} = car
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
    let header = Object.keys(this.state.cars[0])
    return header.map((key, index) => {
        return <th key = {index}>{key.toUpperCase()}</th>
    })
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
        <form onSumbit={this.saveCar}>
                <label htmlFor="markaPojazdu">Marka pojazdu </label>
                <input id="markaPojazdu" name="Marka"></input>
                <br></br>

                <label htmlFor="nazwaAuta">Model auta </label>
                <input id="mazwaAuta" name="Nazwa"></input>
                <br></br>

                <label htmlFor="dataProd">Data produkcji auta </label>
                <input id="dataProd" name="DataProd"></input>
                <br></br>

                <label htmlFor="cenaAuta"> Cena </label>
                <input id="cenaAuta" name="Cena"></input>
                <br></br>
                <br></br>

                <button onClick={(event) => this.addChangeHandler(event)}>Dodaj Auto</button>
                </form>        
      </div>
        );
    };
}

export default carTable;