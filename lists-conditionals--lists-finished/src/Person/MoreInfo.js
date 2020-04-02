import React from 'react';
//import classes from '../Person/Person.css'

const moreInfo = (props) => {
    return (
        <div
            className="MoreInfo">
            <span> Vin: {props.vin} </span>
            <span> Kolor: {props.kolor} </span>
            <span> Pochodzenie: {props.pochodzenie} </span>
            <span> Zarejestrowany: {props.zarejestrowany} </span>
        </div>
    )
}

export default moreInfo;