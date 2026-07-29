import type { UserSettings } from "../../constants/settings";

interface Props {
  user: UserSettings;
  setUser: React.Dispatch<
    React.SetStateAction<UserSettings>
  >;
}

const ProfilePicture = ({
  user,
  setUser,
}: Props) => {

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

      setUser({
        ...user,
        avatar: reader.result as string,
      });

    };

    reader.readAsDataURL(file);
  };

  return (

    <div className="picture-card">

      <h2>Profile Picture</h2>

      <div className="picture-preview">

        {user.avatar ? (

          <img
            src={user.avatar}
            alt="avatar"
          />

        ) : (

          <div className="preview-placeholder">
            No Image
          </div>

        )}

      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      {user.avatar && (

        <button
          className="remove-photo-btn"
          onClick={() =>
            setUser({
              ...user,
              avatar: "",
            })
          }
        >
          Remove Picture
        </button>

      )}

    </div>

  );
};

export default ProfilePicture;