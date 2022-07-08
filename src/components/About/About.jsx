import { useEffect } from "react";
import TagCanvas from "tag-canvas";

const About = () => {
  useEffect(() => {
    TagCanvas.Start("myCanva", "tagList", {
      initial: [0.3, -0.3],
      noSelect: true,
      textColour: "#fff",
    });
  }, []);
  return (
    <section
      id="about"
      className="grid grid-cols-1 py-32 lg:grid-cols-2 place-items-center items-center"
    >
      <div className=" px-4 mb-6 text-center sm:text-left xl:w-3/4 sm:ml-16 ">
        <h1 className="text-yellow-300 text-2xl md:text-5xl font-bold font-mono">
          About Me
        </h1>
        <p className="text-[#b8b8c0] my-4 pb-4 text-sm text-justify font-Arimo">
          Hi, I'm Jakareya, Full Stack Web Developer. With Over 3 YEARS Of
          Experience. Since beginning my journey as a freelance Developer nearly
          3 years ago, I've done remote work for agencies, consulted for
          startups, and collaborated with talented people to create digital
          products for both business and consumer use. I'm quietly confident,
          naturally curious, and perpetually working on improving my skills
          <br />
          <br />I like to code things from scratch, and enjoy bringing ideas to
          life in the browser. I have been working on the technology like React
          Js, Node Js, Express Js, MongoDB, And NextJs.
        </p>
        <a
          href="https://www.fiverr.com/riiote?public_mode=true"
          target="_blank"
          rel="noreferrer"
          className="border py-2 px-10 border-[#ffd700] text-[#ffd700] duration-200 hover:bg-[#ffd700] hover:text-black"
        >
          HIRE ME
        </a>
      </div>
      <div id="canvaContainer">
        <canvas
          id="myCanva"
          width="500px"
          height="500px"
          className="w-[280px] h-[280px] xl:w-[450px] xl:h-[450px] lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px]"
        >
          <ul id="tagList">
            <li>
              <a href="https://google.com" className="text-sm">
                Firebase
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                CSS
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                MongoDB
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                React Js
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                Node Js
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                Express Js
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                JavaScript
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                Git
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                Tailwind CSS
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                Next Js
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                HTML
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                JSON
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                Redux
              </a>
            </li>

            <li>
              <a href="https://google.com" className="text-sm">
                SCSS
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                Material UI
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                TypeScript
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                NPM
              </a>
            </li>
            <li>
              <a href="https://google.com" className="text-sm">
                MERN Stack
              </a>
            </li>
          </ul>
        </canvas>
      </div>
    </section>
  );
};

export default About;
