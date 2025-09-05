const Project = ({ project }) => {
  console.log(project);
  return (
    <div className="">
      <div className="border-2 rounded-2xl p-2 border-[#abd0c4]">
        <div>
          <img src={project?.img} alt="" />
        </div>
        <div>
          <h1>{project.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
