import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function GetinTouch() {
  return (
    <div className="flex flex-col justify-center items-center mt-32 gap-10">
      <h1 className="text-2xl lg:text-3xl font-bold lg:font-black text-center text-lightText text-transparent bg-clip-text bg-gradient-to-r from-lightText to-[#626161] dark:bg-gradient-to-r dark:from-darkText dark:to-[#424141]">
        Tell me about your next project
      </h1>
      <Link href="mailto:ovaixe@gmail.com">
        <div className="flex flex-row border-2 dark:border-lightText rounded-lg py-3 px-10 space-x-7 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300">
          <div className="text-lg text-lightBeforeHover dark:text-darkBeforeHover">
            Get in Touch
          </div>
          <MdEmail className="text-[#545659] w-5 h-5" />
        </div>
      </Link>
    </div>
  );
}
