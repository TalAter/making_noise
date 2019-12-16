const width = 640;
const height = 480;
let t = 0;

// const getValue = (i, min, max) => random(min, max);
const getValue = (i, min, max) => min + noise(i / 500, t / 500) * max;

const chartValues = () => {
  stroke(150);
  const points = [];
  for (let i = 20; i < width - 20; i++) {
    points.push(createVector(i, getValue(i, 20, height - 20)));
  }
  for (let i = 1; i < points.length; i++) {
    line(points[i - 1].x, points[i - 1].y, points[i].x, points[i].y);
  }
};

setup = function setup() {
  createCanvas(width, height);
};

draw = function draw() {
  background(0);
  chartValues();
  t++;
};
