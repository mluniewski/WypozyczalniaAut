import React from 'react';

import NameForm from '../Adding';

import Extra from '../ExtraPropetries';

//import Logo from '../assets/images/Photo'

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}> Marka: {props.marka}  Model: {props.nazwa} <br/> Rocznik: {props.dataProd} Cena: {props.cena}</p>
            <p>{props.children}</p>    
            <NameForm/>
            <Extra/>
            
           
        </div>


    )
};




export default person;
