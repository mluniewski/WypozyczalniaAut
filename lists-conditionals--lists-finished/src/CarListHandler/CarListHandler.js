import React, { Component } from 'react'

import classes from '../CarListHandler/CarListHandler.css'

class carTable extends Component {
    state = {
      cars: [
        { id: 1, marka: 'Audi', nazwa: 'A4',  dataProd: 2002, cena: 20000 },
        { id: 2, marka: 'Toyota', nazwa: 'Corolla',  dataProd: 1999, cena: 5000 },
        { id: 3, marka: 'Honda', nazwa: 'Civic',  dataProd: 2010, cena: 25000 },
      ]
    }

renderCarTable () {
    return this.state.cars.map((car, index) => {
        const {id, marka, nazwa, dataProd, cena} = car
        return (
            <tr key = {id}>
                <td>{id}</td>
                <td>{marka}</td>
                <td>{nazwa}</td>
                <td>{dataProd}</td>
                <td>{cena}</td>
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
        <p>Kiknij w pojazd żeby go usunąć</p>
      </div>
        );
    };
}

export default carTable;