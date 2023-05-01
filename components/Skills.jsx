/* eslint-disable react/jsx-key */
import Image from "next/image";
import { technologies } from "@/constants";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 shadow-sm pt-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-centers h-full">
        <p className="text-2xl tracking-widest uppercase text-[#5651E5] py-4 font-bold">
          Skills
        </p>
        <p className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Techs/Tools
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* LIST OF TECH/TOOLS */}
          {technologies.map((tech) => (
            <div
              key={tech}
              className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#003366]"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width="64"
                    height="64"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-white">{tech.name}</h3>
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
