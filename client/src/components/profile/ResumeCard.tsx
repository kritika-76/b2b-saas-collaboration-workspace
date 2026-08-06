import type { ProfileData } from "../../constants/profile";


import {
  FiUpload,
  FiDownload,
  FiTrash2,
} from "react-icons/fi";

interface Props {
  profile: ProfileData;
  onUploadResume: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onRemoveResume: () => void;
}

const ResumeCard = ({
  profile,
  onUploadResume,
  onRemoveResume,
}: Props) => {
  return (
    <div className="resume-card">

      <h3>Resume</h3>

      {profile.resume ? (
        <>
          <p className="resume-name">
            📄 Resume Uploaded
          </p>

          <div className="resume-actions">

            <a
              href={profile.resume}
              download="Resume.pdf"
              className="resume-btn download"
            >
              <FiDownload />
              Download
            </a>

            <button
              className="resume-btn delete"
              onClick={onRemoveResume}
            >
              <FiTrash2 />
              Remove
            </button>

          </div>
        </>
      ) : (
        <>
          <label className="resume-upload">

            <FiUpload />

            Upload Resume

            <input
              type="file"
              accept=".pdf"
              hidden
              onChange={onUploadResume}
            />

          </label>
        </>
      )}

    </div>
  );
};

export default ResumeCard;