import useProjects from "../../hooks/useProjects";
import Project from "../Projects/Project/Project";

const Home = () => {
  const projects = useProjects();

  // console.log(projects);
  return (
    <>
      {/* banner section */}
      <section className="bg-blue-50 px-2">
        <div className="lg:w-[1024px] mx-auto xl:w-[1280px] flex flex-col-reverse lg:grid lg:grid-cols-2 justify-between items-center">
          <div className="col-span-1">
            <h1 className="text-2xl lg:text-6xl mt-1">Hi,there.</h1>
            <h2 className="text-3xl lg:text-4xl mt-2">
              I am a frontend developer.
            </h2>
            <h3 className="text-xl lg:text-2xl mt-3">
              Make your product, Grab your future.
            </h3>
          </div>
          <div className="col-span-1">
            <img
              className="w-full"
              src="https://i.ibb.co/238FVWk5/banner-Img.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="lg:w-[1024px] mx-auto xl:w-[1280px] my-5">
        <h1 className="text-3xl font-bold text-center my-5">My Projects</h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2">
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
