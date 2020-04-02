import React, { Component } from 'react'
//import axios from ''

class addCar extends Component {
    state = {
        refresh: null
    }

    saveCar = (event) => {
        event.preventDefault();
    

    const newCar = {
        marka = event.target.marka.value,
        nazwa = event.target.nazwa.value,
        dataProd = event.target.dataProd.value,
        cena = event.target.cena.value
    }
    event.target.reset()

    
}

export default addCar;