import { useEffect, useState } from "react";
import TaskBoard from "../../components/tasks/TaskBoard";
import AddTaskModal from "../../components/tasks/AddTaskModal";
import { initialTasks, type Task } from "../../constants/tasks";
import Toast from "../../components/common/Toast";
import "../../styles/tasks.css";

const STORAGE_KEY = "worksphere-tasks";

const Tasks = () => {
  const [search, setSearch] = useState("");
const [editingTask, setEditingTask] = useState<Task | null>(null);
const [toast, setToast] = useState<{
  message: string;
  type: "success" | "error";
} | null>(null);

  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialTasks;
  });

  const showToast = (
  message: string,
  type: "success" | "error" = "success"
) => {
  setToast({ message, type });

  setTimeout(() => {
    setToast(null);
  }, 3000);
};


const handleDelete = (id: number) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmed) return;

  showToast("Task deleted successfully.");
  setTasks((prev) =>
    prev.filter((task) => task.id !== id)
  );
};

const handleEdit = (task: Task) => {
  setEditingTask(task);
  setIsModalOpen(true);
};

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(tasks)
    );
  }, [tasks]);

const handleSaveTask = (task: Task) => {
  if (editingTask) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? task : t
      )
    );
  } else {
    showToast(
  editingTask
    ? "Task updated successfully."
    : "Task added successfully."
);
    setTasks((prev) => [...prev, task]);
  }

  setEditingTask(null);
};

  return (
  <div className="tasks-page">

    <div className="tasks-header">
      <div>
        <h1>Task Management</h1>
        <p>Manage your workspace tasks efficiently.</p>
      </div>

      <button
        className="add-task-btn"
        onClick={() => setIsModalOpen(true)}
      >
        + Add Task
      </button>
    </div>

    <input
      className="task-search"
      placeholder="Search task..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <div className="task-stats">

      <div className="stat-card total">
        <h2>{tasks.length}</h2>
        <p>Total Tasks</p>
      </div>

      <div className="stat-card todo">
        <h2>{tasks.filter(t => t.status === "todo").length}</h2>
        <p>To Do</p>
      </div>

      <div className="stat-card progress">
        <h2>{tasks.filter(t => t.status === "progress").length}</h2>
        <p>In Progress</p>
      </div>

      <div className="stat-card completed">
        <h2>{tasks.filter(t => t.status === "completed").length}</h2>
        <p>Completed</p>
      </div>

    </div>

    <TaskBoard
      tasks={tasks.filter(task =>
        task.title.toLowerCase().includes(search.toLowerCase())
      )}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />

    <AddTaskModal
      isOpen={isModalOpen}
      editingTask={editingTask}
      onClose={() => {
        setIsModalOpen(false);
        setEditingTask(null);
      }}
      onSave={handleSaveTask}
    />

    {toast && (
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(null)}
      />
    )}

  </div>
);

};

export default Tasks;