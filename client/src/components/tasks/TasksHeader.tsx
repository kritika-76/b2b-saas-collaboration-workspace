const TasksHeader = () => {
  return (
    <div className="tasks-header">
      <div>
        <h1>Tasks</h1>
        <p>Manage your daily work efficiently.</p>
      </div>

      <button className="add-task-btn">
        + Add Task
      </button>
    </div>
  );
};

export default TasksHeader;