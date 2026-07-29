import type { UserSettings } from "../../constants/settings";

interface Props {
  user: UserSettings;
}

const ProfileCard = ({ user }: Props) => {
  return (
    <div className="profile-card">

    <div className="profile-avatar">

  {user.avatar ? (

    <img
      src={user.avatar}
      alt={user.name}
    />

  ) : (

    user.name.charAt(0)

  )}

</div>
      <h2>{user.name}</h2>

      <p>{user.role}</p>

      <span>{user.email}</span>

    </div>
  );
};

export default ProfileCard;