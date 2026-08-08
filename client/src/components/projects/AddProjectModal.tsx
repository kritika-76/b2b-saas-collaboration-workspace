import { useState } from "react";
import { FiX } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  technology: string;
  progress: number;
  members: number;
  status: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (project: Project) => void;
}

const AddProjectModal = ({
  isOpen,
  onClose,
  onCreate,
}: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [technology, setTechnology] =
    useState("");
  const [status, setStatus] =
    useState("Planning");
  const [progress, setProgress] =
    useState(0);
  const [members, setMembers] =
    useState(1);

  if (!isOpen) return null;

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newProject: Project = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      technology: technology.trim(),
      progress,
      members,
      status,
    };

    onCreate(newProject);

    setTitle("");
    setDescription("");
    setTechnology("");
    setStatus("Planning");
    setProgress(0);
    setMembers(1);

    onClose();
  };

  return (
    <div className="project-modal-overlay">

      <form
        className="project-modal"
        onSubmit={handleSubmit}
      >

        <div className="project-modal-header">

          <div>
            <h2>Create New Project</h2>
            <p>
              Add a new project to your workspace.
            </p>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
          >
            <FiX />
          </button>

        </div>

        <div className="project-form-group">
          <label>Project Name</label>

          <input
            type="text"
            placeholder="e.g. AI Dashboard"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            required
          />
        </div>

        <div className="project-form-group">
          <label>Description</label>

          <textarea
            placeholder="Describe your project..."
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            rows={3}
          />
        </div>

        <div className="project-form-group">
          <label>Technology / Stack</label>

          <input
            type="text"
            placeholder="e.g. React + Node.js"
            value={technology}
            onChange={(e) =>
              setTechnology(e.target.value)
            }
          />
        </div>

        <div className="project-form-row">

          <div className="project-form-group">
            <label>Status</label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option>Planning</option>
              <option>In Progress</option>
              <option>Development</option>
              <option>Testing</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="project-form-group">
            <label>Progress (%)</label>

            <input
              type="number"
              min="0"
              max="100"
              value={progress}
              onChange={(e) =>
                setProgress(
                  Number(e.target.value)
                )
              }
            />
          </div>

        </div>

        <div className="project-form-group">
          <label>Team Members</label>

          <input
            type="number"
            min="1"
            value={members}
            onChange={(e) =>
              setMembers(
                Number(e.target.value)
              )
            }
          />
        </div>

        <div className="project-modal-actions">

          <button
            type="button"
            className="cancel-project-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="create-project-btn"
          >
            Create Project
          </button>

        </div>

      </form>

    </div>
  );
};

export default AddProjectModal;