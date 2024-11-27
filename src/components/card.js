import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { isMobile } from 'react-device-detect';
import { withRouter } from "react-router-dom";

const baseStyles = {
    cardWidth: {
        marginTop: '10vh',
        width: '56vh',
    },
    imageMobile: {
        borderRadius: '75px',
    },
    image: {
        // transform: 'rotate(90deg)',
        borderRadius: '75px',
    },
    imageDiv: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    width: {
        width: '100%',
        margin: '0 auto',
        maxWidth: '700px',
        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
    }
}

function SimpleCard(props) {
    console.log("PROPS ",props);
    return (
        <div style={props.style}>
            <center>
                <Card style={baseStyles.cardWidth}>
                    <center>
                        <CardContent>
                            <center>
                                <Typography color="textSecondary" gutterBottom>
                                    <center>
                                        {props.title}
                                        <br></br>
                                        {props.date}
                                    </center>
                                </Typography>
                                <div style={baseStyles.imageDiv}>
                                    <center>
                                        <img alt="Card" src={props.cover_photo} style={(isMobile === true) ? props.imageStyle || baseStyles.imageMobile : baseStyles.image} class="center" width={250} height={250} />
                                    </center>
                                </div>
                            </center>
                        </CardContent>
                    </center>
                    <CardActions>
                        <Button disabled={props.isDisabled} onClick={() => props.history.push(props.url)} size="small">Continue Reading...</Button>
                    </CardActions>
                </Card>
            </center>
        </div>
    );
}

export default withRouter(SimpleCard);
