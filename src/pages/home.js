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
                jobDesc="Hello, and welcome to my blog! I am an engineering student in Arizona concentrating on environmental engineering. I have been constantly working on projects throughout my life and I have finally got around to documenting these achievements. I work on a variety of things from telescopes to drones, and everything in between. I hope you enjoy!!"
            />
            <div style={baseStyles.status}>
            </div>
            <Adsense
                client='ca-pub-3195033728396210'
            />
            <footer style={baseStyles.footer}>
                <p><GoMarkGithub /> <a style={baseStyles.github} href="https://github.com/finkegabriel">Github</a><br></br></p>
            </footer>
        </div>
    )
}

export default Home;