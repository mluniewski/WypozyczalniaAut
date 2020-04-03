import React, { Component } from 'react'
//import axios from '../Axios';

class addCar extends Component {
    state = {
        cars: [
            { id: 1, marka: 'Audi', nazwa: 'A4',  dataProd: 2002, cena: 20000, akcja: "Usuń"},
            { id: 2, marka: 'Toyota', nazwa: 'Corolla',  dataProd: 1999, cena: 5000, akcja: "Usuń" },
            { id: 3, marka: 'Honda', nazwa: 'Civic',  dataProd: 2010, cena: 25000, akcja: "Usuń" },
          ],
        refresh: null
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
    render () {
            return(
                <form onSumbit={this.saveCar} align="center">
                <label htmlFor="marka">Marka pojazdu </label>
                <input id="marka" name="Marka"></input>
                <br></br>

                <label htmlFor="nazwa">Model auta </label>
                <input id="mazwa" name="Nazwa"></input>
                <br></br>

                <label htmlFor="dataProd">Data produkcji auta </label>
                <input id="dataProd" name="DataProd"></input>
                <br></br>

                <label htmlFor="cena"> Cena </label>
                <input id="cena" name="Cena"></input>
                <br></br>

                <button onClick={(event) => this.addChangeHandler(event)}>Dodaj Auto</button>
                </form>
            )
        } 
    }
export default addCar;