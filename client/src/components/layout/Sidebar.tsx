import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { sidebarItems } from "../../constants/Sidebar";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <Icon className="sidebar-icon" />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-profile">
        <div className="profile-avatar">
          <FiUser />
        </div>

        <div>
          <h4>Kritika</h4>
          <p>Frontend Developer</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;