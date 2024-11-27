import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../../posts/main';
import Pics from '../../posts/Christmas2024/index';
// import Gallery from 'react-photo-gallery';

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

const bag_photos = {
        src:Pics.photos[0].Fiveeleven,
        width: 240,
        height: 200,
}

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
                                <b>Electrical</b>
                                <h4>Raspberry PI 5</h4>
                                <a href='https://amzn.to/3OpOAUS'><img src={electrical_photos.src} alt="pi5" width={electrical_photos.width} height={electrical_photos.height}></img></a>
                                <p><a href='https://amzn.to/3OpOAUS'>Raspberry Pi 5</a></p>
                                <b>Backpack</b>
                                <h4>5.11 Rush 24</h4>
                                <a href='https://amzn.to/3VcUNat'><img src={bag_photos.src} alt="5.11" width={bag_photos.width} height={bag_photos.height}></img></a>
                                <p><a href='https://amzn.to/3VcUNat'>5.11 Rush 24</a></p>

                            </div>
                        </Grid>
                    </main>
                </Container>
            </React.Fragment>
        );
    }
}