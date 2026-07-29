import type { Document } from "../../constants/documents";

interface Props {
  isOpen: boolean;
  document: Document | null;
  onClose: () => void;
}

const DocumentDetailsModal = ({
  isOpen,
  document,
  onClose,
}: Props) => {
  if (!isOpen || !document) return null;

  return (
    <div className="modal-overlay">
      <div className="document-modal">

        <h2>{document.title}</h2>

        <p>
          <strong>Category:</strong> {document.category}
        </p>

        <p>
          <strong>Owner:</strong> {document.owner}
        </p>

        <p>
          <strong>Date:</strong> {document.date}
        </p>

        <p>
          <strong>Favorite:</strong>{" "}
          {document.favorite ? "⭐ Yes" : "No"}
        </p>

        <button onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
};

export default DocumentDetailsModal;