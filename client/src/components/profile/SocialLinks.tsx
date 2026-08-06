import {
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiTwitter,
  FiEdit2,
} from "react-icons/fi";

import type { ProfileData } from "../../constants/profile";

interface Props {
  profile: ProfileData;
  onEdit: () => void;
}

const SocialLinks = ({
  profile,
  onEdit,
}: Props) => {

  return (

<div className="social-card">

<div className="social-header">

<h3>Social Links</h3>

<button
className="social-edit-btn"
onClick={onEdit}
>

<FiEdit2/>

Edit

</button>

</div>

<a
href={profile.github}
target="_blank"
>

<FiGithub/>

GitHub

</a>

<a
href={profile.linkedin}
target="_blank"
>

<FiLinkedin/>

LinkedIn

</a>

<a
href={profile.portfolio}
target="_blank"
>

<FiGlobe/>

Portfolio

</a>

<a
href={profile.twitter}
target="_blank"
>

<FiTwitter/>

Twitter

</a>

</div>

  );

};

export default SocialLinks;