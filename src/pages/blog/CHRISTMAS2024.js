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
}, {
    src: Pics.photos[1].src,
    width: 1,
    height: 1,
}, {
    src: Pics.photos[2].src,
    width: 1,
    height: 1,
}, {
    src: Pics.photos[3].src,
    width: 1,
    height: 1,
}, {
    src: Pics.photos[4].src,
    width: 1,
    height: 1,
}, {
    src: Pics.photos[5].src,
    width: 1,
    height: 1,
}];

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
                            <Main title="Tech Christmas gift ideas 2024" posts={posts} />
                            <div style={{ width: '90%', marginLeft: '6%', fontSize: '1rem' }}>
                                <b>Intro:</b>
                                {/* <Gallery photos={photos} /> */}
                            </div>
                        </Grid>
                    </main>
                </Container>
            </React.Fragment>
        );
    }
}