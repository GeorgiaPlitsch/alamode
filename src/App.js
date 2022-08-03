import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
// import FabricChecker from "./pages/FabricChecker/FabricChecker";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <FabricChecker /> */}
      <Footer />
    </div>
  );
}

export default App;
