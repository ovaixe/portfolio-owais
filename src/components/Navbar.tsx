import * as React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className="sticky top-0 z-50 w-full h-20 flex px-2 justify-center bg-lightBG dark:bg-darkBG">
      <div className="w-full lg:w-[80%] h-20 py-2 border-b-2 border-[#606060] flex flex-row justify-between items-center">
        <div className="flex flex-row justify-cneter items-center space-x-5">
          <Link href="mailto:ovaixe@gmail.com">
            <div className="w-12 h-12 rounded-full flex justify-center items-center border-2 border-[#898888] bg-[#EBE9E9] dark:bg-[#222121]">
              <MdEmail className="text-[#545659] w-5 h-5" />
            </div>
          </Link>
          <Link href="mailto:ovaixe@gmail.com">
            <div className="text-sm text-lightBeforeHover hover:text-lightText dark:text-darkBeforeHover dark:hover:text-darkText">
              Get in touch
            </div>
          </Link>
        </div>
        <div className="flex flex-row space-x-5">
          <Link
            href={"https://github.com/ovaixe"}
            className="text-sm text-lightBeforeHover hover:text-lightText dark:text-darkBeforeHover dark:hover:text-darkText"
          >
            {isDesktop ? (
              "GitHub"
            ) : (
              <FaGithub className="text-[#545659] w-5 h-5" />
            )}
          </Link>
          <Link
            href={"https://linkedin.com/in/ovaixe"}
            className="text-sm text-lightBeforeHover hover:text-lightText dark:text-darkBeforeHover dark:hover:text-darkText"
          >
            {isDesktop ? (
              "Linkedin"
            ) : (
              <FaLinkedin className="text-[#545659] w-5 h-5" />
            )}
          </Link>
          <Link
            href={"https://twitter.com/ovaixe"}
            className="text-sm text-lightBeforeHover hover:text-lightText dark:text-darkBeforeHover dark:hover:text-darkText"
          >
            {isDesktop ? (
              "Twitter"
            ) : (
              <FaXTwitter className="text-[#545659] w-5 h-5" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
