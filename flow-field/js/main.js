const gridSize = 20;
let t = 0;
const angles = [];

// const getValue = (min, max) => random(min, max);
const getValue = (min, max, d1, d2 = 0, d3 = 0) => map(noise(d1 / 15, d2 / 15, d3 / 100), 0, 1, min, max);

const calculateAngles = () => {
  for (let y = 0; y <= height / gridSize; y++) {
    angles[y] = [];
    for (let x = 0; x <= width / gridSize; x++) {
      angles[y][x] = getValue(0, TWO_PI, x, y, t);
    }
  }
};

const drawField = () => {
  stroke(150);
  strokeWeight(2);
  for (let y = 0; y < angles.length; y++) {
    for (let x = 0; x < angles[y].length; x++) {
      const x1 = x * gridSize;
      const y1 = y * gridSize;
      const x2 = x1 + (gridSize / 2) * cos(angles[y][x]);
      const y2 = y1 + (gridSize / 2) * sin(angles[y][x]);
      line(x1, y1, x2, y2);
    }
  }
};

setup = function setup() {
  createCanvas(300, 300);
};

draw = function draw() {
  background(0);
  calculateAngles();
  drawField();
  t++;
};
