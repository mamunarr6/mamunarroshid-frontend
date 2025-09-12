const Project = ({ project }) => {
  const { name, img, tools, description, live_link, github_link } = project;
  return (
    <div className="hover:shadow-2xl rounded-2xl duration-300 flex flex-col">
      <div className="border-2 rounded-2xl p-2 border-[#abd0c4] grow">
        <div className="overflow-hidden">
          <img
            className="w-full h-60 object-contain transition-transform duration-300 hover:scale-110"
            src={img}
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-lg lg:text-xl font-semibold my-4 font-inter">
              {name}
            </h1>
            <p className="flex items-center gap-1 lg:gap-3">
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border-2 border-gray-600 hover:bg-gray-600 hover:text-white px-1 lg:px-2 py-1 rounded-xl font-semibold cursor-pointer duration-300 font-inter"
              >
                Live Site
              </a>
              <a
                href={github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border-2 border-gray-600 hover:bg-gray-600 hover:text-white px-2 py-1 rounded-xl font-semibold cursor-pointer duration-300 font-iner"
              >
                GitHub
              </a>
            </p>
          </div>
          <p className="flex items-center flex-wrap gap-3">
            {tools.map((tool, index) => (
              <li
                key={index}
                className="list-none bg-green-100 px-2 py-1 rounded-2xl text-green-800 font-inter"
              >
                {tool}
              </li>
            ))}
          </p>
          <p className="text-base my-3 text-body font-inter">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
