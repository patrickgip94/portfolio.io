import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651E5] font-bold">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div
            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl 
            shadow-gray-400 rounded-xl p-4"
          >
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                  alt="image"
                />
              </div>
              <div className="">
                <p
                  className="uppercase pt-8 font-semibold flex items-center justify-center 
                border-b border-gray-500"
                >
                  Connect with me
                </p>
                <div className="flex items-center justify-center py-4">
                  <div className="flex items-center justify-between space-x-5">
                    <a
                      href="https://www.linkedin.com/in/patrickgip94/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin
                        size={42}
                        className="cursor-pointer text-[#0072b1] rounded-md hover:scale-105 ease-in duration-300"
                      />
                    </a>
                    <a
                      href="https://github.com/patrickgip94"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub
                        size={42}
                        className="cursor-pointer text-black ml-2 hover:scale-105 ease-in duration-300"
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
                    <a
                      href="/assets/Resume.pdf"
                      download="Resume.pdf"
                      className="flex items-center justify-center"
                    >
                      <FcDocument
                        size={42}
                        className="text-[#0072b1] hover:scale-105 ease-in duration-300"
                      />
                    </a>
                    <a
                      href="mailto:gippatrick94@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <HiOutlineMail
                        size={42}
                        className="cursor-pointer text-[#004B87] hover:scale-105 ease-in duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
