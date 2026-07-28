import type { Task } from "../../constants/tasks";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}


const TaskCard = ({
  task,
  onEdit,
  onDelete,
}: TaskCardProps) => {
  return (
<div
  className="task-card"
  onClick={() => onEdit(task)}
>
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <div className="task-footer">
        <span className={`priority ${task.priority}`}>
          {task.priority.toUpperCase()}
        </span>

        <span>{task.dueDate}</span>
      </div>

      <div className="assignee">
        Assigned to: {task.assignee}
      </div>

<div
  className="task-actions"
  onClick={(e) => e.stopPropagation()}
>        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
};

export default TaskCard;