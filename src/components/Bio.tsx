import Image from "next/image";
import bio from "../../data/bio.json";

export default function Bio() {
  return (
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
        {bio.header}
      </div>
      {/* <div className="text-lg text-lightText dark:text-darkText lg:w-[50%] text-center">
        {bio.frontend}
      </div>
      <div className="text-lg text-lightText dark:text-darkText lg:w-[50%] text-center">
        {bio.backend}
      </div> */}
    </div>
  );
}
