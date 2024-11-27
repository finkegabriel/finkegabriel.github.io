import React, { Component } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import Nav from './components/header';
import Blog from './pages/blog';
import Home from './pages/home';
import ActiveG from './pages/activeg';
import MedProject from './pages/medproject';
import IcedDev from './pages/iceddev';
import Portfolio from './pages/portfolio';
import GenerateBlog from './posts/generateBlog';
import { createHashHistory } from 'history';
import ReactGA from 'react-ga4';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Adsense } from '@ctrl/react-adsense';
const trackingId = 'G-NHZE3SXGRX'; // Replace with your Google Analytics tracking ID
ReactGA.initialize('G-NHZE3SXGRX');
console.log("tracker ", trackingId);

const history = createHashHistory();

history.listen(location => {
  ReactGA.send({ hitType: "pageview", page: location.pathname }); // Update the user's current page
});

const firebaseConfig = {
  apiKey: "AIzaSyCWjKazNv11RzweuMpiAkHtb_Dv7CHf4HU",
  authDomain: "finkegabriel-60cd8.firebaseapp.com",
  projectId: "finkegabriel-60cd8",
  storageBucket: "finkegabriel-60cd8.appspot.com",
  messagingSenderId: "967813338024",
  appId: "1:967813338024:web:39d6774171620a2aee839d",
  measurementId: "G-DHR8Q1P969"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/bat/:id" component={GenerateBlog.GenerateBlog} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
