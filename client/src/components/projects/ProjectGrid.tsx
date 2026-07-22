import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/projects";

const ProjectGrid = () => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          technology={project.technology}
          progress={project.progress}
          members={project.members}
          status={project.status}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;