import {
  FiHome,
  FiFolder,
  FiCheckSquare,
  FiMessageCircle,
  FiCalendar,
  FiUsers,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

export const sidebarItems = [
  { title: "Dashboard", icon: FiHome, path: "/dashboard" },
  { title: "Projects", icon: FiFolder, path: "/projects" },
  { title: "Tasks", icon: FiCheckSquare, path: "/tasks" },
  { title: "Chat", icon: FiMessageCircle, path: "/chat" },
  { title: "Calendar", icon: FiCalendar, path: "/calendar" },
  { title: "Team", icon: FiUsers, path: "/team" },
  { title: "Documents", icon: FiFileText, path: "/documents" },
  { title: "Settings", icon: FiSettings, path: "/settings" },
];