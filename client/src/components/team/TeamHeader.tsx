interface TeamHeaderProps {
  search: string;
  setSearch: (value: string) => void;
  onAdd: () => void;
  roleFilter: string;
setRoleFilter: (value: string) => void;
}

const TeamHeader = ({
  search,
  setSearch,
  onAdd,
  roleFilter,
  setRoleFilter,
}: TeamHeaderProps) => {
  return (
    <div className="team-header">

      <div>
        <h1>Team Management</h1>
        <p>Manage your workspace members.</p>
      </div>

      <input
        className="team-search"
        placeholder="Search members..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
  className="role-filter"
  value={roleFilter}
  onChange={(e) => setRoleFilter(e.target.value)}
>
  <option value="All">All Roles</option>
  <option value="Frontend Developer">Frontend Developer</option>
  <option value="Backend Developer">Backend Developer</option>
  <option value="UI/UX Designer">UI/UX Designer</option>
  <option value="Manager">Manager</option>
</select>
      <button
  className="invite-btn"
  onClick={onAdd}
>
  + Invite Member
</button>

    </div>
  );
};

export default TeamHeader;