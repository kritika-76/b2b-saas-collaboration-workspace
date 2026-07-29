import type { UserSettings } from "../../constants/settings";

interface Props {
  user: UserSettings;
  setUser: React.Dispatch<React.SetStateAction<UserSettings>>;
}

const PreferencesSettings = ({ user, setUser }: Props) => {
  return (
    <div className="preferences-card">

      <h2>Preferences</h2>

      <div className="preference-item">
        <label>Dark Mode</label>

        <input
          type="checkbox"
          checked={user.darkMode}
          onChange={(e) =>
            setUser({
              ...user,
              darkMode: e.target.checked,
            })
          }
        />
      </div>

      <div className="preference-item">
        <label>Email Notifications</label>

        <input
          type="checkbox"
          checked={user.notifications}
          onChange={(e) =>
            setUser({
              ...user,
              notifications: e.target.checked,
            })
          }
        />
      </div>

      <div className="preference-item">
        <label>Language</label>

        <select
          value={user.language}
          onChange={(e) =>
            setUser({
              ...user,
              language: e.target.value,
            })
          }
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Marathi</option>
        </select>
      </div>

      <div className="preference-item">
        <label>Timezone</label>

        <select
          value={user.timezone}
          onChange={(e) =>
            setUser({
              ...user,
              timezone: e.target.value,
            })
          }
        >
          <option>Asia/Kolkata</option>
          <option>UTC</option>
          <option>America/New_York</option>
          <option>Europe/London</option>
        </select>
      </div>

    </div>
  );
};

export default PreferencesSettings;