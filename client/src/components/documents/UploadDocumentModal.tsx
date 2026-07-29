import { useState } from "react";
import type { Document } from "../../constants/documents";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (document: Document) => void;
}

const UploadDocumentModal = ({
  isOpen,
  onClose,
  onSave,
}: Props) => {
  const [title, setTitle] = useState("");
const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
if (!title || !owner || !category) return;
    const today = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    onSave({
      id: Date.now(),
      title,
      category,
      owner,
      date: today,
      favorite: false,
    });

    setTitle("");
setCategory("");
    setOwner("");

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="document-modal">

        <h2>Upload Document</h2>

        <input
          placeholder="Document Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />

       <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="" disabled>
    Select role Category
  </option>

  <option value="Business">Business</option>
  <option value="Development">Development</option>
  <option value="Design">Design</option>
  <option value="Finance">Finance</option>
  <option value="HR">HR</option>
</select>

        <div className="modal-buttons">
          <button onClick={onClose}>
            Cancel
          </button>

          <button onClick={handleSave}>
            Upload
          </button>
        </div>

      </div>
    </div>
  );
};

export default UploadDocumentModal;