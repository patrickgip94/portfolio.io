import ProjectItems from "./ProjectItems";
import layniesWord from "../public/assets/layniesWord.png";
import onlyPansImage from "../public/assets/onlyPansImage.png";

const Projects = () => {
  return (
    <div
      className="w-full border-b-[3px] 
    border-black transition ease-in-out duration-300"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-2xl tracking-widest uppercase text-[#5651E5] py-4 font-bold">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Laynie's Word Adventure"
            backgroundImg={layniesWord}
            projectUrl="https://github.com/patrickgip94/Laynies-Word-Adventure"
            tools="React Native & Expo"
          />
          <ProjectItems
            title="OnlyPans"
            backgroundImg={onlyPansImage}
            projectUrl="https://github.com/patrickgip94/OnlyPans"
            tools="React Native & Expo"
          />
          <ProjectItems
            title="Laynie's Word Adventure"
            backgroundImg={layniesWord}
            projectUrl="/onlypans"
            tools=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
