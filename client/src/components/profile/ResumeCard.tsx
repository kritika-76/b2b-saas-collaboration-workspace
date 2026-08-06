import {
  FiUpload,
  FiDownload,
  FiTrash2,
  FiRefreshCw,
  FiFileText,
} from "react-icons/fi";

import type { ProfileData } from "../../constants/profile";

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

      <div className="resume-header">
        <h3>Resume</h3>
      </div>

      {!profile.resume ? (

        <label className="resume-upload">

          <FiUpload size={22}/>

          <span>Upload Resume</span>

          <small>
            PDF, DOC, DOCX (Max 5MB)
          </small>

          <input
            hidden
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={onUploadResume}
          />

        </label>

      ) : (

        <>

          <div className="resume-preview">

            <FiFileText
              size={42}
            />

            <div>

              <h4>
                Resume Uploaded
              </h4>

              <p>
                Ready to download
              </p>

            </div>

          </div>

          <div className="resume-actions">

            <a
              href={profile.resume}
              download="Resume"
              className="resume-btn download"
            >
              <FiDownload />

              Download
            </a>

            <label
              className="resume-btn replace"
            >

              <FiRefreshCw />

              Replace

              <input
                hidden
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={onUploadResume}
              />

            </label>

            <button
              className="resume-btn delete"
              onClick={onRemoveResume}
            >

              <FiTrash2 />

              Remove

            </button>

          </div>

        </>

      )}

    </div>
  );
};

export default ResumeCard;