const Footer = () => {
  return (
    <div className="bg-gray-600 py-5 px-2">
      <div className="lg:w-[1024px] xl:w-[1280px] mx-auto text-white justify-between grid lg:grid-cols-3 gap-3">
        <div className="col-span-1 ">
          <h1 className="text-2xl">About Me</h1>
          <p className="text-lg mt-1">
            I am passionate to do code. I am knowing and learnig new things
            about developement from my college life.So, I can garuntee you that
            your project will be very creative and wishful.
          </p>
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl">Newsletter</h1>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-gray-100 px-2 py-1 rounded-l placeholder:text-gray-500 text-black outline-none mt-5"
          />
          <input
            type="submit"
            value="Subscribe"
            className=" text-white px-2 py-1 rounded-r outline-none border-none font-semibold bg-red-600 cursor-pointer"
          />
        </div>
        <div className="col-span-1">
          <h1 className="lg:text-center text-2xl">Follow Me</h1>
          <div className="flex justify-around items-center mt-5">
            <a
              href="https://www.linkedin.com/in/mamun-ar-roshid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./src/assets/icon1.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://x.com/mamun_ar_roshid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./src/assets/icon2.svg" alt="Twitter" />
            </a>
            <a
              href="https://www.facebook.com/rmb.mamun.1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./src/assets/icon3.svg" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-center text-white mt-3">
        &copy; 2025 mamunarroshid.netlify.app . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
