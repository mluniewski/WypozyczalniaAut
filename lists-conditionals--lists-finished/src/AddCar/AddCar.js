import React, { Component } from 'react'
//import axios from '../Axios';

class addCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {id: 1, marka: 'Audi', nazwa: 'A4', dataProd: 2002, cena: 20000, akcja: "Usuń"},
                {id: 2, marka: 'Toyota', nazwa: 'Corolla', dataProd: 1999, cena: 5000, akcja: "Usuń"},
                {id: 3, marka: 'Honda', nazwa: 'Civic', dataProd: 2010, cena: 25000, akcja: "Usuń"},
            ],
            refresh: null
        };
    }

    saveCar = (event) => {
        const cars = [...this.state.cars];
        console.log(1,cars);

        let nextId = Math.max.apply(Math, cars.map(function(o) { return o.id; })) + 1;

        const newCar = {
            id: nextId,
            marka: event.target.marka.value,
            nazwa: event.target.nazwa.value,
            dataProd: event.target.dataProd.value,
            cena: event.target.cena.value
        };

        cars.push(newCar);
        console.log(2,cars);

        this.setState({cars: cars});

        event.target.marka.value = '';
        event.target.nazwa.value = '';
        event.target.dataProd.value = '';
        event.target.cena.value = '';

        event.preventDefault();
    };

    render () {
        return(
            <form onSubmit={(event) => this.saveCar(event)} align="center">
                <label htmlFor="marka">Marka pojazdu </label>
                <input id="marka" name="Marka" />
                <br />

                <label htmlFor="nazwa">Model auta </label>
                <input id="nazwa" name="Nazwa" />
                <br />

                <label htmlFor="dataProd">Data produkcji auta </label>
                <input id="dataProd" name="DataProd" />
                <br />

                <label htmlFor="cena"> Cena </label>
                <input id="cena" name="Cena" />
                <br />

                <button type={"sumbit"}>Dodaj Auto</button>
            </form>
        )
    }
}

export default addCar;