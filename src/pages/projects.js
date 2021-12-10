import React, { Component } from 'react';

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
}

class Projects extends Component {
    render() {

        return (
            <div style={baseStyles.card}>
                <center>
                    <h1>Projects</h1>
                </center>

                <div style={baseStyles.status}>
                </div>
            </div>

        )
    }
}

export default Projects;