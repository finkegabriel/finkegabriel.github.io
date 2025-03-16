import React from 'react';
import Card from '../components/hireme';
import Headshot from '../img/headshot.png';

const baseStyles = {
    card: {
        // float:'left',
        position: 'relative',
        bottom: '0rem',
        marginTop: '1.5rem',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        width: '12rem',
        height: '12rem',
        borderRadius: '66px',
    },
    footer: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: '#7E716E',
        color: 'white',
        textAlign: 'center',
    },
    github: {
        textDecoration: 'none',
        color: 'inherit',
    },
}

// const Gabe = "https://avatars2.githubusercontent.com/u/40010444?s=460&v=4";

function Hire() {
    return (
        <div style={baseStyles.card}>
            <center>
                <Card
                cover_photo={Headshot}
                body="Hello, I'm a GIS professional currently accepting freelance work.
                Over the last 9 years I have gained experience in engery, water utiliy, fiber optic telecom, and software development.
                "
                />
            <br></br>
            </center>
            <center>

        
               <footer>

               </footer>
            </center>
        </div>
    )
}

export default Hire;