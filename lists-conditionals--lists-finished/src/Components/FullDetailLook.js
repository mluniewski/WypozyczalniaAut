import React, { Component } from "react";

/*
const FullDetailLook = props => {
    
    const {cars} = props;

    return(
        <div>
            <p>{cars.marka}</p>
            
        </div>
    )
}

export default FullDetailLook;

*/
class FullDetailLook extends Component {
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
    
    detailCar = (event) => {
      const cars = [...this.state.cars]
      
      const carView = {
        marka: event.target.marka.value,
        nazwa: event.target.nazwa.value,
        dataProd: event.target.dataProd.value,
        cena: event.target.cena.value
      }
      cars.apply


    }
    detailLook = () => {
        const cars = []
        let i = 0
        if (this.state.cars) {
          for (const car of this.state.cars){
            i++
            cars.push(<tr key={car.id}onClick={() => this.state.cars(car.id)}>
              <td>{i}</td>
              <td>{car.marka}</td>
              <td>{car.nazwa}</td>
              <td>{car.dataProd}</td>
              <td>{car.cena}</td>
            </tr>)
          }
        }
        return cars;
      } 
      render () {
        return(
            <form onSubmit={(event) => this.detailCar(event)} align="center"></form>
            
            
        )
    }

}

export default FullDetailLook;
