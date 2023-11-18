"use client";

const Head = () => {
  return (
    <>
      <div className="pt-12 pb-12 relative flex flex-row justify-between bg-[#113946] text-[#FFF2D8]">
        <div className="bg-[#EAD7BB] w-[200px] h-11 rounded-r-[34px]"></div>
        <div className="flex-col justify-center items-center text-left">
          <h1 className="text-[60px]">Hi fellas!</h1>
          <h1 className="text-[35px]" style={{ color: "yellow" }}>
            I&apos;m Polikarpus Arya
          </h1>
          <h2 className="text-[25px]">(was) a Competitive Programmer</h2>
        </div>
        <div className="relative w-[200px] h-[vh]">
          <div className="bg-[#EAD7BB] absolute bottom-0 w-[200px] h-11 rounded-l-[34px]"></div>
        </div>
      </div>
    </>
  );
};

export default Head;

/*
  Color pallete
  #FFF2D8
  #EAD7BB
  #BCA37F
  #113946
*/