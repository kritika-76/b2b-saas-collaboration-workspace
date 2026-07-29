import type { Document } from "../../constants/documents";
import DocumentCard from "./DocumentCard";

interface Props {
  documents: Document[];
  onEdit: (document: Document) => void;
  onDelete: (id: number) => void;
  onView: (document: Document) => void;
  onFavorite: (id: number) => void;
}

const DocumentGrid = ({
  documents,
  onEdit,
  onDelete,
  onView,
  onFavorite,
}: Props) => {  
 return (
  <div className="document-grid">
    {documents.length === 0 ? (
      <div className="empty-state">
        <h2>📄 No Documents Found</h2>

        <p>
          Try changing the search or filters.
        </p>
      </div>
    ) : (
      documents.map((document) => (
        <DocumentCard
          key={document.id}
          document={document}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
          onFavorite={onFavorite}
        />
      ))
    )}
  </div>
);
};

export default DocumentGrid;