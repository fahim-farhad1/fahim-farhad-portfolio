import React from "react";

const Skills = () => {
  return (
    <div id="skill" className="my-14">
      <h2 className="text-3xl font-semibold  text-center text-blue-700 pb-10">
        My Skills
      </h2>
      <div  data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom" className="text-left flex flex-col md:flex-row justify-center items-center md:gap-20 ">
        <div data-aos="fade-left">
          <div>
            <label className="block font-bold">HTML</label>
            <progress
              className="progress progress-success h-3 w-56"
              value="95"
              max="100"
            ></progress>
          </div>
          <div>
            <label className="block font-bold">CSS</label>
            <progress
              className="progress progress-success h-3 w-56"
              value="85"
              max="100"
            ></progress>
          </div>
          <div>
            <label className="block font-bold">JavaScript</label>
            <progress
              className="progress progress-success h-3 w-56"
              value="70"
              max="100"
            ></progress>
          </div>
          <div>
            <label className="block font-bold">React</label>
            <progress
              className="progress progress-success h-3 w-56"
              value="90"
              max="100"
            ></progress>
          </div>
        </div>
        <div data-aos="fade-right">
          <div>
            <label className="block font-bold">Firebase</label>
            <progress
              className="progress progress-success h-3 w-56"
              value="85"
              max="100"
            ></progress>
          </div>
          <div>
            <span className="block font-bold">Node.js</span>
            <progress
              className="progress progress-success h-3 w-56"
              value="50"
              max="100"
            ></progress>
          </div>
          <div>
            <label className="block font-bold">Express.js</label>
            <progress
              className="progress progress-success h-3 w-56"
              value="50"
              max="100"
            ></progress>
          </div>
          <div>
            <label className="block font-bold">Mongodb</label>
            <progress
              className="progress progress-success h-3 w-56"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
