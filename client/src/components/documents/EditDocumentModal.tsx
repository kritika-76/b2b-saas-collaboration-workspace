import { useEffect, useState } from "react";
import type { Document } from "../../constants/documents";

interface Props {
  isOpen: boolean;
  document: Document | null;
  onClose: () => void;
  onSave: (document: Document) => void;
}

const EditDocumentModal = ({
  isOpen,
  document,
  onClose,
  onSave,
}: Props) => {
  const [form, setForm] = useState<Document | null>(null);

  useEffect(() => {
    setForm(document);
  }, [document]);

  if (!isOpen || !form) return null;

  return (
    <div className="modal-overlay">
      <div className="document-modal">

        <h2>Edit Document</h2>

        <input
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <input
          value={form.owner}
          onChange={(e) =>
            setForm({
              ...form,
              owner: e.target.value,
            })
          }
        />

        <select
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        >
          <option>Business</option>
          <option>Development</option>
          <option>Design</option>
          <option>Finance</option>
          <option>HR</option>
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

export default EditDocumentModal;