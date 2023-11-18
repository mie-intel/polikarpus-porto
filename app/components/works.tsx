"use client";

import { Montserrat } from "next/font/google";
const montmid = Montserrat({ subsets: ["latin"], weight: ["500"] });

import Link from "next/link";
import Image from "next/image";

interface WorkBoxProps {
  workTitle: string;
  link: string;
  desc: string;
  image: string;
}

const WorkBox: React.FC<WorkBoxProps> = ({ workTitle, link, desc, image }) => {
  return (
    <>
      <div
        className={
          "w-[400px] h-[290px] flex items-start text-center justify-center" +
          `text-[#BCA37F]`
        }
        style={{
          flexDirection: "column",
          color: "#113946",
        }}
      >
        <Link href={link} target="_blank">
          <div className="w-[325px] h-[180px] flex relative items-center">
            <Image
              className="rounded-[15px]"
              src={image}
              alt={workTitle}
              fill={true}
            ></Image>
          </div>
          <div className="flex p-[10px] flex-col text-[20px] text-left justify-center">
            {workTitle}
            <div
              className={`${montmid.className} flex text-[15px] text-left justify-center max-w-[325px] max-h-[45px] overflow-hidden`}
            >
              {desc}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

const Works = () => {
  return (
    <>
      <div className="pl-[7.5%] pt-5 pb-12 pr-[7.5%] w-[100vw] relative flex flex-col bg-[#EAD7BB] text-[#113946] ">
        <div className="flex items-start">
          <h1 className="text-[30px]">Recent works</h1>
        </div>
        <div className={`text-[20px] pb-10 ${montmid.className}`}>
          These are the apps I launch already
        </div>
        <div className="flex flex-row justify-start gap-[0px] flex-wrap">
          <WorkBox
            workTitle="gdsc-voting-api"
            link="https://github.com/mie-intel/gdsc-voting-api"
            image="/works/gdscVotingApi/image.png"
            desc="This is an api which provide services for handling a voting event"
          />
          <WorkBox
            workTitle="GMAT Data Receiver"
            link="https://gmat-final-project.vercel.app/"
            image="/works/gmatFinalProject/image.png"
            desc="This website is showing a graph about satelite data"
          />
        </div>
      </div>
    </>
  );
};

export default Works;

/*
  Color pallete
  #FFF2D8
  #EAD7BB
  #BCA37F
  #113946
*/
