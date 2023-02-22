import React, { Component } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/header';
import Blog from './pages/blog';
import Home from './pages/home';
import ActiveG from './pages/activeg';
import MedProject from './pages/medproject';
import IcedDev from './pages/iceddev';
import Portfolio from './pages/portfolio';
import GenerateBlog from './posts/generateBlog';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga4';

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.send({hitType: "pageview", page: location.pathname }); // Update the user's current page
});

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/bat/:id" component={GenerateBlog.GenerateBlog} />
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/activeg" component={ActiveG.ActiveG}/>
          <Route path="/iceddev" component={IcedDev.IcedDev}/>
          <Route path="/medproject" component={MedProject.MedProject}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
