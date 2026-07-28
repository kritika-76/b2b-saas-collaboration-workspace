import type { Member } from "../../constants/team";

interface Props{
    member:Member|null;
    isOpen:boolean;
    onClose:()=>void;
}

const MemberDetailsModal=({
    member,
    isOpen,
    onClose,
}:Props)=>{

    if(!isOpen||!member)return null;

    return(
        <div className="modal-overlay">

            <div className="member-modal">

                <img
                    src={member.avatar}
                    className="member-avatar"
                />

                <h2>{member.name}</h2>

                <p>{member.role}</p>

                <p>{member.department}</p>

                <p>{member.email}</p>

                <p>Status : {member.status}</p>

                <button
                    onClick={onClose}
                >
                    Close
                </button>

            </div>

        </div>
    );
};

export default MemberDetailsModal;