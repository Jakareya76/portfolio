import ProjectData from "./ProjectData";
import Card from "./Card";

const Project = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-2xl text-center md:text-4xl text-white font-Arimo">
        <span className="text-yellow-400">My</span> Recent Work
      </h1>
      <p className="capitalize text-center text-gray-400 font-mono my-3 px-2">
        Here are some of my recent project. I've worked on
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-10">
        {ProjectData.map((data, id) => {
          return (
            <Card key={id} name={data.title} img={data.image} url={data.link} />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
