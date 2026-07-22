import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Boost Your Team's Productivity?</h2>

        <p>
          Join thousands of teams using WorkSphere to manage projects,
          collaborate in real time, and deliver results faster.
        </p>

        <Link to="/register" className="cta-btn">
          Get Started Today
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default CTA;