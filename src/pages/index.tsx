import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className={`flex flex-col items-center p-5 pt-20 pb-32`}>
      <div className="flex flex-col place-items-center space-y-5">
        <Image
          className="relative w-32 h-32 rounded-full"
          src="/ovi.png"
          alt="owais"
          width={180}
          height={37}
        />
        <div className="text-sm text-lightText dark:text-darkText">
          Hi, I&#39;m Bhat Owais
        </div>
        <div className="text-lg text-lightText dark:text-darkText lg:w-[50%] text-center">
          I&#39;m a software developer with 2+ years of experience in building web
          applications. I specialize in both frontend and backend development,
          with expertise in modern web technologies such as Nest.js, Next.js,
          React.
        </div>
        <div className="text-lg text-lightText dark:text-darkText lg:w-[50%] text-center">
          As a frontend developer, I have a keen eye for design and user
          experience, and I&#39;m passionate about creating beautiful and intuitive
          interfaces that make the web a better place. I&#39;m comfortable working
          with various frontend frameworks such as Next.js, React and Tailwind
          CSS.
        </div>
        <div className="text-lg text-lightText dark:text-darkText lg:w-[50%] text-center">
          As a backend developer, I enjoy building scalable and robust
          server-side applications that power the frontend. I&#39;m proficient in
          various programming languages such as Javascript, Python and have
          experience in working with databases such as Postgresql, MySQL.
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-32 space-y-20">
        <h1 className="text-2xl lg:text-3xl font-bold lg:font-black text-lightText text-transparent bg-clip-text bg-gradient-to-r from-lightText to-[#626161] dark:bg-gradient-to-r dark:from-darkText dark:to-[#424141]">
          Work Experience
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 lg:space-x-32">
          <div className="w-full place-self-center bg-[#e6e3e3] dark:bg-[#222121] border-2 dark:border-lightText rounded-lg p-2 space-y-5 hover:bg-white dark:hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <div className="text-lg text-lightText dark:text-darkText">
              SDE Intern
            </div>
            <div className="text-sm text-lightText dark:text-darkText flex flex-row">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-[#545659] w-5 h-5"
              />
              MediBuddy
            </div>
            <div className="flex flex-row justify-between items-center space-x-5">
              <div className="text-sm text-lightText dark:text-darkText">
                Jan 2023 - Present
              </div>
              <div className="text-sm text-lightText dark:text-darkText">
                Bangalore, India
              </div>
            </div>
          </div>
          <div className="w-full place-self-center bg-[#e6e3e3] dark:bg-[#222121] border-2 dark:border-lightText rounded-lg p-2 space-y-5 hover:bg-white dark:hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <div className="text-lg text-lightText dark:text-darkText">
              Python Developer Intern
            </div>
            <div className="text-sm text-lightText dark:text-darkText flex flex-row">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-[#545659] w-5 h-5"
              />
              NamaSYS
            </div>
            <div className="flex flex-row justify-between items-center space-x-5">
              <div className="text-sm text-lightText dark:text-darkText">
                Jan 2022 – Mar 2022
              </div>
              <div className="text-sm text-lightText dark:text-darkText">
                New Delhi, India
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-32 space-y-20">
        <h1 className="text-2xl lg:text-3xl font-bold lg:font-black text-lightText text-transparent bg-clip-text bg-gradient-to-r from-lightText to-[#626161] dark:bg-gradient-to-r dark:from-darkText dark:to-[#424141]">
          Skills
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="w-72 h-auto p-5 pt-20 space-y-5 flex flex-col items-center bg-[#e6e3e3] dark:bg-[#222121] rounded-xl hover:bg-white dark:hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <Image
              src={"/front.avif"}
              height={60}
              width={60}
              alt="frontend"
              className="place-self-start"
            />
            <div className="text-lightText dark:text-darkText text-lg font-black">
              Frontend Development
            </div>
            <div className="text-lightText dark:text-darkText text-sm">
              I specialize in creating user interfaces that are not only
              visually appealing, but also highly functional and easy to use.
            </div>
          </div>
          <div className="w-72 h-auto p-5 pt-20 space-y-5 flex flex-col items-center bg-[#e6e3e3] dark:bg-[#222121] rounded-xl hover:bg-white dark:hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <Image
              src={"/back.avif"}
              height={60}
              width={60}
              alt="backend"
              className="place-self-start"
            />
            <div className="text-lightText dark:text-darkText text-lg font-black">
              Backend Development
            </div>
            <div className="text-lightText dark:text-darkText text-sm">
              I specialize in creating robust, scalable APIs and integrating
              them with frontend systems to create dynamic, data-driven web
              applications.
            </div>
          </div>
          <div className="w-72 h-auto p-5 pt-20 space-y-5 flex flex-col items-center bg-[#e6e3e3] dark:bg-[#222121] rounded-xl hover:bg-white dark:hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <Image
              src={"/auto.avif"}
              height={60}
              width={60}
              alt="automation"
              className="place-self-start"
            />
            <div className="text-lightText dark:text-darkText text-lg font-black">
              Web Scraping and Automation
            </div>
            <div className="text-lightText dark:text-darkText text-sm">
              I have experience using a range of tools and technologies to
              collect and analyze data from the web, automate repetitive tasks,
              and streamline workflows.
            </div>
          </div>
        </div>
      </div>

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
