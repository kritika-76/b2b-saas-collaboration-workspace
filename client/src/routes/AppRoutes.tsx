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
import Calendar from "../pages/Calendar.tsx";
import Team from "../pages/Team/Team";
import Documents from "../pages/Documents/Documents.tsx";
import Settings from "../pages/Settings/Settings.tsx";

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>

        {/* Routes that use Navbar + Sidebar */}
        <Route element={<MainLayout />}>
        <Route path="/documents" element={<Documents />} />
<Route path="/tasks" element={<Tasks />} />
<Route
  path="/settings"
  element={<Settings />}
/>
<Route path="/chat" element={<Chat />} />
<Route path="/calendar" element={<Calendar />} />
<Route path="/team" element={<Team />} />
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