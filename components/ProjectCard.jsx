import { github } from "@/public/assets";

const { default: Image } = require("next/image");

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div>
      <div
        className="bg-[#003366]/90 p-10 rounded-2xl sm:w-[360px] w-full
        hover:scale-105 transition ease-in-out duration-300"
      >
        <div className="relative w-full h-[250px]">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="black-gradient w-10 h-10 rounded-full flex 
              justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="github"
                className="w-[75%] h-[75%] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-[#fff0f0] text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[16px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
