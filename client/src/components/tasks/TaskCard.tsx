import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";

type TaskCardProps = {
  title: string;
  priority: string;
  status: string;
  completed: boolean;
};

const TaskCard = ({
  title,
  priority,
  status,
  completed,
}: TaskCardProps) => {
  return (
    <div className="task-card">
      <div className="task-left">
        <input type="checkbox" checked={completed} readOnly />

        <span
          className={`task-title ${
            completed ? "completed-task" : ""
          }`}
        >
          {title}
        </span>
      </div>

      <div className="task-right">
        <PriorityBadge priority={priority} />
        <StatusBadge status={status} />
      </div>
    </div>
  );
};

export default TaskCard;