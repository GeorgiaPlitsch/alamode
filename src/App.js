import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
// import FabricChecker from "./pages/FabricChecker/FabricChecker";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <FabricChecker /> */}
    </div>
  );
}

export default App;
