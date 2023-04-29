import ProjectItems from "./ProjectItems";
import layniesWord from "../public/assets/layniesWord.png";
import onlyPansImage from "../public/assets/onlyPansImage.png";
import rentit from "../public/assets/rentit2.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full shadow-sm">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-2xl tracking-widest uppercase text-[#5651E5] py-4 font-bold">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
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
            title="Rentit"
            backgroundImg={rentit}
            projectUrl="https://github.com/patrickgip94/Rentit"
            tools="React"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
