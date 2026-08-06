import type { ProfileData } from "../../constants/profile";

interface Props {
  profile: ProfileData;
}

const CoverBanner = ({ profile }: Props) => {
  return (
    <div className="cover-banner">
      {profile.coverImage ? (
        <img
          src={profile.coverImage}
          alt="Cover"
          className="cover-image"
        />
      ) : (
        <div className="cover-gradient" />
      )}

      <div className="cover-overlay" />
    </div>
  );
};

export default CoverBanner;