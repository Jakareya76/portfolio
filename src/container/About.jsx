import Button from '../components/Button';
import Bar from '../components/Bar';
import Skills from '../data/Skills';

const About = () => {
  return (
    <section
      id="about"
      className="py-32 grid lg:grid-cols-2 xl:place-items-center items-center"
    >
      <div className="sm:ml-16 px-4 text-center sm:text-left lg:w-3/4 mb-6">
        <h1 className="text-yellow-300 text-2xl md:text-5xl font-bold font-mono">
          About Me
        </h1>
        <p className="text-gray-400 my-4 pb-4 text-sm text-justify">
          Hi, I'm Jakareya, Full Stack Web Developer. With Over 3
          YEARS Of Experience. Since beginning my journey as a
          freelance Developer nearly 3 years ago, I've done remote
          work for agencies, consulted for startups, and collaborated
          with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally
          curious, and perpetually working on improving my skills
          <br />
          <br />I like to code things from scratch, and enjoy bringing
          ideas to life in the browser. I have been working on the
          technology like React Js, Node Js, Express Js, MongoDB, And
          NextJs.
        </p>
        <Button links="https://www.fiverr.com/riiote?public_mode=true">
          HIRE ME
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <div className="skill-bars">
          <h1 className="text-white font-bold text-2xl">My Skills</h1>
          {Skills.map((curElem, index) => {
            return (
              <Bar
                key={index}
                name={curElem.name}
                classNames={curElem.classNames}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
