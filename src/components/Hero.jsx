import CubeSpinner from "./CubeSpinner";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="md:grid md:grid-cols-2 place-items-center grid grid-cols-1 justify-items-center items-center h-screen pt-16 pb-20"
      id="home"
    >
      <div className="md:ml-6 md:text-left text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fadeIn text-white font-bold font-mono">
          Hi, <br /> I'm{" "}
          <span className="lg:text-6xl text-yellow-400 font-sans">J</span>
          akareya
          <br />
          Web Developer.
        </h1>
        <h2 className="text-gray-500 my-2 font-sans text-sm mb-6 tracking-widest animate-pulse">
          Full Stack Developer / JavaScript Expert / Freelancer
        </h2>
        <Button links="#contact">CONTACT ME</Button>
      </div>
      <div className="w-2/4 -mt-40 lg:-mt-80 flex-1">
        <CubeSpinner />
      </div>
    </section>
  );
};

export default Hero;
