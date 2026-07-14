import { useState } from "react";
import {
  FiMenu,
  FiBell,
  FiMessageSquare,
  FiSearch,
  FiUser,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-btn">
          <FiMenu />
        </button>

        <h2 className="logo">
          <span>WORK </span>Sphere
        </h2>
      </div>

      <div className="search-box">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search projects, tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="clear-btn"
            onClick={() => setSearch("")}
          >
            <FiX />
          </button>
        )}
      </div>

      <div className="navbar-right">
       <div className="notification-wrapper">
  <button
    onClick={() =>
      setShowNotifications(!showNotifications)
    }
  >
    <FiBell />
  </button>

  {showNotifications && (
    <div className="notification-dropdown">

      <h4>Notifications</h4>

      <div className="notification-item">
        ✅ New project assigned
      </div>

      <div className="notification-item">
        💬 Team meeting at 4 PM
      </div>

      <div className="notification-item">
        📁 Project updated
      </div>

      <div className="notification-item">
        🎉 Welcome to WorkSphere
      </div>

    </div>
  )}
</div>

        <button>
          <FiMessageSquare />
        </button>

      <div className="profile-wrapper">

  <div
    className="avatar"
    onClick={() => setShowProfile(!showProfile)}
  >
    <FiUser />
  </div>

  {showProfile && (
    <div className="profile-dropdown">

      <div className="profile-item">
        <FiUser />
        <span>My Profile</span>
      </div>

      <div className="profile-item">
        <FiSettings />
        <span>Settings</span>
      </div>

      <div className="profile-item logout">
        <FiLogOut />
        <span>Logout</span>
      </div>

    </div>
  )}

</div>
      </div>
    </header>
  );
};

export default Navbar;