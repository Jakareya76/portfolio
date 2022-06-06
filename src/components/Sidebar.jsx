import { Link } from 'react-scroll';
import { ReactComponent as Home } from '../assets/home.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Linkdin } from '../assets/linkdin.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import Logo from '../assets/logo.png';

const Sidebar = () => {
  return (
    <>
      <nav className="bg-zinc-800 md:w-16 md:h-full fixed md:top-0 md:left-0 bottom-0 z-50 md:min-h-full flex md:flex-col items-center justify-around w-full h-20">
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
          <Link to="hero" spy={true} smooth={true} offset={-100}>
            <Home
              className="text-4xl cursor-pointer fill-gray-600 hover:fill-yellow-400"
              width="40px"
              height="40px"
            />
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-30}>
            <User
              className="text-4xl cursor-pointer fill-gray-600 hover:fill-yellow-400"
              width="40px"
              height="40px"
            />
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-100}>
            <Mail
              className="text-4xl cursor-pointer fill-gray-600 hover:fill-yellow-400"
              width="40px"
              height="40px"
            />
          </Link>
        </nav>
        <div className="hidden md:block md:space-x-0">
          <a href="https://www.linkedin.com/in/md-jakareya-ahmed-43a5251b1">
            <Linkdin className="bg-slate-700 m-3 text-2xl rounded-md cursor-pointer hover:bg-yellow-400 hover:text-gray-800 text-gray-500" />
          </a>

          <a href="https://www.github.com/Jakareya76">
            <Github className="bg-gray-700 m-3 text-2xl rounded-md cursor-pointer hover:bg-yellow-400 hover:text-gray-800 text-gray-500" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100077470063570">
            <Facebook className="bg-gray-700 m-3 text-2xl rounded-md cursor-pointer hover:bg-yellow-400 hover:text-gray-800 text-gray-500" />
          </a>
          <a href="/">
            <Twitter className="bg-gray-700 m-3 text-2xl rounded-md cursor-pointer hover:bg-yellow-400 hover:text-gray-800 text-gray-500" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
