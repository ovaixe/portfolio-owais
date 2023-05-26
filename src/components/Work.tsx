import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import work from "../../data/work.json";

interface TabPanelProps {
  index: number;
}

function TabPanel(props: TabPanelProps) {
  const { index } = props;

  return (
    <div className="w-full place-self-center bg-[#e6e3e3] dark:bg-[#222121] border-2 dark:border-lightText rounded-lg p-2 space-y-5">
      <div className="text-lg text-lightText dark:text-darkText">
        {work.companies[index].role}
      </div>
      <div className="text-sm text-lightText dark:text-darkText flex flex-row">
        <FontAwesomeIcon icon={faBuilding} className="text-[#545659] w-5 h-5" />
        {work.companies[index].name}
      </div>
      <div className="flex flex-row justify-between items-center space-x-5">
        <div className="text-sm text-lightText dark:text-darkText">
          {work.companies[index].startDate} - {work.companies[index].endDate}
        </div>
        <div className="text-sm text-lightText dark:text-darkText">
          {work.companies[index].location}
        </div>
      </div>
      <div className="space-y-3">
        {work.companies[index].description.map((item, index) => (
          <div key={index} className="flex flex-row space-x-2 items-start">
            <div className="pt-1">
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                className="text-[#545659] w-4 h-4"
              />
            </div>
            <div className="text-lightText dark:text-darkText">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const [value, setValue] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center mt-32 space-y-20">
      <h1 className="text-2xl lg:text-3xl font-bold lg:font-black text-lightText text-transparent bg-clip-text bg-gradient-to-r from-lightText to-[#626161] dark:bg-gradient-to-r dark:from-darkText dark:to-[#424141]">
        Work Experience
      </h1>

      <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-10 lg:flex-row">
        <div className="flex flex-row space-x-5 lg:space-x-0 lg:space-y-3 lg:flex-col">
          {work.companies.map((company, index) => (
            <div key={index} className="flex flex-row space-x-2 items-center">
              <div
                className={`w-2 rounded-full ${
                  index === value
                    ? "h-4 bg-black dark:bg-white"
                    : "h-2 bg-lightText dark:bg-darkText"
                }`}
              ></div>
              <div
                className={`px-3 py-1 rounded-lg cursor-pointer ${
                  index === value
                    ? "bg-[#E5E3E3] dark:bg-[#222121] text-black dark:text-white"
                    : "text-lightText dark:text-darkText"
                }`}
                onClick={() => setValue(index)}
              >
                {company.name}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[600px]">
          <TabPanel index={value} />
        </div>
      </div>
    </div>
  );
}
