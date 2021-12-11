import React, { Component } from 'react';
import { BrowserRouter as Router, Route,HashRouter } from "react-router-dom";

import Nav from './components/header';
import Blog from './pages/blog';
import Home from './pages/home';
import GenerateBlog from './posts/generateBlog';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <HashRouter>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/bat/:id" component={GenerateBlog.GenerateBlog} />
        </HashRouter>
      </Router>
    );
  }
}

export default App;
