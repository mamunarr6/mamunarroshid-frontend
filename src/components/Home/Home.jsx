// import bannerImg from "../../assets/bannerImg";

const Home = () => {
  return (
    <div className="bg-blue-50 px-2">
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
    </div>
  );
};

export default Home;
