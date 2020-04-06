import React, { Component } from 'react'

import classes from '../CarListHandler/CarListHandler.css'



class CarTableOnly extends Component {
    constructor(props) {
        super(props);
        this.rerenderCarTableCallback = this.rerenderCarTableCallback.bind(this);
    }

    state = {
        cars: [
            {id: 1, marka: 'Audi', nazwa: 'A4', dataProd: 2002, cena: 20000, kolor: "biały", vin: "WSTY1124T", przebieg: 25000},
            {id: 2, marka: 'Toyota', nazwa: 'Corolla', dataProd: 1999, cena: 5000, kolor: "czerwony", vin: "TRUK4569R", przebieg: 3455},
            {id: 3, marka: 'Honda', nazwa: 'Civic', dataProd: 2010, cena: 25000, kolor: "niebieskie", vin: "KLUK0493R", przebieg: 99434},
        ],
        showDetails: false
    };
    renderCarTable () {
        return this.state.cars.map((car, index) => {
            const {id, marka, nazwa, dataProd, cena, kolor, vin, przebieg} = car;
            return (
                <tr key = {id}>
                    <td>{id}</td>
                    <td>{marka}</td>
                    <td>{nazwa}</td>
                    <td>{dataProd}</td>
                    <td>{cena}</td>  
                    <td>{kolor}</td>
                    <td>{vin}</td> 
                    <td>{przebieg}</td>       
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
                <table id = 'cars' className={classes.cars}>
                    <tbody>
                        <tr>{this.renderCarTableHeader()}</tr>
                        {this.renderCarTable()}
                        
                    </tbody>
                </table>
            </div>
        );
    };
}

export default CarTableOnly;