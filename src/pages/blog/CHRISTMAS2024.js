import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-scroll'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../../posts/main';
import Pics from '../../posts/Christmas2024/index';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const posts = [];

const electrical_photos = {
    src: Pics.photos[0].raspberryPi5,
    width: 240,
    height: 150,
};

const electrical = [
    {
        src:Pics.photos[0].pine64,
        width:150,
        height:250,
    },
    {
        src:Pics.photos[0].ts100,
        width:150,
        height:200, 
    }
]

const bag_photos = {
    src: Pics.photos[0].Fiveeleven,
    width: 240,
    height: 250,
}

const bag =
    [{
        src: Pics.photos[0].pouch,
        width: 150,
        height: 150,
    },
    {
        src: Pics.photos[0].waterPouch,
        width: 150,
        height: 200,
    }]


const networking = {
    src: Pics.photos[0].glinet,
    width: 150,
    height: 150,
}

const toys = [
    {
        src: Pics.photos[0].legonasa,
        width: 150,
        height: 150,
    },
    {
        src: Pics.photos[0].mastermind,
        width: 250,
        height: 150,
    }
]

const compute = [
    {
        src: Pics.photos[0].x1nano,
        width: 200,
        height: 150,
    },
    {
        src: Pics.photos[0].Macbook,
        width: 200,
        height: 150,
    }
]

const wearables = [
    {
        src:Pics.photos[0].Garmin2,
        width:150,
        height:150
    }
]

const tools = [
    {
        src:Pics.photos[0].xcool,
        width:150,
        height:200,
    },
    {
        src:Pics.photos[0].klein,
        width:150,
        height:150,
    }
]

export default function Bag(props) {
    if (props.loading) {
        return null;
    } else {
        const classes = useStyles();
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <main>
                        <Grid container spacing={4}>
                        </Grid>
                        <Grid container spacing={5} className={classes.mainGrid}>
                            <Main title="Tech Christmas Gift Ideas 2024" posts={posts} />
                            <div style={{ width: '90%', marginLeft: '6%', fontSize: '1rem' }}>
                                <b>Intro:</b>
                                <p>If someone in your life is a maker/hacker/tech enthusiast I have curated a list of general items for possible gift ideas. All the items listed is stuff I either own or have had experience with.</p>
                                <div>
                                    <ul style={{ display: 'flex', flexDirection: 'column', }}>
                                        <li><Link to="electrical" spy={true} smooth={true}>Electrical</Link></li>
                                        <p></p>
                                        <li><Link to="backpack" smooth={true}>Backpack</Link></li>
                                        <p></p>
                                        <li><Link to="networking" smooth={true}>Networking</Link></li>
                                        <p></p>
                                        <li><Link to="toys" smooth={true}>Toys</Link></li>
                                        <p></p>
                                        <li><Link to="compute" smooth={true}>Compute</Link></li>
                                        <p></p>
                                        <li><Link to="wearables" smooth={true}>Wearables</Link></li>
                                        <p></p>
                                        <li><Link to="tools" smooth={true}>Tools</Link></li>

                                    </ul>
                                </div>
                                <div id="electrical">
                                    <b>Electrical</b>
                                    <h4>Raspberry PI 5</h4>
                                    <a href='https://amzn.to/3OpOAUS'><img src={electrical_photos.src} alt="pi5" width={electrical_photos.width} height={electrical_photos.height}></img></a>
                                    <p><a href='https://amzn.to/3OpOAUS'>Shop Now on Amazon</a></p>

                                    <h4>Pine64 Soldering Iron</h4>
                                    <a href='https://amzn.to/4eSo6Ge'><img src={electrical[0].src} alt="Pine64" width={electrical[0].width} height={electrical[0].height}></img></a>
                                    <p><a href='https://amzn.to/4eSo6Ge'>Shop Now on Amazon</a></p>

                                    <h4>TS100 Soldering Iron</h4>
                                    <a href='https://amzn.to/4iaWHlK'><img src={electrical[1].src} alt="Pine64" width={electrical[1].width} height={electrical[1].height}></img></a>
                                    <p><a href='https://amzn.to/4iaWHlK'>Shop Now on Amazon</a></p>

                                </div>

                                <div id="backpack">
                                    <b>Backpack</b>

                                    <h4>5.11 Rush 24</h4>
                                    <a href='https://amzn.to/3VcUNat'><img src={bag_photos.src} alt="5.11" width={bag_photos.width} height={bag_photos.height}></img></a>
                                    <p><a href='https://amzn.to/3VcUNat'>Shop Now on Amazon</a></p>

                                    <h4>MOLLE Pouch 4 Pack</h4>
                                    <a href='https://amzn.to/3CNxD4a'><img src={bag[0].src} alt="5.11" width={bag[0].width} height={bag[0].height}></img></a>
                                    <p><a href='https://amzn.to/3CNxD4a'>Shop Now on Amazon</a></p>

                                    <h4>MOLLE Water Bottle Pouch</h4>
                                    <a href='https://amzn.to/3Z9uIdv'><img src={bag[1].src} alt="5.11" width={bag[1].width} height={bag[1].height}></img></a>
                                    <p><a href='https://amzn.to/3Z9uIdv'>Shop Now on Amazon</a></p>

                                </div>

                                <div id="networking">
                                    <b>Networking</b>

                                    <h4>GL.Inet travel router</h4>
                                    <a href='https://amzn.to/3ARbotI'><img src={networking.src} alt="travel router" width={networking.width} height={networking.height}></img></a>
                                    <p><a href='https://amzn.to/3ARbotI'>Shop Now on Amazon</a></p>

                                </div>

                                <div id="toys">
                                    <b>Toys</b>

                                    <h4>Lego Mars Perseverance Rover</h4>
                                    <a href='https://amzn.to/4i0TJjX'><img src={toys[0].src} alt="Lego" width={toys[0].width} height={toys[0].height}></img></a>
                                    <p><a href='https://amzn.to/4i0TJjX'>Shop Now on Amazon</a></p>

                                    <h4>Mastermind Board Game</h4>
                                    <a href='https://amzn.to/4i56qKu'><img src={toys[1].src} alt="Mastermind" width={toys[1].width} height={toys[1].height}></img></a>
                                    <p><a href='https://amzn.to/4i56qKu'>Shop Now on Amazon</a></p>

                                </div>

                                <div id="compute">

                                    <b>Laptops / Compute</b>
                                    <h4>X1 Carbon nano</h4>
                                    <a href='https://amzn.to/495RNT7'><img src={compute[0].src} alt="x1" width={compute[0].width} height={compute[0].height}></img></a>
                                    <p><a href='https://amzn.to/495RNT7'>Shop Now on Amazon</a></p>

                                    <h4>2024 Apple MacBook Air</h4>
                                    <a href='https://amzn.to/4eKdFEV'><img src={compute[1].src} alt="apple" width={compute[1].width} height={compute[1].height}></img></a>
                                    <p><a href='https://amzn.to/4eKdFEV'>Shop Now on Amazon</a></p>

                                </div>


                                <div id="wearables">

                                    <b>Wearables</b>
                                    <h4>Garmin Instinct 2 Solar</h4>
                                    <a href='https://amzn.to/3ZrivCg'><img src={wearables[0].src} alt="Lego" width={wearables[0].width} height={wearables[0].height}></img></a>
                                    <p><a href='https://amzn.to/3ZrivCg'>Shop Now on Amazon</a></p>
                                </div>

                                <div id="tools">
                                    <b>Tools</b>
                                    <h4>XCool Precision Screw Driver</h4>
                                    <a href='https://amzn.to/3Os2GFq'><img src={tools[0].src} alt="xcool" width={tools[0].width} height={tools[0].height}></img></a>
                                    <p><a href='https://amzn.to/3Os2GFq'>Shop Now on Amazon</a></p>

                                    <h4>Klein Precision Screw Driver</h4>
                                    <a href='https://amzn.to/3Owr88k'><img src={tools[1].src} alt="xcool" width={tools[1].width} height={tools[1].height}></img></a>
                                    <p><a href='https://amzn.to/3Owr88k'>Shop Now on Amazon</a></p>
                                </div>
                            </div>
                        </Grid>
                    </main>
                </Container>
            </React.Fragment>
        );
    }
}