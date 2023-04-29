import Link from "next/link";
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";
import { HiOutlineChevronDoubleUp, HiOutlineMail } from "react-icons/hi";

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
              <div>
                <h2 className="py-2">Patrick Gip</h2>
                <p className="font-semibold">Front-End Developer</p>
                <p className="py-2">
                  I am currently open to considering opportunities for freelance
                  work or full-time employment.. Contact me and let&apos;s talk!
                </p>
              </div>
              <div>
                <p
                  className="uppercase pt-8 pb-4 font-semibold flex items-center justify-center 
                border-b border-gray-500 "
                >
                  Connect with me
                </p>
                <div className="flex items-center justify-center py-6">
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    {/* NAME */}
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  {/* PHONE */}
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    type="text"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* BACK TO TOP */}
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651E5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
