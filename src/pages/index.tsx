import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Bio from "@/components/Bio";
import Work from "@/components/Work";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className={`flex flex-col items-center p-5 pt-20 pb-32`}>
      <Bio />
      <Work />
      <Skills />
      <div className="flex flex-col justify-center items-center mt-32 space-y-20">
        <h1 className="text-2xl lg:text-3xl font-bold lg:font-black text-center text-lightText text-transparent bg-clip-text bg-gradient-to-r from-lightText to-[#626161] dark:bg-gradient-to-r dark:from-darkText dark:to-[#424141]">
          Tell me about your next project
        </h1>
        <Link href="mailto:owaisbhat996@outlook.com">
          <div className="flex flex-row border-2 dark:border-lightText rounded-lg py-3 px-10 space-x-7 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300">
            <div className="text-lg text-lightBeforeHover dark:text-darkBeforeHover">
              Get in Touch
            </div>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#545659] w-5 h-5"
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
