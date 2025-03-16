import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Code from '../img/code.png';

const baseStyles = {
  li: {
    textDecoration: 'none',
    marginLeft: '1rem',
    color: 'black',
  },
  a: {
    listStyle: 'none',
    display: 'inline',
  },
  ul: {
    display: 'inline',
  },
  icon: {
    height: '3rem',
    width: '3rem',
  },
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar color="#00FF00" position="static">
        <Toolbar>
          <img alt="code" src={Code} style={baseStyles.icon} />
          <nav>
            <ul style={baseStyles.ul}>
              <li style={baseStyles.a}>
                <Link style={baseStyles.li} to="/">Home</Link>
              </li>
              <li style={baseStyles.a}>
                <Link style={baseStyles.li} to="/post">Blog</Link>
              </li>
              <li style={baseStyles.a} >
              <a style={baseStyles.li}  href="https://donate.stripe.com/9AQ6pz0t3a0Veze6op" rel="noreferrer" target="_blank">
                  Donate
                </a>
              </li>
              <li style={baseStyles.a}>
                <Link style={baseStyles.li} to="/hireme">Hire Me</Link>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, baseStyles)(ButtonAppBar);