import type { Task } from "../../constants/tasks";
import TaskCard from "./TaskCard";

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskColumn = ({
  title,
  tasks,
  onEdit,
  onDelete,
}: TaskColumnProps) => {
  return (
    <div className="task-column">
      <h2>{title}</h2>

      {tasks.length === 0 ? (
        <p className="empty-column">No tasks</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default TaskColumn;