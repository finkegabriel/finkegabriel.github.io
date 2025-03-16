import React from 'react';
import './ProfileCard.css';

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
    contact: {
        display:"grid",
        margin: "auto",
        width: "50%",
        padding: "10px",
    }

}

// const Gabe = "https://avatars2.githubusercontent.com/u/40010444?s=460&v=4";

function Hire() {
    return (
        <div style={baseStyles.card}>

            <center>
                {/* <Card
                cover_photo={Headshot}
                body="
                "
                /> */}
                <div className="profile-card">
                    <div className="cover-photo"></div>
                    <div className="profile-info">
                        <img
                            src="https://avatars2.githubusercontent.com/u/40010444?s=460&v=4"
                            alt="Profile"
                            className="profile-img"
                        />
                        <div className="profile-details">
                            <h1>Gabriel F.</h1>
                            <h3>GIS Professional | Software Developer</h3>
                            <div className="about">
                            I'm a GIS professional currently accepting freelance work.
                Over the last 9 years I have gained experience in energy, water utiliy, fiber optic telecom, and software development. Let me help you, make informed decisions with your data!
                            </div>
                            <div className="contact-info" style={baseStyles.contact}>
                                <span>Email: gabriel.finke98@gmail.com</span>
                                <span>Location: Phoenix, AZ</span>
                            </div>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/gabriel-finke-1a647b229" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://github.com/finkegabriel" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
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