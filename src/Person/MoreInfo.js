import React, { Component } from 'react';

import CarTableOnly from '../CarListOnly/CarListOnly';


class MoreInfo extends Component {
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

renderCarTableHeader () {
    let header = Object.keys(this.state.cars[0]);
    return header.map((key, index) => {
        return <th key = {index}>{key.toUpperCase()}</th>
    })
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




render () {
    let cars = null;

    if (this.state.showDetails) {
        cars = (
            <div>
              <CarTableOnly/>
            </div>
        )
     }
     return (
         <div>
             <h3>Informacje o autach</h3>
             <button onClick = {this.toggleCarHandler}>Wiecej szczegółów</button>
             {cars}
         </div>
     )
    }   
}

export default MoreInfo;

/*
const moreInfo = (props) => {
    return (
        <table className = {classes.MoreInfo}>
        <div
            className="MoreInfo">
            <span> Vin: {props.vin} </span>
            <span> Kolor: {props.kolor} </span>
            <span> Pochodzenie: {props.pochodzenie} </span>
            <span> Zarejestrowany: {props.zarejestrowany} </span>
        </div>
        </table>
    )
}

export default moreInfo;
*/