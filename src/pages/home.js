import React from 'react';
import ProfileCard from '../components/profileCard';
import { GoMarkGithub } from 'react-icons/go';
import { Adsense } from '@ctrl/react-adsense';

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
            {/* <iframe src={"//rcm-na.amazon-adsystem.com/e/cm?o=1&p=288&l=ur1&category=bestsellingproducts&banner=03JGEXJ8VWRFPFC6SYG2&f=ifr&linkID=44aae76c3d8d21ce093baa6db09d8b5c&t=gfinke1019-20&tracking_id=gfinke1019-20"} width="320" height="50" scrolling="no" border="0" marginwidth="0" style={{border:'none'}} frameborder="0"></iframe> */}
            <ProfileCard
                image={Gabe}
                styles={baseStyles.image}
                name="Gabe"
                jobDesc=""
            />
            <div style={baseStyles.status}>
            </div>
            <footer style={baseStyles.footer}>
                <p><GoMarkGithub /> <a style={baseStyles.github} href="https://github.com/finkegabriel">Github</a><br></br></p>
            </footer>
        </div>
    )
}

export default Home;