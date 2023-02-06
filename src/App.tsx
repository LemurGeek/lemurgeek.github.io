import "./App.css";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App bg-pearl_bush">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
