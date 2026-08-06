import type { ProfileData } from "../../constants/profile";
import { FiEdit2, FiPlus, FiCheck } from "react-icons/fi";

interface Props {
  profile: ProfileData;

  isEditing: boolean;

  onToggleEdit: () => void;

  onAddSkill: () => void;

  onDeleteSkill: (skill: string) => void;

  onEditSkill: (skill: string) => void;
}

const SkillsCard = ({
  profile,
  isEditing,
  onToggleEdit,
  onAddSkill,
  onDeleteSkill,
  onEditSkill,
}: Props) => {
  return (
    <div className="profile-section">

      <div className="skills-header">

        <h3>Skills</h3>

        <button
          className="edit-skills-btn"
          onClick={onToggleEdit}
        >
          {isEditing ? (
            <>
              <FiCheck />
              Done
            </>
          ) : (
            <>
              <FiEdit2 />
              Edit Skills
            </>
          )}
        </button>

      </div>

      {profile.skills.length === 0 ? (
        <p className="no-skills">
          No skills added yet.
        </p>
      ) : (

        <div className="skills-wrapper">
  {profile.skills.map((skill) => (
    <div className="skill-chip" key={skill}>
      <span>{skill}</span>

      {isEditing && (
        <div className="skill-chip-actions">

          <button
            className="chip-edit-btn"
            onClick={() => onEditSkill(skill)}
          >
            <FiEdit2 />
          </button>

          <button
            className="chip-delete-btn"
            onClick={() => onDeleteSkill(skill)}
          >
            ×
          </button>

        </div>
      )}
    </div>
  ))}
</div>

      )}

      <button
        className="add-skill-btn"
        onClick={onAddSkill}
      >
        <FiPlus />
        Add Skill
      </button>

    </div>
  );
};

export default SkillsCard;