const Card = ({ name, img, url }) => {
  return (
    <div className="w-[275px] sm:w-[320px] h-52 cursor-pointer sm:h-56 bg-slate-700 relative rounded-sm">
      <img
        className="w-full h-full object-fill"
        src={img}
        alt="Project rounded-sm"
      />
      <div className="absolute w-full h-full card--inner--div top-0 opacity-0 hover:opacity-100 rounded-sm duration-500 flex items-center justify-center flex-col">
        <h1 className="text-white font-semibold text-xl">{name}</h1>
        <a
          className="border text-white py-1 px-6 mt-4 hover:bg-[#ffd900a2] hover:text-black hover:border-transparent uppercase duration-200"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Card;
