import React, { Component } from 'react'
import classes from '../AddCar/AddCar.css'

class addCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: props.cars
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
            cena: event.target.cena.value,
            akcja: "Usuń"
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

    componentDidUpdate (props) {console.log(this.state.cars,props.cars);
        if (this.state.cars !== props.cars) {
            this.props.onChange(this.state.cars);
        }
    }

    render () {
        return(
            <form onSubmit={(event) => this.saveCar(event)}>
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