import type { UserSettings } from "../../constants/settings";

interface Props {
  user: UserSettings;
  setUser: React.Dispatch<React.SetStateAction<UserSettings>>;
}

const AccountSettings = ({ user, setUser }: Props) => {
  return (
    <div className="account-settings">

      <label>Name</label>

      <input
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
      />

      <label>Email</label>

      <input
        value={user.email}
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value,
          })
        }
      />

      <label>Phone</label>

      <input
        value={user.phone}
        onChange={(e) =>
          setUser({
            ...user,
            phone: e.target.value,
          })
        }
      />

      <label>Role</label>

      <input
        value={user.role}
        onChange={(e) =>
          setUser({
            ...user,
            role: e.target.value,
          })
        }
      />

      <label>Bio</label>

      <textarea
        rows={4}
        value={user.bio}
        onChange={(e) =>
          setUser({
            ...user,
            bio: e.target.value,
          })
        }
      />

    </div>
  );
};

export default AccountSettings;