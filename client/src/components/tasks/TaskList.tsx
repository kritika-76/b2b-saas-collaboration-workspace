import TaskCard from "./TaskCard";
import { tasks } from "../../constants/tasks";

const TaskList = () => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          priority={task.priority}
          status={task.status}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TaskList;