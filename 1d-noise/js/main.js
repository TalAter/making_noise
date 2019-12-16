const width = 640;
const height = 480;
const padding = 30;
let t = 0;

// const getValue = (min, max) => random(min, max);
const getValue = (min, max, d1, d2) => min + noise(d1 / 250, d2 / 250) * max;

const chartValues = () => {
  stroke(150);
  for (let x = padding; x < width - padding; x++) {
    point(x, getValue(padding, height - padding, x, t));
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
