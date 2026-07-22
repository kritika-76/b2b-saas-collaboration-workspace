import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content-wrapper">
          <main className="main-content">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;