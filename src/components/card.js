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
    },
    ellipse: {
        width: "150px",
        height: "80px",
        backgroundColor: "grey",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        fontFamily: "Arial, sans-serif",
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
        position: "relative",
    },
    status: {
        position: "absolute",
        bottom: "5px",
        right: "10px",
        width: "15px",
        height: "15px",
        backgroundColor: "green",
        borderRadius: "50%",
        border: "2px solid white",
    },

}

const EllipticalIcon = (props) => {
    const styles = {
        ellipse: {
            float: "right",
            width: "16vh",
            height: "4vh",
            backgroundColor: "grey",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12%",
            fontFamily: "Arial, sans-serif",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
            position: "relative",
        },
        status: {
            position: "absolute",
            bottom: "5px",
            right: "10px",
            width: "15px",
            height: "15px",
            backgroundColor: "green",
            borderRadius: "50%",
            border: "2px solid white",
        }
    };

    return (
        <div style={styles.ellipse}>
            <div style={{ float: "right" }}>
                {"Status: "}
                {props.props.status}
            </div>
        </div>


    );
};


function SimpleCard(props) {
    return (
        <div>
            <center>
                <Card style={baseStyles.cardWidth}>
                    <center>
                        <EllipticalIcon
                            props={props}
                        />
                        <br></br>
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
