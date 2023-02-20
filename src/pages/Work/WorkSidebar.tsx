import React, { createRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IWork } from "../../shared/interfaces/work.interface";

interface IProps {
  workList: IWork[];
  handleWork(e: React.ChangeEvent<HTMLInputElement>): void;
}

const WorkSidebar: React.FC<IProps> = (props) => {
  const worksRef = useRef(props.workList.map(() => createRef<HTMLLIElement>()));

  useEffect(() => {
    worksRef.current.map((workRef) => {
      gsap.fromTo(
        workRef.current,
        { opacity: 0, x: -500 },
        { opacity: 1, delay: 0.5, x: 0, ease: "circ.out", duration: 1.5 }
      );
    });
  }, []);

  return (
    <ul className="flex flex-col-reverse text-left gap-y-4">
      {props.workList.map((w) => (
        <li ref={worksRef.current[w.id]} key={w.id}>
          <input
            type="radio"
            id="rdWork"
            name="rdWork"
            value={w.id}
            className="appearance-none rounded-full h-7 w-7 bg-tacha checked:bg-tacha focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain opacity-25 checked:opacity-100 float-left mr-2 cursor-pointer"
            defaultChecked={w.id === props.workList.length - 1}
            onChange={props.handleWork}
          />
          <label htmlFor="rdWork" className="text-xl lg:text-3xl">
            {w.company}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default WorkSidebar;
