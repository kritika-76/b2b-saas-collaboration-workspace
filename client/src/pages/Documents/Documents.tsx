import { useEffect, useState } from "react";

import DocumentsHeader from "../../components/documents/DocumentsHeader";
import DocumentsStats from "../../components/documents/DocumentsStats";
import DocumentGrid from "../../components/documents/DocumentGrid";
import UploadDocumentModal from "../../components/documents/UploadDocumentModal";
import Toast from "../../components/documents/Toast";

import {
  documents as initialDocuments,
  type Document,
} from "../../constants/documents";

import "../../styles/documents.css";
import DocumentDetailsModal from "../../components/documents/DocumentDetailsModal";
import EditDocumentModal from "../../components/documents/EditDocumentModal";

const STORAGE_KEY = "worksphere-documents";
const Documents = () => {
    const [toast, setToast] = useState("");
  const [search, setSearch] = useState("");
const [editingDocument, setEditingDocument] =
  useState<Document | null>(null);

const [isEditOpen, setIsEditOpen] =
  useState(false);

const [selectedDocument, setSelectedDocument] =
  useState<Document | null>(null);

  const [categoryFilter, setCategoryFilter] =
  useState("All");

const [sortBy, setSortBy] =
  useState("Newest");

const [showFavorites, setShowFavorites] =
  useState(false);

const [isDetailsOpen, setIsDetailsOpen] =
  useState(false);
  const [documents, setDocuments] = useState<Document[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialDocuments;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(documents)
    );
  }, [documents]);
const showToast = (message: string) => {
  setToast(message);

  setTimeout(() => {
    setToast("");
  }, 3000);
};
 const filteredDocuments = [...documents]
  .filter((document) =>
    document.title
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .filter((document) =>
    categoryFilter === "All"
      ? true
      : document.category === categoryFilter
  )
  .filter((document) =>
    showFavorites
      ? document.favorite
      : true
  )
  .sort((a, b) => {
    if (sortBy === "Title") {
      return a.title.localeCompare(b.title);
    }

    if (sortBy === "Newest") {
      return b.id - a.id;
    }

    return a.id - b.id;
  });

const handleAddDocument = (document: Document) => {
  setDocuments((prev) => [...prev, document]);
  showToast("Document uploaded successfully!");
};
const handleUpdateDocument = (
  updated: Document
) => {
  setDocuments((prev) =>
    prev.map((doc) =>
      doc.id === updated.id ? updated : doc
    )
  );

  showToast("Document updated successfully!");
};

const handleDelete = (id: number) => {
  setDocuments((prev) =>
    prev.filter((doc) => doc.id !== id)
  );

  showToast("Document deleted.");
};

const handleFavorite = (id: number) => {
  setDocuments((prev) =>
    prev.map((doc) =>
      doc.id === id
        ? {
            ...doc,
            favorite: !doc.favorite,
          }
        : doc
    )
  );

  showToast("Favorite updated.");
};
  return (
    <div className="documents-page">
    <DocumentsHeader
  search={search}
  setSearch={setSearch}
  categoryFilter={categoryFilter}
  setCategoryFilter={setCategoryFilter}
  sortBy={sortBy}
  setSortBy={setSortBy}
  showFavorites={showFavorites}
  setShowFavorites={setShowFavorites}
  onUpload={() => setIsModalOpen(true)}
/>

      <DocumentsStats
        documents={filteredDocuments}
      />

      <DocumentGrid
  documents={filteredDocuments}
  onEdit={(document) => {
    setEditingDocument(document);
    setIsEditOpen(true);
  }}
  onDelete={handleDelete}
  onView={(document) => {
    setSelectedDocument(document);
    setIsDetailsOpen(true);
  }}
  onFavorite={handleFavorite}
/>

      <UploadDocumentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddDocument}
      />
      
      <EditDocumentModal
  isOpen={isEditOpen}
  document={editingDocument}
  onClose={() => setIsEditOpen(false)}
  onSave={handleUpdateDocument}
/>

<DocumentDetailsModal
  isOpen={isDetailsOpen}
  document={selectedDocument}
  onClose={() => setIsDetailsOpen(false)}
/>

<Toast message={toast} />
    </div>
  );
};

export default Documents;