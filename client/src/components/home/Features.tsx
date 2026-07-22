import FeatureCard from "./FeatureCard";
import { features } from "../../constants/features";

const Features = () => {
  return (
    <section className="features-section">
      <div className="section-title">
        <h2>Everything Your Team Needs</h2>

        <p>
          Powerful tools to simplify collaboration and improve productivity.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;