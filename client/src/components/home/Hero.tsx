import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          🚀 Smart Collaboration Platform
        </span>

        <h1>
          Manage Projects,
          <br />
          Collaborate with Your Team,
          <br />
          <span>All in One Workspace.</span>
        </h1>

        <p>
          WorkSphere helps teams manage projects, organize tasks,
          communicate in real-time, and improve productivity with a modern,
          secure, and intuitive workspace.
        </p>

        <div className="hero-buttons">
          <Link to="/dashboard" className="primary-btn">
            Go to Dashboard
            <FiArrowRight />
          </Link>

          <Link to="/projects" className="secondary-btn">
            View Projects
          </Link>
        </div>

        <div className="hero-features">
          <div>
            <FiCheckCircle />
            <span>Real-time Collaboration</span>
          </div>

          <div>
            <FiCheckCircle />
            <span>Task Management</span>
          </div>

          <div>
            <FiCheckCircle />
            <span>Secure Workspace</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-card">
          <div className="card-top">
            <h3>Project Overview</h3>
            <span>85%</span>
          </div>

          <div className="progress-track">
            <div className="progress-value"></div>
          </div>

          <div className="mini-stats">
            <div>
              <h4>18</h4>
              <p>Projects</p>
            </div>

            <div>
              <h4>245</h4>
              <p>Tasks</p>
            </div>

            <div>
              <h4>32</h4>
              <p>Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;