import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <div className="min-h-[calc(100vh+290px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
