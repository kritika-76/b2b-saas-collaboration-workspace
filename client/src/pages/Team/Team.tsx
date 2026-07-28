import { useEffect, useState } from "react";
import TeamHeader from "../../components/team/TeamHeader";
import TeamStats from "../../components/team/TeamStats";
import MemberGrid from "../../components/team/MemberGrid";
import AddMemberModal from "../../components/team/AddMemberModal";
import EditMemberModal from "../../components/team/EditMemberModal";
import MemberDetailsModal from "../../components/team/MemberDetailsModal";
import Toast from "../../components/team/Toast";
import {
  teamMembers,
  type Member,
} from "../../constants/team";

import "../../styles/team.css";

const STORAGE_KEY = "worksphere-team";

const Team = () => {
    const [toast, setToast] = useState("");
const showToast = (message: string) => {
  setToast(message);

  setTimeout(() => {
    setToast("");
  }, 3000);
};
    const [roleFilter, setRoleFilter] = useState("All");
    const [editingMember, setEditingMember] =
  useState<Member | null>(null);

const [isEditOpen, setIsEditOpen] =
  useState(false);
  const [search, setSearch] = useState("");

  const [members, setMembers] = useState<Member[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : teamMembers;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(members)
    );
  }, [members]);

 const filteredMembers = members.filter((member) => {
  const matchesSearch = member.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesRole =
    roleFilter === "All" ||
    member.role === roleFilter;

  return matchesSearch && matchesRole;
});

  const handleAddMember = (member: Member) => {
    setMembers((prev) => [...prev, member]);
  };
  const handleDelete = (id:number)=>{
    setMembers(prev=>prev.filter(member=>member.id!==id));
}
const handleToggleStatus = (id: number) => {
  setMembers((prev) =>
    prev.map((member) =>
      member.id === id
        ? {
            ...member,
            status:
              member.status === "Online"
                ? "Offline"
                : "Online",
          }
        : member
    )
  );

  showToast("Status updated");
};
const [selectedMember,setSelectedMember]=
useState<Member|null>(null);

const [isDetailsOpen,setIsDetailsOpen]=
useState(false);

  const handleUpdateMember = (
  updated: Member
) => {
  setMembers((prev) =>
    prev.map((member) =>
      member.id === updated.id
        ? updated
        : member
    )
  );
};
  return (
    <div className="team-page">

      <TeamHeader
  search={search}
  setSearch={setSearch}
  roleFilter={roleFilter}
  setRoleFilter={setRoleFilter}
  onAdd={() => setIsModalOpen(true)}
/>

      <TeamStats members={filteredMembers} />

<MemberGrid
    members={filteredMembers}
    onEdit={(member)=>{
        setEditingMember(member);
        setIsEditOpen(true);
    }}
    onDelete={handleDelete}
    onView={(member)=>{
        setSelectedMember(member);
        setIsDetailsOpen(true);
    }}
    onToggleStatus={handleToggleStatus}
/>
      <AddMemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddMember}
      />
      <EditMemberModal
  isOpen={isEditOpen}
  member={editingMember}
  onClose={() => setIsEditOpen(false)}
  onSave={handleUpdateMember}
/>

<MemberDetailsModal
    member={selectedMember}
    isOpen={isDetailsOpen}
    onClose={()=>setIsDetailsOpen(false)}
/>

   
   <Toast message={toast} /> </div>
  );
};

export default Team;