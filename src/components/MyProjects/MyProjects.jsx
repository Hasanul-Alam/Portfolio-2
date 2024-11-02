export default function MyProjects() {
  return (
    <div className="bg-black py-10">
      <div className="w-[70%] mx-auto py-10 max-md:py-10 max-md:w-[95%]">
        {/* Heading */}
        <div>
          <h2 className="text-5xl text-white text-center mb-20 max-md:mb-10">
            My <span className="font-bold">Projects</span>
          </h2>
        </div>

        {/* Main body */}
        <div className="grid grid-cols-2 gap-4 items-center max-md:grid-cols-1">
            <div>
                <img src="https://i.ibb.co.com/51DvHDr/image-771.png" alt="" />
            </div>
            <div>
                <h2 className="text-5xl text-white font-bold">01</h2>
                <h2 className="text-3xl text-white font-bold my-8">Crypo Screener Application</h2>
                <p className="text-[#71717A]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perspiciatis aspernatur consequatur fuga, at delectus? Explicabo aliquid non ipsa maxime officia sequi aliquam dolore porro obcaecati ipsam voluptatibus et vitae voluptate illo repellendus temporibus blanditiis cumque totam, qui odit! Cupiditate officiis ad dolor labore quae illo porro animi maiores tempora!</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center my-10 max-md:grid-cols-1">
            <div className="order-2 max-md:order-1">
                <img className="" src="https://i.ibb.co.com/0yWNqSm/image-770.png" alt="" />
            </div>
            <div className="order-1 max-md:order-2">
                <h2 className="text-5xl text-white font-bold">02</h2>
                <h2 className="text-3xl text-white font-bold my-8">Crypo Screener Application</h2>
                <p className="text-[#71717A]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perspiciatis aspernatur consequatur fuga, at delectus? Explicabo aliquid non ipsa maxime officia sequi aliquam dolore porro obcaecati ipsam voluptatibus et vitae voluptate illo repellendus temporibus blanditiis cumque totam, qui odit! Cupiditate officiis ad dolor labore quae illo porro animi maiores tempora!</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center max-md:grid-cols-1">
            <div>
                <img src="https://i.ibb.co.com/9YXgfyM/image-770-1.png" alt="" />
            </div>
            <div>
                <h2 className="text-5xl text-white font-bold">03</h2>
                <h2 className="text-3xl text-white font-bold my-8">Crypo Screener Application</h2>
                <p className="text-[#71717A]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perspiciatis aspernatur consequatur fuga, at delectus? Explicabo aliquid non ipsa maxime officia sequi aliquam dolore porro obcaecati ipsam voluptatibus et vitae voluptate illo repellendus temporibus blanditiis cumque totam, qui odit! Cupiditate officiis ad dolor labore quae illo porro animi maiores tempora!</p>
            </div>
        </div>
      </div>
    </div>
  );
}
