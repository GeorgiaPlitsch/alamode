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
      <Header />
      <Menu pageWrapId={"page-wrap"} />
      <main id="page-wrap">
        <Menu className="App__menu">
          <h1>ÀLaMode</h1>
          <a className="menu-item" href="/">
            <h3>Home</h3>
          </a>
          <a className="menu-item" href="/about">
            <h3>Fabric Composition Checker</h3>
          </a>
          <a className="menu-item" href="/contact">
            <h3>Sustainability Quiz</h3>
          </a>
          <a className="menu-item" href="">
            <h3>Articles</h3>
          </a>
          <a className="menu-item" href="">
            <h3>About</h3>
          </a>
        </Menu>
        {/* <Home /> */}
        {/* <Articles /> */}
        <FabricChecker />
        <Footer />
      </main>
    </div>
  );
}

export default App;
