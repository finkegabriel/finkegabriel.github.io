import React from 'react';
import ProfileCard from '../components/profileCard';
import { GoMarkGithub } from 'react-icons/go';
import { Adsense } from '@ctrl/react-adsense';

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

const Gabe = "https://avatars2.githubusercontent.com/u/40010444?s=460&v=4";

function Home() {
    return (
        <div style={baseStyles.card}>
            <center>
            <h3>Hello, I am Gabe.</h3>
            <h3>I am an Engineer 🔭</h3>
            <h3>Developer 💻</h3>
            <h3>Entrepreneur 💼</h3>
            <h3>in Phoenix Arizona 📍</h3>
            </center>
            <center>

                <ProfileCard
                    image={Gabe}
                    styles={baseStyles.image}
                    name=""
                    jobDesc=""
                />
                <div style={baseStyles.status}>
                </div>
                <footer style={baseStyles.footer}>
                    <p><GoMarkGithub /> <a style={baseStyles.github} href="https://github.com/finkegabriel">Github</a><br></br></p>
                </footer>
            </center>
        </div>
    )
}

export default Home;