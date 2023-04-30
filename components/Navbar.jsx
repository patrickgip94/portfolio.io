// UTILITIES
import Image from "next/image";
import Link from "next/link";
import { useTypewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";

// ICONS
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  const handleNav = () => {
    setNav(!nav);
  };
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Patrick!", "<Coffee-Lover />", "Front-End-Developer.jsx"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-white">
        <Link href="/">
          <Image
            src="/../public/assets/patlogo.png"
            alt="logo"
            width="175"
            height="75"
            className="hover:cursor-pointer"
          />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase border-b border-transparent hover:border-b-blue-500">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase border-b border-transparent hover:border-b-blue-500">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase border-b border-transparent hover:border-b-blue-500">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase border-b border-transparent hover:border-b-blue-500">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase border-b border-transparent hover:border-b-blue-500">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>

          {/* MENU ICON*/}
          <div onClick={handleNav} className="md:hidden hover:cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* MENU */}
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[white] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 bg-[white] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/patlogo.png"
                alt="logo"
                width="175"
                height="50"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-2.5 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div
              className="pl-1 border-b border-gray-300 my-4"
              style={{ height: "6rem", overflow: "hidden" }} // prevents typescript from moving border bottom
            >
              <span className="flex w-[100%] md:w-[90%] py-10 text-xl font-bold sm:text-2xl items-center justify-center">
                {text}
              </span>
            </div>
          </div>

          <div className="py-4 flex flex-col ">
            <ul className="uppercase font-bold">
              <Link href="/">
                <li className="socialText">Home</li>
              </Link>
              <Link href="/">
                <li className="socialText">About</li>
              </Link>
              <Link href="/">
                <li className="socialText">Skills</li>
              </Link>
              <Link href="/">
                <li className="socialText">Projects</li>
              </Link>
              <Link href="/">
                <li className="socialText">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651E5] text-lg font-bold">
                Contact Me
              </p>

              {/* SOCIAL LINK */}
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                {/* LINKEDIN */}
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <a
                    href="https://www.linkedin.com/in/patrickgip94/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="text-[#0072b1] text-3xl" />
                  </a>
                </div>
                {/* GITHUB */}
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <a
                    href="https://github.com/patrickgip94"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="text-black text-3xl" />
                  </a>
                </div>
                {/* ANGELLIST */}
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <a
                    href="https://wellfound.com/u/patrick-gip"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaAngellist className="text-[#f27472] text-3xl" />
                  </a>
                </div>
                {/* RESUME */}
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <a
                    href="/assets/Resume.pdf"
                    download="Resume.pdf"
                    className="flex items-center justify-center"
                  >
                    <FcDocument className="text-[#0072b1] text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
