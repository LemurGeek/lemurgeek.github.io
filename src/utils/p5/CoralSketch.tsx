import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { random } from "gsap";

const colors = ["#256088", "#7099ba", "#9cc7cf", "#bed2a7", "#dddfc5"];
let corals: any = [];
let maxCorals: number;
let firstTime: boolean = false;

const CoralSketch: React.FC = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    let canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    startGeneration(p5);
  };

  const draw = (p5: p5Types) => {
    drawGeneration(p5);
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    startGeneration(p5);
  };

  const startGeneration = async (p5: p5Types) => {
    p5.clear();
    corals = [];
    if (!firstTime) await sleep(2500);
    firstTime = true;
    maxCorals = p5.windowWidth >= 500 ? p5.random(5) : p5.random(2);
    for (let i = 0; i <= maxCorals; i++) {
      corals.push(new Coral(p5));
    }
  };

  const drawGeneration = (p5: p5Types) => {
    for (let j = 0; j <= maxCorals; j++) {
      corals[j].show(p5);
      corals[j].update(p5);
    }
  };

  const sleep = (millis: number) => {
    return new Promise((resolve) => setTimeout(resolve, millis));
  };

  return (
    <Sketch
      className="absolute right-0 left-0 top-0 bottom-0"
      setup={setup}
      draw={draw}
      windowResized={windowResized}
    />
  );
};

export default CoralSketch;

class Coral {
  x: number;
  y: number;
  r: number;
  speed: number;
  color: string;
  branches: Branch[];
  grow: boolean;

  constructor(p5: p5Types) {
    this.x = p5.random(10, p5.width - 10);
    this.y = p5.height;
    this.r = 10;
    this.speed = 1;
    this.color = "#256088";
    this.branches = [];
    this.grow = true;
  }

  show(p5: p5Types) {
    if (this.grow) {
      p5.noStroke();
      p5.fill(this.color);
      p5.ellipse(this.x, this.y, this.r);
    }
  }

  update(p5: p5Types) {
    if (this.grow) {
      this.y -= this.speed;
      this.x = (this.x + p5.random(-2, 2)) * this.speed;
    }

    if (this.y - this.r < p5.height / 2) {
      this.speed = 0;
      this.grow = false;
    }

    if (p5.frameCount % 35 == 0 && p5.random() > 0.3 && this.grow) {
      this.branches.push(new Branch(this.x, this.y, p5));
      this.color = colors[p5.int(p5.random(colors.length))];
      this.r += 2.5;
    }

    if (this.branches.length > 0) {
      for (let f = 0; f <= this.branches.length - 1; f++) {
        this.branches[f].show(p5);
        this.branches[f].update(p5);
      }
    }
  }
}

class Branch {
  x: number;
  y: number;
  r: number;
  speed: number;
  grow: boolean;
  growTop: number;
  color: string;
  flowers: Flower[];

  constructor(x: number, y: number, p5: p5Types) {
    this.x = x;
    this.y = y;
    this.r = 5;
    this.speed = 0.5;
    this.grow = true;
    this.growTop = p5.random(p5.height / 2, p5.height / 8);
    this.color = colors[p5.int(p5.random(colors.length))];
    this.flowers = [];
  }

  show(p5: p5Types) {
    if (this.grow) {
      p5.noStroke();
      p5.fill(this.color);
      p5.ellipse(this.x, this.y, this.r);
    }
  }

  update(p5: p5Types) {
    if (this.r < 10) {
      this.r += 0.1;
    }

    if (this.grow) {
      this.x += this.speed * p5.random(-6.5, 6.5);
      this.y -= this.speed;
    }

    if (
      p5.frameCount % 60 == 0 &&
      p5.random() > 0.7 &&
      this.y < p5.height / 2 + p5.height / 4 &&
      this.grow
    ) {
      this.flowers.push(new Flower(this.x, this.y, this.r, p5));
    }

    for (let f = 0; f <= this.flowers.length - 1; f++) {
      this.flowers[f].show(p5);
    }

    if (this.y < this.growTop) {
      this.grow = false;
      for (let f = 0; f <= this.flowers.length - 1; f++) {
        this.flowers[f].draw = false;
      }
    }
  }
}

class Flower {
  x: number;
  y: number;
  r: number;
  color: string;
  p5: any;
  draw: boolean;

  constructor(x: number, y: number, r: number, p5: p5Types) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "#e4ab46";
    this.draw = true;
  }

  show(p5: p5Types) {
    if (this.draw) {
      p5.noStroke();
      p5.fill(this.color);
      p5.ellipse(this.x, this.y, this.r);
    }
  }
}
