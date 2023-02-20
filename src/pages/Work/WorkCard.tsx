import React, { createRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IPositions } from "../../shared/interfaces/work.interface";

interface IProps {
  positions: IPositions[];
  name: string;
}

const WorkCard: React.FC<IProps> = (props) => {
  const workCardsRef = useRef(
    props.positions.map(() => createRef<HTMLDivElement>())
  );

  //TODO: add positions to effect array to listen when it change and fix animation issue.
  useEffect(() => {
    workCardsRef.current.map((workCard) => {
      gsap.fromTo(
        workCard.current,
        { opacity: 0, x: 500 },
        { opacity: 1, delay: 0.5, x: 0, ease: "circ.out", duration: 1.5 }
      );
    });
  }, []);

  return (
    <div className="flex flex-col-reverse gap-y-5">
      {props.positions.map((p) => (
        <div
          ref={workCardsRef.current[p.id]}
          key={p.id}
          className="flex flex-row gap-x-5 lg:w-[52rem]"
        >
          <div className="relative flex flex-col ">
            <div className="w-8 h-8 lg:w-16 lg:h-16">
              <img src={`/work/${p.logo}`} alt="" className="w-fit h-fit" />
            </div>
            <div className="absolute left-1/2 top-20 -ml-0.5 w-0.5 min-h-[calc(100%-5rem)] bg-eerie_black"></div>
          </div>
          <div className="flex flex-col text-left">
            <h2 className="text-2xl lg:text-4xl italic font-normal">
              {p.position}
              <span className="font-light not-italic text-xl lg:text-3xl">
                {" "}
                at {props.name}
              </span>
            </h2>
            <span className="lg:text-2xl mt-3">
              {p.startDate} - {p.endDate}
            </span>
            <p className="lg:text-2xl my-5">{p.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCard;
