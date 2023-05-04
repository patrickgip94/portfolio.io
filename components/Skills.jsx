/* eslint-disable react/jsx-key */
import Image from "next/image";
import { technologies } from "@/constants";

const Skills = () => {
  return (
    <div id="skills" className="w-full md:h-screen p-2 items-center py-20 px-5">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-centers h-full">
        <p className="text-2xl tracking-widest uppercase text-[#5651E5] font-bold">
          Skills
        </p>
        <p className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ">
          Techs/Tools
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-32 md:px-0">
          {/* LIST OF TECH/TOOLS */}
          {technologies.map((tech) => (
            <div
              key={tech}
              className="p-3 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 
              ease-in duration-300 bg-[#003366]"
            >
              <div className="grid md:grid-cols-2 gap-2 justify-center items-center ">
                <div className="mx-auto">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width="64"
                    height="64"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-white text-center">{tech.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
