import { Link } from "react-scroll";
import { ReactComponent as Home } from "../../assets/svg/home.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";
import { ReactComponent as User } from "../../assets/svg/user.svg";
import { ReactComponent as Eye } from "../../assets/svg/eye.svg";
import { ReactComponent as Linkdin } from "../../assets/svg/linkdin.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
import Logo from "../../assets/images/logo.png";

const Sidebar = () => {
  return (
    <>
      <nav className="bg-[#181818fa] md:w-[60px] md:h-full fixed md:top-0 md:left-0 bottom-0 z-50 md:min-h-full flex md:flex-col items-center justify-around w-full h-20">
        <Link
          to="hero"
          smooth={true}
          spy={true}
          className="cursor-pointer hidden md:block"
        >
          <img
            src={Logo}
            className="rounded-full md:-mt-5 animate-pulse"
            width="50px"
            height="50px"
            alt="Logo"
          />
        </Link>
        <nav className="flex items-center justify-center md:flex-col md:space-y-7 space-x-14 md:space-x-0 md:-mt-8">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            activeClass="text-[#ffd700]"
          >
            <Home
              className="text-4xl cursor-pointer hover:text-[#ffd700]"
              width="25px"
              height="25px"
              color="#4d4d4e"
            />
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-30}
            activeClass="text-[#ffd700]"
          >
            <User
              className="text-4xl cursor-pointer hover:text-[#ffd700]"
              width="25px"
              height="25px"
              color="#4d4d4e"
            />
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-30}
            activeClass="text-[#ffd700]"
          >
            <Eye
              className="text-4xl cursor-pointer hover:text-[#ffd700]"
              width="25px"
              height="25px"
              color="#4d4d4e"
            />
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            activeClass="text-[#ffd700]"
          >
            <Mail
              className="text-4xl cursor-pointer hover:text-[#ffd700]"
              width="25px"
              height="25px"
              color="#4d4d4e"
            />
          </Link>
        </nav>
        <div className="hidden md:block md:space-x-0">
          <a
            href="https://www.linkedin.com/in/md-jakareya-ahmed-43a5251b1"
            target="_blank"
            rel="noreferrer"
          >
            <Linkdin className="text-[#4d4d4e] m-3 text-2xl cursor-pointer hover:bg-[#4d4d4e] hover:text-gray-800" />
          </a>

          <a
            href="https://www.github.com/Jakareya76"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="text-[#4d4d4e] m-3 text-2xl cursor-pointer hover:bg-[#4d4d4e] hover:text-gray-800" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100077470063570"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook className="text-[#4d4d4e] m-3 text-2xl cursor-pointer hover:bg-[#4d4d4e] hover:text-gray-800" />
          </a>
          <a
            href="https://twitter.com/mdjakareya6"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="text-[#4d4d4e] m-3 text-2xl cursor-pointer hover:bg-[#4d4d4e] hover:text-gray-800" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
