import StatCard from "./StatCard";
import { stats } from "../../constants/stats";

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="section-title">
        <h2>Trusted by Growing Teams</h2>
        <p>
          Thousands of users rely on WorkSphere every day to manage their work
          more efficiently.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;