import useProjects from "../../hooks/useProjects";
import Project from "./Project/Project";

const Projects = () => {
  const projects = useProjects();
  return (
    <div className="dark:bg-[#041a38] transition-colors duration-700 py-12">
      <div className="lg:w-[1024px] mx-auto xl:w-[1280px]">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2">
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
