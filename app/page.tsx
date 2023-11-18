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
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center bg-[#EAD7BB] items-center">
        <About />
        <Skill />
      </div>
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
