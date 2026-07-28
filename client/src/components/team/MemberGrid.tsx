import type { Member } from "../../constants/team";
import MemberCard from "./MemberCard";

interface Props{
    members: Member[];
    onEdit: (member: Member) => void;
    onDelete: (id: number) => void;
    onView: (member: Member) => void;
    onToggleStatus: (id: number) => void;
}

const MemberGrid = ({
  members,
  onEdit,
  onDelete,
  onView,
  onToggleStatus,
}: Props) => { return (
    <div className="member-grid">
      {members.map((member) => (
        <MemberCard
    key={member.id}
    member={member}
    onEdit={onEdit}
    onDelete={onDelete}
    onView={onView}
    onToggleStatus={onToggleStatus}
/>
      ))}
    </div>
  );
};

export default MemberGrid;