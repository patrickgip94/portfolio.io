import { projects } from "../constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="w-full md:h-full p-2 flex items-center py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-centers">
        <p className="text-2xl tracking-widest uppercase text-[#5651E5] py-6 font-bold">
          My Projects
        </p>
        <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pb-2">
          Project.
        </h2>

        <div className="w-full flex">
          <p className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
            The following projects showcase my skills and experiences. Each
            project is briefly described with links to GitHub repositories, and
            some have live demos included. This reflects my ability to solve
            complex problems, work with different technologies, and manage
            projects effectively.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
