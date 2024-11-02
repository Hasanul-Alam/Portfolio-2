export default function AboutMe() {
  return (
    <div className="w-[70%] mx-auto bg-white py-10 max-md:py-10 max-md:w-[95%]">
      <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
        <div>
          <img src="https://i.ibb.co.com/Nxwq58k/Group-1000015845.png" alt="" />
        </div>
        <div>
          <h2 className="text-5xl text-center max-md:mt-10 max-md:text-left max-md:text-3xl">
            About <span className="font-bold">Me</span>
          </h2>
          <p className="text-[#71717A] mt-10 max-md:text-lg">
            I am a skilled MERN stack developer with a solid foundation in
            full-stack web development. My journey in web development has
            allowed me to build and deploy a variety of projects, each one
            enhancing my understanding of the intricacies of modern web
            applications.
          </p>
          <p className="text-[#71717A] mt-10 max-md:text-lg">
            I specialize in creating responsive, single-page applications (SPAs)
            using the MERN stack—MongoDB, Express.js, React, and Node.js. My
            work is characterized by a focus on clean code, efficient data
            management, and user-friendly interfaces.
          </p>
          <p className="text-[#71717A] mt-10 max-md:text-lg">
            I am passionate about continuously improving my technical skills and
            staying updated with the latest developments in the field. Although
            I am in the early stages of my professional career, I have
            successfully completed some projects that demonstrate my ability to
            turn ideas into fully functional web applications.My goal is to
            contribute to innovative projects that push the boundaries of web
            development while delivering exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
