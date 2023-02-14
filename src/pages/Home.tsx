import React from "react";
import { useNavigate } from "react-router";
import Sketch from "react-p5";
import p5Types from "p5";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/about");
  };

  // p5js
  let x: number, y: number;
  let growthFactor = 10;
  let previousTime = 0;
  let delayTime = 50;
  let iteration = 0;
  let palette = [
    "#e6b1cb",
    "#d0e0f7",
    "#428bb7",
    "#e3a844",
    "#cbdc8c",
    "#8864cb",
    "#97acdd",
    "#422c3d",
    "#a9697e",
  ];
  let setup = (p5: p5Types, canvasParentRef: Element) => {
    //Canvas of size 1000x800
    //let xyz = p5.createCanvas(1000, 800).parent(canvasParentRef);
    p5.createCanvas(600, 400);
    p5.background("#EEE7E1");
    x = p5.random(p5.width);
    y = p5.random(p5.height);
  };
  let draw = (p5: p5Types) => {
    //p5.background("rgb(100%,0%,10%)");
    if (p5.millis() - previousTime >= delayTime && iteration < 100) {
      previousTime = p5.millis();
      p5.noStroke();
      let color = p5.random(palette);
      p5.fill(color);
      let points = [];

      for (let i = 0; i < 360; i += p5.random(10, 60)) {
        let angle = p5.radians(i);
        let randomDistance = p5.random(growthFactor / 4, growthFactor); //growthFactor / 4, growthFactor / 2
        let xOff = p5.cos(angle) * randomDistance;
        let yOff = p5.sin(angle) * randomDistance;
        points.push({ x: x + xOff, y: y + yOff });
      }

      p5.beginShape();
      for (let point of points) {
        p5.vertex(point.x, point.y);
      }
      p5.endShape(p5.CLOSE);

      let newX = x + p5.random(-growthFactor, growthFactor);
      let newY = y + p5.random(-growthFactor, growthFactor);

      if (newX > 0 && newX < p5.width && newY > 0 && newY < p5.height) {
        x = newX;
        y = newY;
        growthFactor += p5.random(0, 1);
      }
      iteration++;
    }
  };
  // end p5js

  return (
    <main className="flex flex-col flex-grow justify-center h-[calc(100vh-56px)]">
      <div className="text-center">
        <h1 className="text-5xl lg:text-9xl text-rock_blue">HELLO THERE</h1>
        <h2 className="text-xl lg:text-3xl font-light my-10">
          I’m Marcello Calvo a Software Developer
        </h2>
        <button
          onClick={buttonHandler}
          className="text-lg lg:text-xl font-light px-10 py-1 border-ochre_orange border-2 rounded-full hover:bg-ochre_orange hover:text-pearl_bush"
        >
          See more
        </button>
        {/* <Sketch setup={setup} draw={draw} className="App" /> */}
      </div>
    </main>
  );
};

export default Home;
