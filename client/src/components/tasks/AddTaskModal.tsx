import type { Task } from "../../constants/tasks";
import { useEffect, useState } from "react";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  editingTask: Task | null;
}

const AddTaskModal = ({
  isOpen,
  onClose,
  onSave,
  editingTask,
}: AddTaskModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] =
    useState<"high" | "medium" | "low">("medium");
  const [status, setStatus] =
    useState<"todo" | "progress" | "completed">("todo");
  const [dueDate, setDueDate] = useState("");
  const [assignee, setAssignee] = useState("");

  useEffect(() => {
  if (editingTask) {
    setTitle(editingTask.title);
    setDescription(editingTask.description);
    setPriority(editingTask.priority);
    setStatus(editingTask.status);
    setDueDate(editingTask.dueDate);
    setAssignee(editingTask.assignee);
  } else {
    setTitle("");
    setDescription("");
    setPriority("medium");
    setStatus("todo");
    setDueDate("");
    setAssignee("");
  }
}, [editingTask, isOpen]);

  if (!isOpen) return null;

const handleSave = () => {
  if (!title || !description) return;

  onSave({
    id: editingTask ? editingTask.id : Date.now(),
    title,
    description,
    priority,
    status,
    dueDate,
    assignee,
  });

  onClose();
};

  return (
    <div className="modal-overlay">
      <div className="task-modal">

<h2>
  {editingTask ? "Edit Task" : "Add Task"}
</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e)=>setPriority(e.target.value as any)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select
          value={status}
          onChange={(e)=>setStatus(e.target.value as any)}
        >
          <option value="todo">To Do</option>
          <option value="progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e)=>setDueDate(e.target.value)}
        />

        <input
          placeholder="Assignee"
          value={assignee}
          onChange={(e)=>setAssignee(e.target.value)}
        />

        <div className="modal-buttons">
          <button onClick={onClose}>
            Cancel
          </button>

          <button onClick={handleSave}>
  {editingTask ? "Update Task" : "Save Task"}
</button>
        </div>

      </div>
    </div>
  );
};

export default AddTaskModal;