import type { ProfileData } from "../../constants/profile";

interface Props {
  profile: ProfileData;
}

const StatsCard = ({ profile }: Props) => {
  return (
    <div className="profile-stats">

      <div className="stat-card">
        <h2>{profile.completedProjects}</h2>
        <p>Projects</p>
      </div>

      <div className="stat-card">
        <h2>{profile.completedTasks}</h2>
        <p>Tasks</p>
      </div>

      <div className="stat-card">
        <h2>{profile.teamMembers}</h2>
        <p>Team Members</p>
      </div>

    </div>
  );
};

export default StatsCard;