import React from "react";
import classes from './Card.module.css';

const Card = props => {
    const totalClasses=classes.card+' '+props.className;
    return (
        <div className={totalClasses}>{props.children}</div>
    )
}

export default Card;

{/*
Instead of totalClasses we can also use this expression
`${classes.card} ${props.className}`
*/}