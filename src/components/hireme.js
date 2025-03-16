import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { isMobile } from 'react-device-detect';
import { withRouter } from "react-router-dom";

const baseStyles = {
    cardWidth: {
        marginTop: '10vh',
        width: 'auto',
        height:'auto',
    },
    imageMobile: {
    },
    image: {
        // transform: 'rotate(90deg)',
    },
    imageDiv: {
        float:"left",
        // display: 'block',
        // marginLeft: 'auto',
        // marginRight: 'auto',
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
    },
    body:{
        float:'left',
    },
    body_bottom:{
        textAlign: 'justify',
        textAlignLast: 'left',
    },
    center:{
        padding:"10vh",
    },
}

function HireMe(props) {
    console.log("PROPS ",props);
    return (
        <div style={props.style}>
            <center style={baseStyles.center}>
                {/* <Card style={baseStyles.cardWidth}> */}
                    <center>
                        {/* <CardContent> */}
                            <center>
                                <Typography color="textSecondary" gutterBottom>
                                    <center>
                                        <a href='https://www.linkedin.com/in/gabriel-finke-1a647b229'><p>Gabriel F.</p></a>
                                        <br></br>
                                    </center>
                                </Typography>
                                <div style={baseStyles.imageDiv}>
                                        <img alt="Card" src={props.cover_photo} style={(isMobile === true) ? props.imageStyle || baseStyles.imageMobile : baseStyles.image} class="center" width={250} height={250} />
                                </div>
                            </center>
                            <div style={baseStyles.body}>
                            <br></br>
                            </div>
                            <div style={baseStyles.body_bottom}>
                            <br></br>
                            </div>
                            {props.body}
                        {/* </CardContent> */}
                    </center>
                    {/* <CardActions> */}
                        <br></br>
                        {/* <Button disabled={props.isDisabled} onClick={() => props.history.push(props.url)} size="small">Continue Reading...</Button> */}
                    {/* </CardActions> */}
                    <div style={baseStyles.body_bottom}>
                    </div>
                {/* </Card> */}
            </center>
        </div>
    );
}

export default withRouter(HireMe);
