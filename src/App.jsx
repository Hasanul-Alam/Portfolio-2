import AboutMe from "./components/AboutMe/AboutMe";
import HeroSection from "./components/HeroSection/HeroSection";
import MyProjects from "./components/MyProjects/MyProjects";
import Navigation from "./components/Navigation/Navigation";
import Skills from "./components/Skills/Skills";

const Navbar = () => {
  return (
    <div className="font-sora bg-white">
      <Navigation />
      <HeroSection />
      <Skills />
      <AboutMe />
      <MyProjects />
    </div>
  );
};

export default Navbar;
