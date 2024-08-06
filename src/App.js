import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from "./views/Profile";
import BuyerPage from "./views/BuyerPage";
import SellerPage from "./views/SellerPage";
import { useAuth0 } from "@auth0/auth0-react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { RoyaltyProvider } from "./RoyaltyContext";
import "./App.css";
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
    <RoyaltyProvider>
      <Router>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/buy-royalties" component={BuyerPage} />
            <Route path="/sell-royalties" component={SellerPage} />
            <Route path="/" exact>
              <Hero />
              <Features />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </RoyaltyProvider>
  );
};

export default App;
