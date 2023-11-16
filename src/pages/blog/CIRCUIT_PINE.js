import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../../posts/main';
// import Photo from '../../posts/CIRCUIT_PINE/index';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const posts = [];

export default function USDA(){

    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid container spacing={4}>
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Main title="Circuit Pine" posts={posts} />
                        <div style={{ width: '90%', marginLeft: '6%', fontSize: '1rem' }}>
                            <b>Intro:</b>
                            <p>Thank you for your interest in Circuit Pine! This started out in 2022 with wanting to make fun Christmas tree ornaments that embodied the maker/hacker spirit. Now in 2023 I am selling them! Hopefully bringing that same spirit to a child or adult interested in electronics. I am selling Circuit Pine in a kit. </p>
                            
                        </div>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}
