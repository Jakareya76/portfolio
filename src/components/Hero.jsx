import { Link } from 'react-scroll';
import CubeSpinner from './CubeSpinner';
import Button from './Button';

const Hero = () => {
  return (
    <section
      className="md:grid md:grid-cols-2 place-items-center grid grid-cols-1 justify-items-center items-center h-screen pt-16 pb-20"
      id="hero"
    >
      <div className="md:ml-6 md:text-left text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl fadeIn text-white font-bold font-mono">
          Hi, <br /> I'm{' '}
          <span className="lg:text-6xl text-yellow-400 font-sans">
            J
          </span>
          akareya
          <br />
          Web Developer.
        </h1>
        <h2 className="text-gray-500 my-2 font-sans text-sm mb-6 tracking-widest">
          Full Stack Developer / JavaScript Expert / Freelancer
        </h2>
        <Button>
          <Link to="contact" smooth={true} spy={true}>
            CONTACT ME
          </Link>
        </Button>
      </div>
      <div className="w-2/4 -mt-40 lg:-mt-80 flex-1">
        <CubeSpinner />
      </div>
    </section>
  );
};

export default Hero;
