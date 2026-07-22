type PriorityBadgeProps = {
  priority: string;
};

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  return (
    <span className={`priority-badge ${priority.toLowerCase()}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;