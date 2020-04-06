import React from 'react';


import autoLogo from '../images/ford-mustang.jpg';
import classes from '../images/Photo.css';



const Logo = (props) => (
    <div className={classes.Photo} style ={{width: 150}}>
        <img src={autoLogo} alt="FordMustang" />
    </div>
);

export default Logo;