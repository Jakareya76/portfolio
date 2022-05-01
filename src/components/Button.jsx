const Button = ({ children, classNames, links }) => {
  return (
    <a
      className={`${classNames} animate__animated animate__fadeIn text-yellow-400 border border-yellow-400 py-2 px-5 font-sans tracking-widest 
                text-sm hover:bg-yellow-400 hover:text-black cursor-pointer`}
      href={links}
    >
      {children}
    </a>
  );
};

export default Button;
