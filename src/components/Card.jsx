const Card = ({ name, img, link }) => {
  return (
    <div className="sm:w-[320px] w-72 h-52 cursor-pointer sm:h-56 bg-slate-700 relative rounded-sm">
      <img className="w-full h-full object-fill" src={img} alt="Project rounded-sm" />
      <div className="absolute w-full h-full card--inner--div top-0 opacity-0 hover:opacity-100 rounded-sm duration-500 flex items-center justify-center flex-col">
        <h1 className="text-white font-semibold text-xl">{name}</h1>
        <a className="border-2 text-white py-1 px-6 mt-4 rounded-full" href={link} target="_newpage">Visite Website</a>
      </div>
    </div>
  );
};

export default Card;
