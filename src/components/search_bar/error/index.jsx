import React from 'react';
//import { Link } from 'react-router-dom';
import './index.scss';

export default class Error extends React.Component {
    state = {
        
    }

    render() {
        return(
            <div className = "Error">
                <img alt="1" src = {require('../../../assets/error.png')}></img>
                <h1 className = "mesg"> Error 404 data not found </h1>
            </div>
        )
    }
}