import type { ProfileData } from "../../constants/profile";

interface Props{
profile:ProfileData;
onEdit:()=>void;
}

const ProfileCard = ({
  profile,
  onEdit,
}: Props) => {  return (
    <div className="profile-card">

      <img
        src={profile.avatar}
        alt={profile.name}
        className="profile-avatar"
      />

      <h2>{profile.name}</h2>

      <span className="profile-role">
        {profile.role}
      </span>

      <div className="profile-info">

        <p>📧 {profile.email}</p>

        <p>📞 {profile.phone}</p>

        <p>📍 {profile.location}</p>

        <p>🏢 {profile.department}</p>

      </div>

      <button
className="edit-profile-btn"
onClick={onEdit}
>

Edit Profile

</button>

    </div>
  );
};

export default ProfileCard; 