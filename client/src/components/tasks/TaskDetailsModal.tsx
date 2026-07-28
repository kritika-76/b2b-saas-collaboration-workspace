import type { Task } from "../../constants/tasks";

interface TaskDetailsModalProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
}

const TaskDetailsModal = ({
  task,
  isOpen,
  onClose,
}: TaskDetailsModalProps) => {
  if (!isOpen || !task) return null;

  return (
    <div className="modal-overlay">
      <div className="task-modal">
        <h2>{task.title}</h2>

        <p>{task.description}</p>

        <p>
          <strong>Priority:</strong> {task.priority}
        </p>

        <p>
          <strong>Status:</strong> {task.status}
        </p>

        <p>
          <strong>Due:</strong> {task.dueDate}
        </p>

        <p>
          <strong>Assigned To:</strong> {task.assignee}
        </p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskDetailsModal;