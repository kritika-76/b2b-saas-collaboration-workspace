import ProgressBar from "./ProgressBar";

type ProjectCardProps = {
  title: string;
  description: string;
  technology: string;
  progress: number;
  members: number;
  status: string;
};

const ProjectCard = ({
  title,
  description,
  technology,
  progress,
  members,
  status,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{title}</h3>
        <span className="status-badge">{status}</span>
      </div>

      <p className="project-description">
        {description}
      </p>

      <h5>{technology}</h5>

      <ProgressBar progress={progress} />

      <div className="project-footer">
        <span>{progress}% Complete</span>

        <span>👥 {members} Members</span>
      </div>
    </div>
  );
};

export default ProjectCard;