// UTILITIES
import { useTypewriter } from "react-simple-typewriter";

// ICONS
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Patrick!", "<Coffee-Lover />", "Front-End-Developer.jsx"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div>
      {/* BACKGROUND IMAGE */}
      <img
        className="w-full h-screen object-cover shadow-2xl shadow-gray-500 border-gray-400 border-b-[3px]"
        src="https://media2.giphy.com/media/N3yLGQ1oMYfGU/giphy.gif?cid=ecf05e47lsvfpf463w5de2cphyko3psndtc0v7hc3cy4rxwm&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="pic"
      />
      {/* BACKGROUND OPACITY */}
      <div className="w-full h-screen absolute top-0 left-0 bg-black/60">
        {/* PROFILE IMAGE */}
        <div className="max-w-[700px] mx-auto h-full w-full flex flex-col justify-center items-center">
          <img
            src="https://i.imgur.com/ei6znvX.png"
            alt="Selfie :)"
            className="relative rounded-full h-36 w-36 object-cover border-2"
          />
          <h2
            className="text-lg sm:text-2xl font-bold uppercase text-gray-200 
            pb-2 pt-2 tracking-[10px] sm:tracking-[15px]"
          >
            Software Developer
          </h2>
          <div
            className="pl-1 my-4 flex items-center justify-center"
            style={{ height: "3rem", overflow: "hidden" }}
          >
            <span className="text-white flex w-[100%] py-10 text-2xl font-bold sm:text-4xl items-center justify-center">
              {text}
            </span>
          </div>
          <div className="flex space-x-3 items-center justify-center">
            <a
              href="https://www.linkedin.com/in/patrickgip94/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={42}
                className="cursor-pointer text-[#0072b1] rounded-md bg-white hover:scale-105 ease-in duration-300"
              />
            </a>
            <a
              href="https://github.com/patrickgip94"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={42}
                className="cursor-pointer text-white ml-2 hover:scale-105 ease-in duration-300"
              />
            </a>
            <a
              href="https://wellfound.com/u/patrick-gip"
              target="_blank"
              rel="noreferrer"
            >
              <FaAngellist
                size={42}
                className="cursor-pointer text-[#f27472] hover:scale-105 ease-in duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
