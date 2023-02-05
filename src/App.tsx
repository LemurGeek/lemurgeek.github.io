import "./App.css";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/navbar/Navbar";
import Home from "./components/home/Home";

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
