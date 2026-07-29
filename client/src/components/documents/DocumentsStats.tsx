import type { Document } from "../../constants/documents";

interface Props {
  documents: Document[];
}

const DocumentsStats = ({ documents }: Props) => {
  const favorites = documents.filter(
    (doc) => doc.favorite
  ).length;

  const business = documents.filter(
    (doc) => doc.category === "Business"
  ).length;

  return (
    <div className="documents-stats">
      <div className="stat-card">
        <h2>{documents.length}</h2>
        <p>Total Documents</p>
      </div>

      <div className="stat-card">
        <h2>{favorites}</h2>
        <p>Favorites</p>
      </div>

      <div className="stat-card">
        <h2>{business}</h2>
        <p>Business Docs</p>
      </div>
    </div>
  );
};

export default DocumentsStats;