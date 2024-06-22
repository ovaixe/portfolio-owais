import Link from "next/link";

export default function Resume() {
  return (
    <div className="flex flex-col justify-center items-center mt-32 gap-10">
      <h1 className="text-2xl lg:text-3xl font-bold lg:font-black text-center text-lightText text-transparent bg-clip-text bg-gradient-to-r from-lightText to-[#626161] dark:bg-gradient-to-r dark:from-darkText dark:to-[#424141]">
        My Resume
      </h1>
      <Link
        href="resume_bhat_owais.pdf"
        download
        target="blank"
        className="text-lg text-lightBeforeHover dark:text-darkBeforeHover border-2 dark:border-lightText rounded-lg py-3 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300"
      >
        <button>Click here to download Resume</button>
      </Link>
    </div>
  );
}
