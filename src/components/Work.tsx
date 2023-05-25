import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import work from "../../data/work.json";

export default function Work() {
  return (
    <div className="flex flex-col justify-center items-center mt-32 space-y-20">
      <h1 className="text-2xl lg:text-3xl font-bold lg:font-black text-lightText text-transparent bg-clip-text bg-gradient-to-r from-lightText to-[#626161] dark:bg-gradient-to-r dark:from-darkText dark:to-[#424141]">
        Work Experience
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 lg:space-x-32">
        {work.companies.map((company, index) => (
          <div
            key={index}
            className="w-full place-self-center bg-[#e6e3e3] dark:bg-[#222121] border-2 dark:border-lightText rounded-lg p-2 space-y-5 hover:bg-white dark:hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"
          >
            <div className="text-lg text-lightText dark:text-darkText">
              {company.role}
            </div>
            <div className="text-sm text-lightText dark:text-darkText flex flex-row">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-[#545659] w-5 h-5"
              />
              {company.name}
            </div>
            <div className="flex flex-row justify-between items-center space-x-5">
              <div className="text-sm text-lightText dark:text-darkText">
                {company.startDate} - {company.endDate}
              </div>
              <div className="text-sm text-lightText dark:text-darkText">
                {company.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
