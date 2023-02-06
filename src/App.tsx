import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-pearl_bush">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
