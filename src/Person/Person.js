import React from 'react';

import NameForm from '../Adding';

import Extra from '../ExtraPropetries';
import classes from '../Person/MoreInfo.css';

//import Logo from '../assets/images/Photo'
const person = ( props ) => {
    return (
        <table className={classes.Car} >
            <tr>
                    <p onClick={props.click}> </p>
                    <td>Marka: {props.marka} </td> 
                    <td>Model: {props.nazwa} </td>
                    <td>Rocznik: {props.dataProd} </td>
                    <td>Cena: {props.cena} </td>
                    <p>{props.children}</p>    
            </tr>
        <NameForm/>
        <Extra/>
        </table> 
    )
};
export default person;
