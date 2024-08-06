import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Hero from './components/Hero';
import Features from './components/Features';
// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
          <Route path="/" exact>
            <Hero />
            <Features />
          </Route>
          {/* Define other routes for Listings, Get Funding, etc. */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
