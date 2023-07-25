import React from "react";
import Banner from "./Banner/Banner";
import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Project from "../../Projects/Project";
import Contect from "../../Contract/Contect";
import Container from "../../../Components/Container";

const Home = () => {
  return (
    <div id="home">
      <Container>
        <Banner></Banner>
        <About />
        <Skills />
        <Project />
        <Contect />
      </Container>
    </div>
  );
};

export default Home;
