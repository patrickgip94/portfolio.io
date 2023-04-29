const About = () => {
  return (
    <div
      className="w-full md:h-screen p-2 flex items-center py-16 border-b-[3px] 
    border-black transition ease-in-out duration-300"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-2xl tracking-widest text-[#5651E5] font-bold">
            Introduction
          </p>
          <h2 className="mb-2 py-4">About Me</h2>
          <p className="mb-2 py-2 text-gray-600">
            A highly motivated individual with a passion for software
            engineering and a commitment to ongoing learning. With a strong
            aptitude for creative problem-solving and a collaborative mindset, I
            strive to develop innovative applications that push boundaries and
            exceed expectations. Beyond my work in technology, I enjoy staying
            energized through pursuits such as coffee appreciation ☕, video
            gaming 🎮, and savoring fine cuisine 🍣.
          </p>
          <p className="mb-2 py-2 text-gray-600">
            My professional journey has been characterized by perseverance and
            determination. Prior to my entry into the field of software
            engineering, I was a second-year nursing student. However, driven by
            my long-standing vision to become a software engineer, I took the
            initiative to pursue this path, despite my initial lack of
            direction. Through focused effort and dedication, I have honed my
            skills and developed a deep understanding of the software
            engineering landscape.
          </p>
          <p className="mb-2 py-2 text-gray-600">
            In addition to my professional pursuits, I am also a devoted father
            to a three-year-old daughter. My experience as a parent has helped
            me to cultivate important qualities such as patience, empathy, and
            time-management, which are essential in any career.
          </p>
          <p className="mb-2 py-2 text-gray-600">
            Check out some of my latest projects!
          </p>
        </div>
        <div
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 
          rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <img
            className="rounded-xl"
            src="https://i.imgur.com/HhD94Th.jpg"
            alt="Family Photo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
