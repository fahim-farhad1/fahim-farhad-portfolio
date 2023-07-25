import React from "react";
import logo from "../assets/LogoSample_ByTailorBrands-removebg-preview (2).png";
import { HashLink } from "react-router-hash-link";
import Container from "../Components/Container";
const Navbar = () => {
  const navItem = (
    <>
      <HashLink
        smooth
        to="/#home"
        activeClassName="selected"
        activeStyle={{ color: "red" }}
      >
        Home
      </HashLink>
      <HashLink
        smooth
        to="/#about"
        activeClassName="selected"
        activeStyle={{ color: "red" }}
      >
        About Me
      </HashLink>
      <HashLink
        smooth
        to="/#project"
        activeClassName="selected"
        activeStyle={{ color: "red" }}
      >
        Projects
      </HashLink>
      <HashLink
        smooth
        to="/#skill"
        activeClassName="selected"
        activeStyle={{ color: "red" }}
      >
        Skills
      </HashLink>
      <HashLink
        smooth
        to="/#contact"
        activeClassName="selected"
        activeStyle={{ color: "red" }}
      >
        Contact
      </HashLink>
      <HashLink
        smooth
        to="https://drive.google.com/file/d/1ZXXQCNpIw2lj2ImrkqPorsPrk1PpIt7u/view"
      >
        Resume
      </HashLink>
    </>
  );

  return (
    <div className="fixed w-full z-50 shadow-sm bg-white">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            <img className="h-6  hidden md:block" src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2 gap-10 font-bold text-lg">
              {navItem}
            </ul>
          </div>
          <div className="navbar-end">
            <button
              href="https://drive.google.com/file/d/1ZXXQCNpIw2lj2ImrkqPorsPrk1PpIt7u/view"
              className="btn btn-outline btn-info"
            >
              Download Resume
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
