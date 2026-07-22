type StatCardProps = {
  number: string;
  label: string;
};

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div className="stat-card">
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
};

export default StatCard;