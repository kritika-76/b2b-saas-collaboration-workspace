import type { ProfileData } from "../../constants/profile";

interface Props {
  profile: ProfileData;
}

const ProfileCompletion = ({ profile }: Props) => {
  const fields = [
    profile.name,
    profile.email,
    profile.phone,
    profile.location,
    profile.bio,
    profile.avatar,
    profile.coverImage,
    profile.github,
    profile.linkedin,
    profile.portfolio,
    profile.twitter,
    profile.resume,
    profile.skills.length > 0,
  ];

  const completed = fields.filter(Boolean).length;

  const percentage = Math.round(
    (completed / fields.length) * 100
  );

  return (
    <div className="completion-card">

      <div className="completion-header">
        <h3>Profile Completion</h3>

        <span>{percentage}%</span>
      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="completion-items">

        <p>{profile.name ? "✅" : "⭕"} Name</p>

        <p>{profile.email ? "✅" : "⭕"} Email</p>

        <p>{profile.phone ? "✅" : "⭕"} Phone</p>

        <p>{profile.location ? "✅" : "⭕"} Location</p>

        <p>{profile.bio ? "✅" : "⭕"} Bio</p>

        <p>{profile.avatar ? "✅" : "⭕"} Avatar</p>

        <p>{profile.coverImage ? "✅" : "⭕"} Cover Banner</p>

        <p>{profile.github ? "✅" : "⭕"} GitHub</p>

        <p>{profile.linkedin ? "✅" : "⭕"} LinkedIn</p>

        <p>{profile.portfolio ? "✅" : "⭕"} Portfolio</p>

        <p>{profile.twitter ? "✅" : "⭕"} Twitter</p>

        <p>{profile.resume ? "✅" : "⭕"} Resume</p>

        <p>
          {profile.skills.length > 0 ? "✅" : "⭕"} Skills
        </p>

      </div>

    </div>
  );
};

export default ProfileCompletion;