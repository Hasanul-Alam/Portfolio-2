import { FaFacebook } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  const outlinedTextStyle = {
    color: "white",
    textShadow: `
          -2px -2px 0 black,
           2px -2px 0 black,
          -2px  2px 0 black,
           2px  2px 0 black
        `,
  };
  return (
    <div>
      <div className="w-[70%] mx-auto bg-white py-32 max-md:py-10 max-md:w-[95%]">
        <div className="grid grid-cols-2 justify-center items-center max-md:grid-cols-1 gap-20">
          {/* Contact Form */}
          <div>
            {/* Form */}
            <div>
              <input
                className="px-5 py-3 border border-2 border-black rounded w-full"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="px-5 py-3 border border-2 border-black rounded w-full my-5"
                type="email"
                placeholder="Email"
              />
              <input
                className="px-5 py-3 border border-2 border-black rounded w-full"
                type="text"
                placeholder="Your Website (If Exist)"
              />
              <textarea
                className="px-5 py-3 border border-2 border-black rounded w-full mt-5"
                name=""
                id=""
                placeholder="How Can I Help You?"
                rows={6}
              ></textarea>
            </div>
            {/* Button & Other Stuff */}
            <div className="flex gap-2 items-center max-md:flex-col max-md:gap-0 max-md:items-start">
              {/* Button */}
              <div className="max-md:mt-5">
                <button className="bg-black text-white px-10 py-4 text-lg rounded">
                  Get In Touch
                </button>
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
          </div>

          {/* Footer texts */}
          <div>
            <div>
              <h2 className="text-5xl text-black font-bold font-sora max-md:text-3xl">
                {"Let's "} <span style={outlinedTextStyle}>talk</span>{" "}
                <span> for</span>
              </h2>
              <h2 className="text-5xl text-black font-bold font-sora mt-3 max-md:text-3xl">
                {"Something special"}
              </h2>
              <p className="text-[#71717A] my-8 max-md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                similique quaerat nulla odio distinctio amet.
              </p>
              <h2 className="text-2xl text-black font-semibold my-2 max-md:text-lg">
                hasanul.alam.professional@gmail.com
              </h2>
              <h2 className="text-2xl text-black font-semibold max-md:text-lg">
                +8801797888924
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="bg-black py-5">
        <div className="w-[70%] mx-auto flex justify-between items-center max-md:w-[95%]">
            {/* image */}
            <div>
                <img className="max-md:w-[120px]" src="https://i.ibb.co.com/CM4FBn0/Logo-1.png" alt="" />
            </div>
            {/* Text */}
            <div>
                <p className="text-white max-md:text-sm">@ 2023-2024 Hasanul</p>
                <p className="text-white text-end max-md:text-sm">Made In Figma</p>
            </div>
        </div>
      </div>
    </div>
  );
}
