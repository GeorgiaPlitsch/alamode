import "./App.scss";
import { slide as Menu } from "react-burger-menu";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
// import FabricChecker from "./pages/FabricChecker/FabricChecker";

function App() {
  // showSettings (event) {
  //   event.preventDefault();
  // };
  return (
    <div className="App">
      <Header />
      <Menu pageWrapId={"page-wrap"} />
      <main id="page-wrap">
        <Menu className="App__menu">
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <Home />
        {/* <FabricChecker /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
