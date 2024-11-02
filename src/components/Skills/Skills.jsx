import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  return (
    <div className="w-[70%] mx-auto pb-20 max-md:w-[95%] max-md:pt-10">
      {/* Heading */}
      <div>
        <h2 className="text-5xl text-center mb-20 max-md:mb-10">
          My <span className="font-bold">Skills</span>
        </h2>
      </div>

      {/* Skill Names & Icon */}
      <div className="grid grid-cols-5 gap-4 max-md:grid-cols-2">
        <div className="p-5 hover:bg-black hover:text-white border border-2 border-black rounded-lg hover:cursor-pointer transition duration-5 00 ease-in-out text-center">
          <div className="flex items-center justify-center">
            <FaReact className="text-5xl text-center" />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center">React</h2>
        </div>
        <div className="p-5 hover:bg-black hover:text-white border border-2 border-black rounded-lg hover:cursor-pointer transition duration-5 00 ease-in-out text-center ">
          <div className="flex items-center justify-center">
            <IoLogoJavascript className="text-5xl text-center" />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center">Javascript</h2>
        </div>
        <div className="p-5 hover:bg-black hover:text-white border border-2 border-black rounded-lg hover:cursor-pointer transition duration-5 00 ease-in-out text-center ">
          <div className="flex items-center justify-center">
            <FaNode className="text-5xl text-center" />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center">Node</h2>
        </div>
        <div className="p-5 hover:bg-black hover:text-white border border-2 border-black rounded-lg hover:cursor-pointer transition duration-5 00 ease-in-out text-center ">
          <div className="flex items-center justify-center">
            <SiMongodb className="text-5xl text-center" />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center">MongoDB</h2>
        </div>
        <div className="p-5 hover:bg-black hover:text-white border border-2 border-black rounded-lg hover:cursor-pointer transition duration-5 00 ease-in-out text-center ">
          <div className="flex items-center justify-center">
            <FaGitAlt className="text-5xl text-center" />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center">Git</h2>
        </div>
        <div className="p-5 hover:bg-black hover:text-white border border-2 border-black rounded-lg hover:cursor-pointer transition duration-5 00 ease-in-out text-center">
          <div className="flex items-center justify-center">
            <FiGithub className="text-5xl text-center" />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center">Github</h2>
        </div>
        <div className="p-5 hover:bg-black hover:text-white border border-2 border-black rounded-lg hover:cursor-pointer transition duration-5 00 ease-in-out text-center">
          <div className="flex items-center justify-center">
            <RiNextjsFill className="text-5xl text-center" />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center">Next.JS</h2>
        </div>
        <div className="p-5 hover:bg-black hover:text-white border border-2 border-black rounded-lg hover:cursor-pointer transition duration-5 00 ease-in-out text-center ">
          <div className="flex items-center justify-center">
            <SiTypescript className="text-5xl text-center" />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center">Typescript</h2>
        </div>
        <div className="p-5 hover:bg-black hover:text-white border border-2 border-black rounded-lg hover:cursor-pointer transition duration-5 00 ease-in-out text-center">
          <div className="flex items-center justify-center">
            <SiRedux className="text-5xl text-center" />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center">Redux</h2>
        </div>
        <div className="p-5 hover:bg-black hover:text-white border border-2 border-black rounded-lg hover:cursor-pointer transition duration-5 00 ease-in-out text-center">
          <div className="flex items-center justify-center">
            <TbBrandReactNative className="text-5xl text-center" />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center">React Native</h2>
        </div>
      </div>
    </div>
  );
}
