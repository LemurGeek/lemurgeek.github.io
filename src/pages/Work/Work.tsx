import React from "react";
import { workData } from "../../assets/data/data";
import { IWork } from "../../shared/interfaces/work.interface";

import WorkCard from "./WorkCard";
import WorkSidebar from "./WorkSidebar";

const Work: React.FC = () => {
  const [work, setWork] = React.useState<Array<IWork>>(workData);
  const [currentWork, setCurrentWork] = React.useState(work.length - 1);

  const getCurrentWorkPositions = (currentWork: number): any => {
    return work[work.findIndex((w) => w.id === currentWork)].positions;
  };

  const getCurrentWorkName = (currentWork: number): any => {
    return work[work.findIndex((w) => w.id === currentWork)].company;
  };

  const handleWork = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentWork(+e.currentTarget.value);
  };

  return (
    <section className="flex flex-col flex-grow my-28 lg:my-36">
      <div className="text-center">
        <h1 className="text-5xl lg:text-9xl text-rock_blue">WORK</h1>
        <div className="flex flex-col lg:flex-row justify-center text-xl lg:text-3xl font-light my-20 gap-10 px-5">
          <div>
            <WorkSidebar workList={work} handleWork={handleWork}></WorkSidebar>
          </div>
          <div>
            <WorkCard
              positions={getCurrentWorkPositions(currentWork)}
              name={getCurrentWorkName(currentWork)}
            ></WorkCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
