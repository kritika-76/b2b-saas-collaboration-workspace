import type { Member } from "../../constants/team";

interface Props {
  members: Member[];
}

const TeamStats = ({ members }: Props) => {
  const online = members.filter(
    (m) => m.status === "Online"
  ).length;

  return (
    <div className="team-stats">

      <div className="stat-card">
        <h2>{members.length}</h2>
        <p>Total Members</p>
      </div>

      <div className="stat-card">
        <h2>{online}</h2>
        <p>Online</p>
      </div>

      <div className="stat-card">
        <h2>{members.length - online}</h2>
        <p>Offline</p>
      </div>

    </div>
  );
};

export default TeamStats;