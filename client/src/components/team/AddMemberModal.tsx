import { useState } from "react";
import type { Member } from "../../constants/team";

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (member: Member) => void;
}

const AddMemberModal = ({
  isOpen,
  onClose,
  onSave,
}: AddMemberModalProps) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (!name || !role || !email || !department) return;

    onSave({
      id: Date.now(),
      name,
      role,
      email,
      department,
      status: "Online",
      avatar: `https://i.pravatar.cc/150?u=${email}`,
    });

    setName("");
    setRole("");
    setEmail("");
    setDepartment("");

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="member-modal">

        <h2>Add Member</h2>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <div className="modal-buttons">
          <button onClick={onClose}>
            Cancel
          </button>

          <button onClick={handleSave}>
            Add Member
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddMemberModal;