import React from 'react';
import classes from '../Person/MoreInfo.css'

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