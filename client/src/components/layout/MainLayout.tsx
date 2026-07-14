import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="main-content">
          {children}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;