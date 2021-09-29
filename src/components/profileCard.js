import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        return (
            <div>
                <center>
                    <img alt="Gabriel Finke" src={this.props.image} style={this.props.styles} />
                    <div >
                        <h4>{this.props.name}</h4>
                        <p style={{width:'40vh'}}>{this.props.jobDesc}</p>
                    </div>
                </center>
            </div>
        )
    }
}

Card.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    jobDesc: PropTypes.string,
    styles: PropTypes.string,
}

export default Card;