import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import React from "react";

import "./App.scss";
import { slide as Menu } from "react-burger-menu";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Articles from "./pages/Articles/Aticles";
import Footer from "./components/Footer/Footer";
import FabricChecker from "./pages/FabricChecker/FabricChecker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu pageWrapId={"page-wrap"} />
        <main id="page-wrap">
          <Menu className="App__menu">
            <h1>ÀLaMode</h1>
            <Link to="/" className="menu-item">
              <h3>Home</h3>
            </Link>
            <Link to="/fabricchecker" className="menu-item">
              <h3>Fabric Composition Checker</h3>
            </Link>
            <Link to="/quiz" className="menu-item">
              <h3>Sustainability Quiz</h3>
            </Link>
            <Link to="/articles" className="menu-item" href="">
              <h3>Articles</h3>
            </Link>
            <Link to="/about" className="menu-item">
              <h3>About</h3>
            </Link>
          </Menu>

          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path="/" component={Home} />
            <Route path="/articles" component={Articles} />
            <Route path="/fabricchecker" component={FabricChecker} />
          </Switch>

          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
