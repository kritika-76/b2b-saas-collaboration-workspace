import { useState } from "react";

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const getStrength = () => {
    if (newPassword.length === 0) return "";

    if (newPassword.length < 6) return "Weak";

    if (newPassword.length < 10) return "Medium";

    return "Strong";
  };

  return (
    <div className="security-card">

      <h2>Security Settings</h2>

      <div className="password-group">
        <label>Current Password</label>

        <div className="password-input">
          <input
            type={showCurrent ? "text" : "password"}
            value={currentPassword}
            onChange={(e) =>
              setCurrentPassword(e.target.value)
            }
            placeholder="Enter current password"
          />

          <button
            type="button"
            onClick={() =>
              setShowCurrent(!showCurrent)
            }
          >
            {showCurrent ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="password-group">
        <label>New Password</label>

        <div className="password-input">
          <input
            type={showNew ? "text" : "password"}
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
            placeholder="Enter new password"
          />

          <button
            type="button"
            onClick={() =>
              setShowNew(!showNew)
            }
          >
            {showNew ? "Hide" : "Show"}
          </button>
        </div>

        {getStrength() && (
          <p className={`strength ${getStrength().toLowerCase()}`}>
            Password Strength: {getStrength()}
          </p>
        )}
      </div>

      <div className="password-group">
        <label>Confirm Password</label>

        <div className="password-input">
          <input
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            placeholder="Confirm new password"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirm(!showConfirm)
            }
          >
            {showConfirm ? "Hide" : "Show"}
          </button>
        </div>

        {confirmPassword && (
          <p
            className={
              confirmPassword === newPassword
                ? "match"
                : "not-match"
            }
          >
            {confirmPassword === newPassword
              ? "Passwords match"
              : "Passwords do not match"}
          </p>
        )}
      </div>

    </div>
  );
};

export default SecuritySettings;