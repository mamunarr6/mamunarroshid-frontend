import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useProjects from "../../hooks/useProjects";
import Project from "../Projects/Project/Project";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const projects = useProjects();

  return (
    <>
      {/* banner section */}
      <section className="bg-blue-50 px-2">
        <div className="lg:w-[1024px] mx-auto xl:w-[1280px] flex flex-col-reverse lg:grid lg:grid-cols-2 justify-between items-center">
          <div className="col-span-1">
            <h1 className="text-2xl lg:text-6xl mt-1 font-lora">Hi,there.</h1>
            <h2 className="text-3xl lg:text-4xl mt-2 font-inter">
              I am a frontend developer.
            </h2>
            <h3 className="text-xl lg:text-2xl mt-3 mb-5 font-inter">
              Make your product, Grab your future.
            </h3>
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1C9Ieyrg12bkuEu6y5b49TmarY0w1ct9a&export=download"
              target="blank"
              className="text-xl font-semibold cursor-pointer px-4 py-2 bg-[#21a366] text-white rounded-3xl font-inter hover:bg-transparent border-2 border-[#21a366] hover:text-[#21a366] duration-300"
            >
              Download Resume
            </a>
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

      {/* My Skills Section */}
      <section className="lg:w-[1024px] mx-auto xl:w-[1280px] my-12">
        <h1 className="text-3xl xl:text-4xl font-bold text-black text-center mt-3 mb-7 font-lora">
          My Skills
        </h1>
        {/* Swiper slides */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
              <img src="./src/assets/skills/html.svg" alt="" />
              <p>HTML5</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
              <img src="./src/assets/skills/css.svg" alt="" />
              <p>CSS3</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
              <img src="./src/assets/skills/bootstrap.svg" alt="" />
              <p>Bootstrap</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
              <img src="./src/assets/skills/tailwind.svg" alt="" />
              <p>Tailwind Css</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
              <img src="./src/assets/skills/javascript.svg" alt="" />
              <p>Javascript</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
              <img src="./src/assets/skills/react.svg" alt="" />
              <p>React Js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
              <img
                className="w-[144px] h-[144px]"
                src="./src/assets/skills/nodejs.svg"
                alt=""
              />
              <p>Node Js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
              <img src="./src/assets/skills/express.svg" alt="" />
              <p>Express Js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
              <img src="./src/assets/skills/mongodb.png" alt="" />
              <p>Mongo DB</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Project Section */}
      <section className="lg:w-[1024px] mx-auto xl:w-[1280px] my-12 ">
        <h1 className="text-3xl xl:text-4xl font-bold text-center mt-5 mb-7 font-lora">
          My Projects
        </h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2">
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="lg:w-[1024px] mx-auto xl:w-[1280px] my-12 ">
        <h1 className="text-3xl xl:text-4xl font-semibold text-center font-lora">
          About Me
        </h1>
        <div className="grid grid-cols-3 justify-between items-center gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-semibold font-lora">
              A Passionate Learning Developer.
            </h3>
            <p className="my-5 text-lg whitespace-pre-wrap font-inter text-body">
              Hi, I am Mamun Ar Roshid, a React-based front-end developer.
              Although I don&apos;t come from a CSE background, my eagerness to
              learn new technologies led me to this field and now I truly love
              it.
            </p>
            <p className="my-5 text-lg whitespace-pre-wrap font-inter text-body">
              I bring solid expertise in front-end technologies including HTML,
              CSS, Tailwind CSS, JavaScript, and React.js. I also have backend
              experience with Node.js, Express.js, and MongoDB. I am
              continuously learning and expanding my knowledge of modern web
              technologies. Additionally, I am familiar with tools and services
              such as Firebase, JWT, Git, and GitHub.
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-end">
            <img
              className="w-3/4 rounded-2xl"
              src="./src/assets/aboutme.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Contact With Me Section */}
      <section className="lg:w-[1024px] mx-auto xl:w-[1280px] my-12 ">
        <h1 className="text-3xl xl:text-4xl font-semibold font-lora text-center">
          Contact With Me
        </h1>
      </section>
    </>
  );
};

export default Home;
