import React, { Component } from 'react';
import "./Dice.css";

export class Dice extends Component {
    render() {
        return (
            <i className= {`Dice fas fa-dice-${this.props.face} ${this.props.rolling ? "animate" : ""} `}></i>                
        )
    }
}

export default Dice;
