import type { Member } from "../../constants/team";

interface Props {
  member: Member;
  onEdit: (member: Member) => void;
  onDelete: (id: number) => void;
  onView: (member: Member) => void;
  onToggleStatus: (id: number) => void;
}
const MemberCard = ({
  member,
  onEdit,
  onDelete,
  onView,
  onToggleStatus,
}: Props) => {
  return (
<div
    className="member-card"
    onClick={() => onView(member)}
>
      <img
        src={member.avatar}
        alt={member.name}
        className="member-avatar"
      />

      <h3>{member.name}</h3>

      <p>{member.role}</p>

      <span>{member.department}</span>

      <small>{member.email}</small>

      <div
        className={`member-status ${
          member.status === "Online"
            ? "online"
            : "offline"
        }`}
      >
        {member.status}
      </div>
<div
    className="member-actions"
    onClick={(e) => e.stopPropagation()}
>
    <button
        className="edit-btn"
        onClick={() => onEdit(member)}
    >
        Edit
    </button>

    <button
        className="delete-btn"
        onClick={() => onDelete(member.id)}
    >
        Delete
    </button>
    <button
  className="status-btn"
  onClick={(e) => {
    e.stopPropagation();
    onToggleStatus(member.id);
  }}
>
  Toggle Status
</button>
</div>
    </div>
  );
};

export default MemberCard;