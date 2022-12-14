import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import React, { useState } from "react";

import "./App.scss";
import { slide as Menu } from "react-burger-menu";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Articles from "./pages/Articles/Articles";
import Article from "./pages/Article/Article";
import Footer from "./components/Footer/Footer";
import FabricChecker from "./pages/FabricChecker/FabricChecker";
import Quiz from "./pages/Quiz/Quiz";
import Forum from "./pages/Forum/Forum";
import ForumPost from "./pages/ForumPost/ForumPost";

function App() {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    window.scrollTo(0, 0);
    setOpen(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <main id="page-wrap">
          <Menu
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
            pageWrapId={"page-wrap"}
            className="App__menu"
          >
            <Link to="/" onClick={closeSideBar}>
              <h1>ÀLaMode</h1>
            </Link>
            <Link to="/quiz" onClick={closeSideBar} className="menu-item">
              <h3>Sustainability Quiz</h3>
            </Link>
            <Link
              to="/fabricchecker"
              onClick={closeSideBar}
              className="menu-item"
            >
              <h3>Fabric Checker</h3>
            </Link>
            <Link to="/articles" onClick={closeSideBar} className="menu-item">
              <h3>Articles</h3>
            </Link>
            <Link to="/forum" onClick={closeSideBar} className="menu-item">
              <h3>Forum</h3>
            </Link>
            <Link to="/about" onClick={closeSideBar} className="menu-item">
              <h3>About</h3>
            </Link>
            <Link to="/about" onClick={closeSideBar} className="menu-item">
              <h3>Partners</h3>
            </Link>
          </Menu>

          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path="/" component={Home} />
            <Route exact path="/articles" component={Articles} />
            <Route path="/articles/:id" component={Article} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/fabricchecker" component={FabricChecker} />
            <Route exact path="/forum" component={Forum} />
            <Route path="/forum/:id" component={ForumPost} />
          </Switch>

          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
