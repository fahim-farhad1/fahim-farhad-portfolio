import React from "react";
import educam from "../../assets/edu-cam.png";
import toy from "../../assets/toy-bazar.png";
import chef from "../../assets/chef-recipes.png";
import { PiShareFatBold } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Project = () => {
  return (
    <div id="project">
      <h1 className="text-center text-3xl font-semibold text-blue-700 ">
        My Recent Project
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div data-aos="zoom-in-right" className="card bg-base-100 shadow-xl">
          <figure>
            <img src={educam} className=" h-64" alt="project" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title font-bold">Educam</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <PiShareFatBold />{" "}
                  <Link to="https://educam-9c65f.web.app/">Live</Link>
                </div>
                <div className="badge badge-outline">
                  <AiFillGithub />{" "}
                  <Link to="https://github.com/fahimfarhad-official/educam-server">
                    Server
                  </Link>
                </div>
                <div className="badge badge-outline">
                  <AiFillGithub />{" "}
                  <Link to="https://github.com/fahimfarhad-official/educam-client">
                    Client
                  </Link>
                </div>
              </div>
            </div>
            <p>
              Users can view an available class and upon successful payment,
              they will be enrolled in the chosen class. Users can create an
              account and login to access learning materials. The admin has the
              power to approve or deny posts and send feedback. Admin can also
              manage user roles, promoting users to admin or instructors.
            </p>
            <span className="texl-xl font-bold">Technologies:</span> React Js,
            React Router Dom, Firebase, Tailwind, Desi Ui, sweetalert2, Dotenv,
            express JS, MOngoDB, JWT, React Query, Crose, and more.
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="card bg-base-100 shadow-xl"
        >
          <figure>
            <img src={toy} className=" h-64" alt="project" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title font-bold">Toy Bazar</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <PiShareFatBold />{" "}
                  <Link to="https://chef-recipe-hub-client-side.web.app/home">
                    Live
                  </Link>
                </div>
                <div className="badge badge-outline">
                  <AiFillGithub />
                  <Link to="https://github.com/fahimfarhad-official/chef-recipes-server">
                    {" "}
                    Server
                  </Link>
                </div>
                <div className="badge badge-outline">
                  <AiFillGithub />{" "}
                  <Link to="https://github.com/fahimfarhad-official/toy-bazar-client">
                    Client
                  </Link>
                </div>
              </div>
            </div>
            <p>
              Users can create an account and login to access private route’s.
              Only logged users can view toys details. Because some routes are
              privet. Only logged users can upload, edit details and remove
              their uploaded toys.
            </p>
            <p>
              <span className="texl-xl font-bold">Technologies: </span>React Js,
              React Router Dom, Firebase, Tailwind, Desi Ui, sweetalert2,
              Dotenv, express JS, MOngoDB, Crose and more.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-left" className="card bg-base-100 shadow-xl">
          <figure>
            <img src={chef} className=" h-64" alt="project" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title font-bold">Steam Restaurant </h2>
              <div className="flex gap-2">
                <div className="badge badge-outline">
                  <PiShareFatBold />
                  <Link to="https://chef-recipe-hub-client-side.web.app/home">
                    Live
                  </Link>
                </div>
                <div className="badge badge-outline">
                  <AiFillGithub />
                  <Link to="https://github.com/fahimfarhad-official/chef-recipes-server">
                    Server
                  </Link>
                </div>
                <div className="badge badge-outline">
                  <AiFillGithub />
                  <Link to="https://github.com/fahimfarhad-official/chef-recipe-hub-client">
                    Client
                  </Link>
                </div>
              </div>
            </div>
            <p>
              Users can view an available class and upon successful payment,
              they will be enrolled in the chosen class. Users can create an
              account and login to access learning materials. The admin has the
              power to approve or deny posts and send feedback. Admin can also
              manage user roles, promoting users to admin or instructors.
            </p>
            <p>
              <span className="texl-xl font-bold">Technologies:</span> React Js,
              React Router Dom, Firebase, Tailwind, Desi Ui, sweetalert2,
              Dotenv, express JS, MOngoDB, JWT, React Query, Crose, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
