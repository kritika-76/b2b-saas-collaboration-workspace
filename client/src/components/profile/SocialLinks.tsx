import {
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiTwitter,
} from "react-icons/fi";

import type { ProfileData } from "../../constants/profile";

interface Props {
  profile: ProfileData;
}

const SocialLinks = ({ profile }: Props) => {
  return (
    <div className="social-links">

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="social-btn github"
      >
        <FiGithub />
        GitHub
      </a>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="social-btn linkedin"
      >
        <FiLinkedin />
        LinkedIn
      </a>

      <a
        href={profile.portfolio}
        target="_blank"
        rel="noreferrer"
        className="social-btn portfolio"
      >
        <FiGlobe />
        Portfolio
      </a>

      <a
        href={profile.twitter}
        target="_blank"
        rel="noreferrer"
        className="social-btn twitter"
      >
        <FiTwitter />
        Twitter
      </a>

    </div>
  );
};

export default SocialLinks;