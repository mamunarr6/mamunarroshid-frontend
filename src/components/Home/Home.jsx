import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useProjects from "../../hooks/useProjects";
import Project from "../Projects/Project/Project";

// Import Swiper styles
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const projects = useProjects();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* banner section */}
      <section className="bg-blue-50 px-2 py-10 dark:bg-[#041a38] transition-colors duration-700">
        <div className="lg:w-[1024px] mx-auto xl:w-[1280px] flex flex-col-reverse lg:grid lg:grid-cols-2 justify-between items-center">
          <div className="col-span-1">
            <h1 className="text-2xl lg:text-6xl mt-1 font-lora dark:text-white transition-colors duration-700">
              Hi,there.
            </h1>
            <h2 className="text-3xl lg:text-4xl my-3 font-inter dark:text-white transition-colors duration-700">
              I am a frontend developer.
            </h2>
            <p className="text-lg text-[#585858] font-inter dark:text-white transition-colors duration-700">
              I am passionate about coding and have been learning development
              since my college years, ensuring creativity and dedication in
              every project.
            </p>
            <p className="mt-7">
              <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1C9Ieyrg12bkuEu6y5b49TmarY0w1ct9a&export=download"
                target="blank"
                className="text-xl font-semibold cursor-pointer px-4 py-2 bg-[#21a366] text-white rounded-3xl font-inter hover:bg-transparent border-2 border-[#21a366] hover:text-[#21a366] duration-300"
              >
                Download Resume
              </a>
            </p>
          </div>
          <div className="col-span-1 flex justify-end">
            <img
              className="w-3/4"
              src="https://i.ibb.co.com/8GwgPZX/banner.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* My Skills Section */}
      <section className="bg-white dark:bg-[#041a38] transition-colors duration-700 py-12">
        <div className="lg:w-[1024px] mx-auto xl:w-[1280px]">
          <h1 className="text-3xl xl:text-4xl font-bold text-black text-center mb-7 font-lora dark:text-white transition-colors duration-700">
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
            className="mySwiper dark:text-white transition-colors duration-700"
          >
            <SwiperSlide>
              <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
                <img src="https://i.ibb.co.com/WNBHD51h/html.png" alt="" />
                <p>HTML5</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
                <img src="https://i.ibb.co.com/N6sLwvhj/css.png" alt="" />
                <p>CSS3</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
                <img src="https://i.ibb.co.com/CTNmMx7/bootstrap.png" alt="" />
                <p>Bootstrap</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
                <img src="https://i.ibb.co.com/FbRwx9Sn/tailwind.png" alt="" />
                <p>Tailwind Css</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
                <img
                  src="https://i.ibb.co.com/zWTHjvjq/javascript.png"
                  alt=""
                />
                <p>Javascript</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
                <img src="https://i.ibb.co.com/ccSm4Rtg/react.png" alt="" />
                <p>React Js</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
                <img
                  className="w-[144px] h-[144px]"
                  src="https://i.ibb.co.com/gb953D0f/nodejs.png"
                  alt=""
                />
                <p>Node Js</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
                <img src="https://i.ibb.co.com/bj2Bv4Wk/express.png" alt="" />
                <p>Express Js</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-green-200 rounded-2xl px-3 py-2 flex flex-col items-center">
                <img src="https://i.ibb.co.com/217hYCsY/mongodb.png" alt="" />
                <p>Mongo DB</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Project Section */}
      <section
        id="projects"
        className="bg-white dark:bg-[#041a38] transition-colors duration-700 px-2 py-5"
      >
        <div className="lg:w-[1024px] mx-auto xl:w-[1280px] my-12 ">
          <h1 className="text-3xl xl:text-4xl font-bold text-center mt-5 mb-7 font-lora dark:text-white transition-colors duration-700">
            My Projects
          </h1>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2">
            {projects.map((project) => (
              <Project key={project.id} project={project}></Project>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="bg-white dark:bg-[#041a38] transition-colors duration-700 py-12 dark:text-white"
      >
        <div className="lg:w-[1024px] mx-auto xl:w-[1280px]">
          <h1 className="text-3xl xl:text-4xl font-semibold text-center font-lora">
            About Me
          </h1>
          <div className="grid  lg:grid-cols-3 justify-between items-center lg:gap-8 px-2">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold font-lora">
                A Passionate Learning Developer.
              </h3>
              <p className="my-5 text-lg whitespace-pre-wrap font-inter text-body dark:text-[#d4d4d4]">
                Hi,I am Mamun Ar Roshid, a passionate React-based front-end
                developer. Although I don&apos;t come from a CSE background, my
                eagerness to learn new technologies led me to this field and now
                I truly love it.
              </p>
              <p className="my-5 text-lg whitespace-pre-wrap font-inter text-body dark:text-[#d4d4d4]">
                I bring solid expertise in front-end technologies including
                HTML, CSS, Tailwind CSS, JavaScript, and React.js. I also have
                backend experience with Node.js, Express.js, and MongoDB. I am
                continuously learning and expanding my knowledge of modern web
                technologies. Additionally, I am familiar with tools and
                services such as Firebase, JWT, Git, and GitHub.
              </p>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center lg:items-end">
              <img
                className="lg:w-3/4 w-full rounded-2xl"
                src="https://i.ibb.co.com/zWJj5GCY/aboutme.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact With Me Section */}
      <section className="bg-white dark:bg-[#041a38] transition-colors duration-700 py-12 dark:text-white">
        <div id="contact" className="lg:w-[1024px] mx-auto xl:w-[1280px] my-12">
          <h1 className="text-3xl xl:text-4xl font-semibold font-lora text-center mb-5">
            Get In Touch
          </h1>
          {/* form left */}
          <div className=" flex flex-col lg:flex-row justify-between items-center ">
            <div className="flex flex-col items-center">
              <p className="text-lg text-body font-inter text-center w-4/5 lg:w-3/4 dark:text-[#d4d4d4] transition-colors duration-700">
                Feel free to get in touch for professional collaborations,
                project inquiries, or a friendly conversation.
              </p>
              <p className="flex justify-center items-center gap-2 mt-2 mb-3 text-body dark:text-[#d4d4d4] transition-colors duration-700">
                <MdEmail className="text-[#21a366] text-2xl " />
                mamunarr6@gmail.com
              </p>
              <img className="w-3/6 flex" src="./src/assets/e2.png" alt="" />
            </div>
            {/* form right */}
            <div className=" items-center w-4/5 lg:w-3/6 ">
              <form
                action="submit"
                onSubmit={handleSubmit}
                className="flex flex-col  items-center gap-3 font-inter w-full my-5"
              >
                <div className="flex flex-col gap-2 mb-3 w-full">
                  <label
                    htmlFor="name"
                    className="pl-2 text-base font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Your full name"
                    className="outline-none px-3 py-2 text-base bg-green-100 rounded-3xl w-full"
                    required
                  />
                </div>
                <div className="flex flex-col  gap-2 mb-3 w-full">
                  <label
                    htmlFor="email"
                    className="pl-2 text-base font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Your valid email"
                    className="outline-none px-3 py-2 text-base bg-green-100 rounded-3xl w-full"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3 w-full">
                  <label
                    htmlFor="message"
                    className="pl-2 text-base font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Message"
                    className="outline-none px-3 py-2 text-base bg-green-100 rounded-3xl w-full"
                    required
                  />
                </div>
                <button
                  className="w-full bg-[#21a366] text-white py-1 rounded-2xl border-2 border-[#21a366] text-lg font-semibold hover:bg-transparent hover:text-[#21a366] duration-300"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
