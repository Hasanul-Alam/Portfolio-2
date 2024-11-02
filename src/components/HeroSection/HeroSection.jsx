import { FaFacebook } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default function HeroSection() {
  return (
    <div className="w-[70%] mx-auto bg-white py-32 max-md:py-10 max-md:w-[95%]">
      <div className="grid grid-cols-2 justify-center items-center max-md:grid-cols-1 gap-10">
        {/* Hero section avatar */}
        <div className="order-2 max-md:order-1 ml-24 max-md:m-0">
          <img
            className="w-[80%] max-md:w-full"
            src="https://i.ibb.co.com/Qps8f80/column.jpg"
            alt=""
          />
        </div>
        {/* Hero section text */}
        <div className="order-1 max-md:order-2">
          {/* Hero section heading */}
          <div className="text-5xl max-md:text-xl">
            <h2 className="">
              Hello I am <span className="font-bold">Hasanul Alam</span>
            </h2>
            <h2 className="my-5 max-md:my-2">
              <span className="font-bold">Frontend</span> Developer
            </h2>
            <h2>
              Based in <span className="font-bold">Bangladesh</span>
            </h2>
          </div>
          {/* <h1 className="text-5xl">Hello I am Hasanul Alam <br /> Frontend Developer <br />Based in Bangladesh</h1> */}
          {/* Something about me */}
          <p className="text-[#71717A] mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            adipisci porro placeat nesciunt quibusdam? Magni repudiandae beatae
            voluptatum impedit enim error eius et sit. Tempora ab quidem
            numquam? Doloremque nulla corporis est harum nostrum, nesciunt vitae
            incidunt sit commodi esse similique assumenda consectetur aut!
          </p>
        </div>
        
      </div>
      {/* Social media icons & links */}
      <div className="flex gap-4 max-md:mt-10 justify-normal">
        <a href="">
          <div className="border border-2 border-black rounded-lg p-4 hover:bg-black hover:text-white hover:cursor-pointer">
            <FaFacebook className="text-3xl" />
          </div>
        </a>
        <a href="">
          <div className="border border-2 border-black rounded-lg p-4 hover:bg-black hover:text-white hover:cursor-pointer">
            <IoLogoDiscord className="text-3xl" />
          </div>
        </a>
        <a href="">
          <div className="border border-2 border-black rounded-lg p-4 hover:bg-black hover:text-white hover:cursor-pointer">
            <FaSquareTwitter className="text-3xl" />
          </div>
        </a>
        <a href="">
          <div className="border border-2 border-black rounded-lg p-4 hover:bg-black hover:text-white hover:cursor-pointer">
            <FaGithub className="text-3xl" />
          </div>
        </a>
      </div>
    </div>
  );
}
