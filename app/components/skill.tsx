"use client";

interface SkillBoxProps {
  skillTitle: string;
  bcolor: string;
  textcolor: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({
  skillTitle,
  bcolor,
  textcolor,
}) => {
  return (
    <>
      <div
        className={
          "w-[250px] h-[40px] rounded-[50px] items-center text-center justify-center flex text-[15px]"
        }
        style={{
          color: textcolor,
          backgroundColor: bcolor,
        }}
      >
        {skillTitle}
      </div>
    </>
  );
};

const Skill = () => {
  return (
    <>
      <div className="pl-[7.5%] pt-5 pb-12 pr-[7.5%] relative flex flex-col justify-between bg-[#EAD7BB] text-[#113946]">
        <div className="flex items-start">
          <h1 className="text-[30px] pb-7">Skills</h1>
        </div>
        <div className="flex flex-row justify-evenly gap-[5vw] flex-wrap">
          <SkillBox
            skillTitle={"Problem Solving"}
            bcolor={"#800000"}
            textcolor={"yellow"}
          />
          <SkillBox
            skillTitle={"Javascript"}
            bcolor={"#F0DB4F"}
            textcolor={"black"}
          />
          <SkillBox
            skillTitle={"Next.js"}
            bcolor={"#170f3b"}
            textcolor={"white"}
          />
          <SkillBox
            skillTitle={"Express.js"}
            bcolor={"white"}
            textcolor={"black"}
          />
        </div>
      </div>
    </>
  );
};

export default Skill;

/*
  Color pallete
  #FFF2D8
  #EAD7BB
  #BCA37F
  #113946
*/
