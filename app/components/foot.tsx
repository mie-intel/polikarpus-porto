"use client";
import Link from "next/link";
import Image from "next/image";

import { Montserrat } from "next/font/google";
const montmid = Montserrat({ subsets: ["latin"], weight: ["600"] });

const Foot = () => {
  return (
    <>
      <div
        className={`${montmid.className} w-[100vw] text-[17px] pt-5 pb-5 pr-[5vw] pl-[5vw] relative flex justify-between bg-[#BCA37F] text-[#113946]`}
      >
        <div className="text-center items-start justify-center">
          <h1>Made with ❤️ by Polikarpus Arya</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-[1.4vw] bg-[#BCA37F] text-[#113946]">
          <Link href="https://github.com/mie-intel/" target="_blank">
            <Image src="/foot/github.png" alt="Github" width={30} height={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/polikarpus-arya-pradhanika-2133b5256/"
            target="_blank"
          >
            <Image
              src="/foot/linkedin.png"
              alt="Linkedin"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://instagram.com/paryapradhanika?igshid=MzMyNGUyNmU2YQ=="
            target="_blank"
          >
            <Image
              src="/foot/instagram.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Foot;

/*
  Color pallete
  #FFF2D8
  #EAD7BB
  #BCA37F
  #113946
*/
