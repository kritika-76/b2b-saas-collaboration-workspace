import type { ProfileData } from "../../constants/profile";

interface Props {
  profile: ProfileData;
}

const AboutCard = ({ profile }: Props) => {
  return (
    <div className="profile-section">

      <h3>About Me</h3>

      <p>{profile.bio}</p>

      <div className="about-grid">

        <div>
          <strong>Experience</strong>

          <p>{profile.experience}</p>
        </div>

        <div>
          <strong>Joined</strong>

          <p>{profile.joinDate}</p>
        </div>

      </div>

    </div>
  );
};

export default AboutCard;