import useProjects from "../../hooks/useProjects";
import Project from "./Project/Project";

const Projects = () => {
  const projects = useProjects();
  console.log(projects);
  return (
    <div className="lg:w-[1024px] mx-auto xl:w-[1280px] my-5">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2">
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
