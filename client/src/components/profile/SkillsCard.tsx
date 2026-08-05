import type { ProfileData } from "../../constants/profile";

interface Props {
  profile: ProfileData;
  onAddSkill: () => void;
  onDeleteSkill: (skill: string) => void;
  onEditSkill: (skill: string) => void;
}
const SkillsCard = ({ profile, onAddSkill, onDeleteSkill }: Props) => {
  return (
    <div className="profile-section">

      <h3>Skills</h3>

<div className="skills-grid">
  {profile.skills.map((skill) => (
    <div
      key={skill}
      className="skill-item"
    >
      <span className="skill-chip">
        {skill}
      </span>

      <button
        className="delete-skill-btn"
        onClick={() => onDeleteSkill(skill)}
      >
        ✕
      </button>
    </div>
  ))}
</div>

<button
  className="add-skill-btn"
  onClick={onAddSkill}
>
  + Add Skill
</button>

    </div>
  );
};

export default SkillsCard;