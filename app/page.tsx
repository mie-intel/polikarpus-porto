import Image from "next/image";
import Head from "./components/head";
import About from "./components/about";
import Skill from "./components/skill";
import Works from "./components/works";
import Foot from "./components/foot";

const Home = () => {
  return (
    <>
      <Head />
      <About />
      <Skill />
      <Works />
      <Foot />
    </>
  );
};

export default Home;

/*
  Color pallete
  #FFF2D8
  #EAD7BB
  #BCA37F
  #113946
*/
