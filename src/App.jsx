import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </div>
  );
};

export default Navbar;
