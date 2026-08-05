import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;

  editingSkill: string | null;

  onSave: (skill: string) => void;

  onEdit: (
    oldSkill: string,
    newSkill: string
  ) => void;
}

const AddSkillModal = ({
  isOpen,
  onClose,
  editingSkill,
  onSave,
  onEdit,
}: Props) => {
  const [skill, setSkill] = useState("");

  useEffect(() => {
    if (editingSkill) {
      setSkill(editingSkill);
    } else {
      setSkill("");
    }
  }, [editingSkill]);

  if (!isOpen) return null;

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!skill.trim()) return;

    if (editingSkill) {
      onEdit(editingSkill, skill);
    } else {
      onSave(skill);
    }

    setSkill("");

    onClose();
  };

  return (
    <div className="modal-overlay">

      <form
        className="profile-modal"
        onSubmit={handleSubmit}
      >

        <h2>
          {editingSkill
            ? "Edit Skill"
            : "Add Skill"}
        </h2>

        <input
          type="text"
          placeholder="Enter skill"
          value={skill}
          onChange={(e) =>
            setSkill(e.target.value)
          }
        />

        <div className="modal-buttons">

          <button
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button type="submit">
            {editingSkill
              ? "Update"
              : "Add Skill"}
          </button>

        </div>

      </form>

    </div>
  );
};

export default AddSkillModal;