import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Projects from "../pages/Projects/Projects";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Tasks from "../pages/Tasks/Tasks";
import Chat from "../pages/Chat/Chat";
import Calendar from "../pages/Calendar";
import Team from "../pages/Team/Team";
import Documents from "../pages/Documents/Documents";
import Settings from "../pages/Settings/Settings";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Routes with Navbar + Sidebar */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/tasks"
            element={<Tasks />}
          />

          <Route
            path="/chat"
            element={<Chat />}
          />

          <Route
            path="/calendar"
            element={<Calendar />}
          />

          <Route
            path="/team"
            element={<Team />}
          />

          <Route
            path="/documents"
            element={<Documents />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Route>

        {/* Public Routes */}
        <Route
          path="/login"
          element={<Login />}
        />
<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
        <Route
          path="/register"
          element={<Register />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;