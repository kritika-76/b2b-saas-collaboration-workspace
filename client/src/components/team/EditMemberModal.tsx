import { useEffect, useState } from "react";
import type { Member } from "../../constants/team";

interface Props {
  isOpen: boolean;
  member: Member | null;
  onClose: () => void;
  onSave: (member: Member) => void;
}

const EditMemberModal = ({
  isOpen,
  member,
  onClose,
  onSave,
}: Props) => {
  const [form, setForm] = useState<Member | null>(null);

  useEffect(() => {
    setForm(member);
  }, [member]);

  if (!isOpen || !form) return null;

  const handleChange = (
    field: keyof Member,
    value: string
  ) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="member-modal">

        <h2>Edit Member</h2>

        <input
          value={form.name}
          onChange={(e) =>
            handleChange("name", e.target.value)
          }
        />

        <input
          value={form.role}
          onChange={(e) =>
            handleChange("role", e.target.value)
          }
        />

        <input
          value={form.department}
          onChange={(e) =>
            handleChange("department", e.target.value)
          }
        />

        <input
          value={form.email}
          onChange={(e) =>
            handleChange("email", e.target.value)
          }
        />

        <select
          value={form.status}
          onChange={(e) =>
            handleChange(
              "status",
              e.target.value as "Online" | "Offline"
            )
          }
        >
          <option>Online</option>
          <option>Offline</option>
        </select>

        <div className="modal-buttons">
          <button onClick={onClose}>
            Cancel
          </button>

          <button
            onClick={() => {
              onSave(form);
              onClose();
            }}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditMemberModal;