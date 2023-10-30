import Image from "next/image";
import { services } from "@/constants";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div>
      <div
        className="lg:flex w-full green-pink-gradient p-[1px] rounded-[20px] 
      shadow-xl shadow-gray-400"
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#003366] rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly
          items-center flex-col hover:scale-105 transition ease-in-out duration-200"
        >
          <Image src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-full p-2 flex items-center pt-28 py-10"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:pr-12">
            <p className="uppercase text-2xl tracking-widest text-[#5651E5] font-bold">
              Introduction
            </p>
            <p className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              About Me
            </p>
            <p
              className="mb-2 py-2 text-gray-600 text-sm lg:text-[17px] leading-[30px]"
              style={{ maxWidth: "30em" }}
            >
              A highly motivated individual with a passion for technology and a
              commitment to ongoing learning. With a strong aptitude for
              creative problem-solving and a collaborative mindset, I strive to
              develop innovative applications that push boundaries and exceed
              expectations. Beyond my work in technology, I enjoy staying
              energized through pursuits such as coffee appreciation ☕, video
              gaming 🎮, and savoring fine cuisine 🍣.
            </p>
            <p className="mb-2 py-2 text-gray-600 text-sm lg:text-[17px] leading-[30px]">
              My professional journey has been characterized by perseverance and
              determination. Prior to my entry into the field of technology, I
              was a second-year nursing student. However, driven by my
              long-standing vision to become a cybersecurity professional, I
              took the initiative to pursue this path, despite my initial lack
              of direction. Through focused effort and dedication, I have honed
              my skills and developed a deep understanding of the cybersecurity
              landscape.
            </p>
            <p className="mb-2 py-2 text-gray-600 text-sm lg:text-[17px] leading-[30px]">
              In addition to my professional pursuits, I am also a devoted
              father to a three-year-old daughter. My experience as a parent has
              helped me to cultivate important qualities such as patience,
              empathy, and time-management, which are essential in any career.
            </p>
          </div>
          <div className="hidden sm:flex flex-col justify-center items-center ">
            <div
              className="w-2/3 md:w-[80%] h-auto my-auto shadow-xl shadow-gray-400 rounded-xl 
            p-4 hover:scale-105 ease-in duration-300"
            >
              <Image
                className="rounded-xl"
                src="https://i.imgur.com/HhD94Th.jpg"
                alt="Family Photo"
                width={500}
                height={350}
              />
            </div>
            <div className="flex flex-col pt-10">
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="flex flex-col items-center justify-center gap-10">
                  {services.map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      index={index}
                      {...service}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
