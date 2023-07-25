import React from "react";
import myimage from "../../assets/IMG_0775.png";

const About = () => {
  return (
    <div id="about">
      <div className="mx-0 sm:mx-auto">
        <div className="flex flex-col md:flex-row ">
          <img
            src={myimage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"
            className="max-w-sm rounded-lg md:-mt-32"
          />
          <div
            className=" md:ml-10"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1500"
          >
            <h1 className="text-3xl mt-5 text-blue-700 font-semibold">
              About Me_
            </h1>
            <p className="py-6  text-lg">
              My name is Fahim Farhad, and I am currently pursuing a diploma in
              Engineering in Computer Science and Engineering (CSE) at Shyamoli
              Ideal Polytechnic Institute. I recently completed a comprehensive
              Full Stack Web Development course on the MERN (MongoDB, Express,
              React, Node.js) stack through Programming Hero. With a passion for
              coding and a strong foundation in web development, I am equipped
              with the skills to design and develop dynamic and responsive
              websites. I am eager to contribute to the tech industry and
              continue expanding my knowledge in the field of computer science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
