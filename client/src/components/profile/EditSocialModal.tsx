import { useEffect, useState } from "react";
import type { ProfileData } from "../../constants/profile";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (profile: ProfileData) => void;
}

const EditSocialModal = ({
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

<h2>Edit Social Links</h2>

<input
type="url"
placeholder="GitHub URL"
value={form.github}
onChange={(e)=>
setForm({
...form,
github:e.target.value
})
}
/>

<input
type="url"
placeholder="LinkedIn URL"
value={form.linkedin}
onChange={(e)=>
setForm({
...form,
linkedin:e.target.value
})
}
/>

<input
type="url"
placeholder="Portfolio URL"
value={form.portfolio}
onChange={(e)=>
setForm({
...form,
portfolio:e.target.value
})
}
/>

<input
type="url"
placeholder="Twitter URL"
value={form.twitter}
onChange={(e)=>
setForm({
...form,
twitter:e.target.value
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

export default EditSocialModal;