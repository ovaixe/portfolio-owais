import Image from "next/image";
import skills from "../../data/skills.json";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center mt-32 gap-10">
      <h1 className="text-2xl lg:text-3xl font-bold lg:font-black text-lightText text-transparent bg-clip-text bg-gradient-to-r from-lightText to-[#626161] dark:bg-gradient-to-r dark:from-darkText dark:to-[#424141]">
        Skills
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        {skills.skills.map((skill, index) => (
          <div
            key={index}
            className="w-72 h-auto p-5 pt-20 space-y-5 flex flex-col items-start bg-[#e6e3e3] dark:bg-[#222121] rounded-xl hover:bg-white dark:hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"
          >
            <Image
              src={skill.logo}
              height={60}
              width={60}
              alt="frontend"
              className="place-self-start"
            />
            <div className="text-lightText dark:text-darkText text-lg font-black">
              {skill.name}
            </div>
            <div className="text-lightText dark:text-darkText text-sm">
              {skill.discription}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
