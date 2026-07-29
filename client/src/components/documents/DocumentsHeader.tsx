interface Props {
  search: string;
  setSearch: (value: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  showFavorites: boolean;
  setShowFavorites: (value: boolean) => void;
  onUpload: () => void;
}

const DocumentsHeader = ({
  search,
  setSearch,
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy,
  showFavorites,
  setShowFavorites,
  onUpload,
}: Props) => {
  return (
    <div className="documents-header">

      <div>
        <h1>Documents</h1>
        <p>Manage your workspace documents.</p>
      </div>

      <input
        className="document-search"
        placeholder="Search documents..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
  value={categoryFilter}
  onChange={(e) => setCategoryFilter(e.target.value)}
>
  <option value="All">All Categories</option>
  <option value="Business">Business</option>
  <option value="Development">Development</option>
  <option value="Design">Design</option>
  <option value="Finance">Finance</option>
  <option value="HR">HR</option>
</select>

<select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="Newest">Newest</option>
  <option value="Oldest">Oldest</option>
  <option value="Title">Title</option>
</select>

<label className="favorite-filter">
  <input
    type="checkbox"
    checked={showFavorites}
    onChange={(e) =>
      setShowFavorites(e.target.checked)
    }
  />
  Favorites
</label>

      <button
        className="upload-btn"
        onClick={onUpload}
      >
        + Upload Document
      </button>

    </div>
  );
};

export default DocumentsHeader;