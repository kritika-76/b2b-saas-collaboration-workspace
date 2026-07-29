import type { Document } from "../../constants/documents";

interface Props {
  document: Document;
  onEdit: (document: Document) => void;
  onDelete: (id: number) => void;
  onView: (document: Document) => void;
  onFavorite: (id: number) => void;
}

const DocumentCard = ({
  document,
  onEdit,
  onDelete,
  onView,
  onFavorite,
}: Props) => {  return (
<div
  className="document-card"
  onClick={() => onView(document)}
>
      <div className="document-icon">📄</div>

      <h3>{document.title}</h3>

      <p>{document.category}</p>

      <span>{document.owner}</span>

      <small>{document.date}</small>

      {document.favorite && (
        <div className="favorite-badge">
          ⭐ Favorite
        </div>
      )}
<div
  className="document-actions"
  onClick={(e) => e.stopPropagation()}
>

  <button
    className="edit-btn"
    onClick={() => onEdit(document)}
  >
    Edit
  </button>

  <button
    className="delete-btn"
    onClick={() => onDelete(document.id)}
  >
    Delete
  </button>

  <button
    className="favorite-btn"
    onClick={() => onFavorite(document.id)}
  >
    {document.favorite ? "★" : "☆"}
  </button>

</div>
    </div>
    
  );
};

export default DocumentCard;