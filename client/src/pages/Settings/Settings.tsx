import { useEffect, useState } from "react";

import PreferencesSettings from "../../components/settings/PreferencesSettings";
import SettingsHeader from "../../components/settings/SettingsHeader";
import ProfileCard from "../../components/settings/ProfileCard";
import AccountSettings from "../../components/settings/AccountSettings";
import SaveButton from "../../components/settings/SaveButton";
import SecuritySettings from "../../components/settings/SecuritySettings";
import ProfilePicture from "../../components/settings/ProfilePicture";

import {
  defaultSettings,
  type UserSettings,
} from "../../constants/settings";

import "../../styles/settings.css";

const STORAGE_KEY = "worksphere-settings";

const Settings = () => {
  const [user, setUser] = useState<UserSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    return saved
      ? {
          ...defaultSettings,
          ...JSON.parse(saved),
        }
      : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(user)
    );
  }, [user]);

  useEffect(() => {
    document.body.classList.toggle(
      "dark-mode",
      user.darkMode
    );
  }, [user.darkMode]);

  return (
    <div className="settings-page">
      <SettingsHeader />

  <div className="settings-container">

    <div className="settings-left">

        <ProfileCard
            user={user}
        />

        <ProfilePicture
            user={user}
            setUser={setUser}
        />

    </div>

    <div className="settings-right">

        <AccountSettings
            user={user}
            setUser={setUser}
        />

        <SecuritySettings/>

        <PreferencesSettings
            user={user}
            setUser={setUser}
        />

    </div>

</div>

      <SaveButton
        onSave={() => alert("Settings Saved!")}
      />
    </div>
  );
};

export default Settings;