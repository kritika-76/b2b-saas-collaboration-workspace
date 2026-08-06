import type { ProfileData } from "../../constants/profile";
import { FiEdit2 } from "react-icons/fi";

interface Props {
  profile: ProfileData;
  onEdit: () => void;
}

const ProfileCard = ({
  profile,
  onEdit,
}: Props) => {
  return (
    <div className="profile-card">

      <div className="profile-avatar-wrapper">

        <img
          src={profile.avatar}
          alt={profile.name}
          className="profile-avatar"
        />

        <span className="online-badge"></span>

      </div>
<h2>{profile.name}</h2>

<p className="profile-role">
  {profile.role}
</p>

<p className="profile-exp">
  {profile.experience}
</p>

<p className="profile-joined">
  {profile.joined}
</p>

<button
  className="edit-profile-btn"
  onClick={onEdit}
>
  <FiEdit2 />
  Edit Profile
</button>

    </div>
  );
};

export default ProfileCard;