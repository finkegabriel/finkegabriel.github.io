import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../../posts/main';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const posts = [];

export default function Yaris(){

    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid container spacing={4}>
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Main title="Toyota Yaris electronics work bench shelf" posts={posts} />
                        <div style={{ width: '90%', marginLeft: '6%', fontSize: '1rem' }}>
                            <b>Intro:</b>
                            <p><a href='https://www.youtube.com/watch?v=vTI851i4dkA'>Yaris shelf Solidworks design</a></p>            
                        </div>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}
