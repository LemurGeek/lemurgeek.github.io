import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-pearl_bush">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
