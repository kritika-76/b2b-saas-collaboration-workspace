import TasksHeader from "../../components/tasks/TasksHeader";
import TaskList from "../../components/tasks/TaskList";

const Tasks = () => {
  return (
    <div className="dashboard-page">
      <TasksHeader />
      <TaskList />
    </div>
  );
};

export default Tasks;