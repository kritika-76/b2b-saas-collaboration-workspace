import type { Task } from "../../constants/tasks";
import TaskColumn from "./TaskColumn";

interface TaskBoardProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskBoard = ({
  tasks,
  onEdit,
  onDelete,
}: TaskBoardProps) => {
  return (
    <div className="task-board">
      <TaskColumn
        title="To Do"
        tasks={tasks.filter((t) => t.status === "todo")}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <TaskColumn
        title="In Progress"
        tasks={tasks.filter((t) => t.status === "progress")}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <TaskColumn
        title="Completed"
        tasks={tasks.filter((t) => t.status === "completed")}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TaskBoard;