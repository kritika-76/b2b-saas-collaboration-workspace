import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Projects from "../pages/Projects/Projects";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Tasks from "../pages/Tasks/Tasks";
import Chat from "../pages/Chat/Chat";

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>

        {/* Routes that use Navbar + Sidebar */}
        <Route element={<MainLayout />}>
<Route path="/tasks" element={<Tasks />} />
<Route path="/chat" element={<Chat />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />

        </Route>

        {/* Routes without layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;