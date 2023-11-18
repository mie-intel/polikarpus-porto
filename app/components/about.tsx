"use client";

import { Montserrat } from "next/font/google";
const montmid = Montserrat({ subsets: ["latin"], weight: ["500"] });

interface SkillBoxProps {
  skillTitle: string;
  bcolor: string;
  textcolor: string;
}

const About = () => {
  return (
    <>
      <div className="pl-[7.5%] pt-5 pb-12 pr-[7.5%] w-[100vw] relative flex flex-col justify-between bg-[#EAD7BB] text-[#113946]">
        <div className="flex items-start">
          <h1 className="text-[30px]">About Me</h1>
        </div>
        <div className={"text-[20px] " + `${montmid.className}`}>
          Hi! I&apos;m{" "}
          <u>
            <b>Arya</b>
          </u>
          . I learn to create a website from scratch. I interested in creating
          usefull stuff for people trough software engineering.
        </div>
      </div>
    </>
  );
};

export default About;

/*
  Color pallete
  #FFF2D8
  #EAD7BB
  #BCA37F
  #113946
*/
