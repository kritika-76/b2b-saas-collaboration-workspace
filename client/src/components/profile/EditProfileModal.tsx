import { useEffect, useState } from "react";
import type { ProfileData } from "../../constants/profile";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (profile: ProfileData) => void;
}

const EditProfileModal = ({
  isOpen,
  onClose,
  profile,
  onSave,
}: Props) => {
  const [form, setForm] = useState(profile);

  useEffect(() => {
    setForm(profile);
  }, [profile]);

  if (!isOpen) return null;

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="modal-overlay">

      <form
        className="profile-modal"
        onSubmit={handleSubmit}
      >

        <h2>Edit Profile</h2>

        <input
          value={form.name}
          placeholder="Name"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setForm({
        ...form,
        avatar: reader.result as string,
      });
    };

    reader.readAsDataURL(file);
  }}
/>

<button
  type="button"
  className="remove-photo-btn"
  onClick={() =>
    setForm({
      ...form,
      avatar: "",
    })
  }
>
  Remove Photo
</button>

        <input
          value={form.email}
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          value={form.phone}
          placeholder="Phone"
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <input
          value={form.location}
          placeholder="Location"
          onChange={(e) =>
            setForm({
              ...form,
              location: e.target.value,
            })
          }
        />

        <textarea
          rows={4}
          value={form.bio}
          placeholder="Bio"
          onChange={(e) =>
            setForm({
              ...form,
              bio: e.target.value,
            })
          }
        />

        <div className="modal-buttons">

          <button
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button type="submit">
            Save
          </button>

        </div>

      </form>

    </div>
  );
};

export default EditProfileModal;