import React, { Component } from 'react';
import Brief from '../img/brief.jpeg';

const baseStyles = {
    card: {
        marginTop: '1.5rem',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        width: '12rem',
        height: '12rem',
        borderRadius: '66px',
    },
    hr:{
        width:'50%',
    }
}

class Portfolio extends Component {
    render() {

        return (
            <div style={baseStyles.card}>
                <br></br>
                    <center>
                        <img alt="work" src={Brief} height="50" width="50"></img>
                    </center>
                <hr style={baseStyles.hr}></hr>
                <center>
                    <a href="/iceddev">
                        <input type="button" value='Iceddev'></input>
                    </a>
                    <a href='/medproject'>
                        <input type="button" value='MedProject'></input>
                    </a>
                    <a href='/bat/0e3e8a27-6e7d-4c6e-bd32-4a1141645f05'>
                        <input type="button" value='USDA'></input>                    
                    </a>
                    <a href=''>
                        <input type="button" value='ActiveG'></input>
                    </a>
                </center>
            </div>

        )
    }
}

export default Portfolio;