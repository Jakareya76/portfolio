import { Link } from "react-scroll";
import CubeSpinner from "../CubeSpinner";

const Hero = () => {
  return (
    <section
      className="md:grid md:grid-cols-2 place-items-center grid grid-cols-1 justify-items-center items-center h-screen pt-16 pb-20"
      id="hero"
    >
      <div className="ml-[10%]">
        <h1 className="text-3xl text-white font-bold font-Arimo sm:text-4xl md:text-[40px] lg:text-5xl xl:text-7xl ">
          Hi, <br /> I'm{" "}
          <span className=" text-yellow-400 font-sans lg:text-6xl xl:text-7xl">
            J
          </span>
          akareya
          <br />
          Web Developer.
        </h1>
        <h2 className="text-[#8d8d8d] my-2 font-Arimo text-sm mb-6 tracking-[3px]">
          Full Stack Developer / JavaScript Expert / Freelancer
        </h2>
        <button className="border text-[#ffd700] border-[#ffd700] py-2 px-10 duration-200 hover:bg-[#ffd700] hover:text-[#333]">
          <Link to="contact" smooth={true} spy={true}>
            CONTACT ME
          </Link>
        </button>
      </div>
      <div className="w-2/4 -mt-40 lg:-mt-80 flex-1">
        <CubeSpinner />
      </div>
    </section>
  );
};

export default Hero;
