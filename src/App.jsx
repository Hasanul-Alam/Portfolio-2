import AboutMe from "./components/AboutMe/AboutMe";
import HeroSection from "./components/HeroSection/HeroSection";
import MyProjects from "./components/MyProjects/MyProjects";
import Navigation from "./components/Navigation/Navigation";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonial/Testimonial";

const Navbar = () => {
  return (
    <div className="font-sora bg-white">
      <Navigation />
      <HeroSection />
      <Skills />
      <AboutMe />
      <MyProjects />
      <Testimonial />
    </div>
  );
};

export default Navbar;
