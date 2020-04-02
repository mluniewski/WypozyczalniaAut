import React, { Component } from 'react'
//import axios from '../Axios';

class addCar extends Component {
    state = {
        refresh: null
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

                <button>Dodaj Auto</button>
                </form>
            )
        } 
    }
export default addCar;