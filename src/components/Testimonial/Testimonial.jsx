export default function Testimonial() {
  return (
    <div className="w-[70%] mx-auto bg-white py-10 max-md:py-10 max-md:w-[90%]">
      {/* Heading */}
      <div>
        <h2 className="text-5xl text-center mb-20 max-md:mb-10 max-md:text-3xl">
          My <span className="font-bold">Testimonial</span>
        </h2>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
        <div className="shadow shadow-[#71717A] px-20 py-10 rounded-xl hover:bg-black hover:text-white transition duration-500 ease-in-out hover:cursor-pointer">
          {/* Image */}
          <div className="flex justify-center">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="https://i.ibb.co.com/ZBvDYRX/293d53678d7e.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-center mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              qui doloremque magni...
            </p>
            <div className="flex justify-center">
              <hr className="mt-5 border border-1 border-[#71717A] w-[60%]" />
            </div>
          </div>
          <h3 className="text-center font-bold text-xl my-5">Evren Shah</h3>
          <h4 className="text-center font-semibold">Designer</h4>
        </div>
        <div className="shadow shadow-[#71717A] px-20 py-10 rounded-xl hover:bg-black hover:text-white transition duration-500 ease-in-out hover:cursor-pointer">
          {/* Image */}
          <div className="flex justify-center">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="https://i.ibb.co.com/ZBvDYRX/293d53678d7e.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-center mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              qui doloremque magni...
            </p>
            <div className="flex justify-center">
              <hr className="mt-5 border border-1 border-[#71717A] w-[60%]" />
            </div>
          </div>
          <h3 className="text-center font-bold text-xl my-5">Evren Shah</h3>
          <h4 className="text-center font-semibold">Designer</h4>
        </div>
        <div className="shadow shadow-[#71717A] px-20 py-10 rounded-xl hover:bg-black hover:text-white transition duration-500 ease-in-out hover:cursor-pointer">
          {/* Image */}
          <div className="flex justify-center">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="https://i.ibb.co.com/ZBvDYRX/293d53678d7e.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-center mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              qui doloremque magni...
            </p>
            <div className="flex justify-center">
              <hr className="mt-5 border border-1 border-[#71717A] w-[60%]" />
            </div>
          </div>
          <h3 className="text-center font-bold text-xl my-5">Evren Shah</h3>
          <h4 className="text-center font-semibold">Designer</h4>
        </div>
      </div>
      {/* See More Button */}
      <div className="flex justify-center mt-20 max-md:mt-10">
        <button className="bg-[#71717A] px-10 py-3 text-slate-50 rounded-lg hover:bg-black hover:text-white">
          See More
        </button>
      </div>
    </div>
  );
}
