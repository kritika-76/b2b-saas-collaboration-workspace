import ProjectsHeader from "../../components/projects/ProjectsHeader";
import ProjectGrid from "../../components/projects/ProjectGrid";

const Projects = () => {
  return (
    <div className="dashboard-page">
      <ProjectsHeader />
      <ProjectGrid />
    </div>
  );
};

export default Projects;