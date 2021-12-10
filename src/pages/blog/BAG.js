import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../../posts/main';
import Pics from '../../posts/BAG/photos';
import Gallery from 'react-photo-gallery';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const posts = [];

const photos = [{
    src: Pics.photos[0].src,  
    width: 1,
    height: 1,
},{
    src: Pics.photos[1].src,
    width: 1,
    height: 1,
},{
    src: Pics.photos[2].src,
    width: 1,
    height: 1,
},{
    src: Pics.photos[3].src,
    width: 1,
    height: 1,
},{
    src: Pics.photos[4].src,
    width: 1,
    height: 1,
},{
    src: Pics.photos[5].src,
    width: 1,
    height: 1,
}];

export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid container spacing={4}>
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Main title="EDC bag" posts={posts} />
                        <div style={{ width: '90%', marginLeft: '6%', fontSize: '1rem' }}>
                            <b>Intro:</b>
                            <p>I have used a variety of backpacks and other bags throughout the years. From backpacks my parents would buy me while I was in elementary education, to college where I developed a specific taste in what I carry day to day. </p>
                            <b>Tactical sling bag</b>
                            <p>I really like the idea of having a set EDC (Every Day Carry), a carefully curated list of items that can get you through your daily life. For allot of us our phone, wallet, keys, and maybe something like a pocketknife is more than sufficient. For others who must carry a laptop and other supplies</p>
                            <Gallery photos={photos} />
                        </div>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}