const width = 640;
const height = 480;
const padding = 30;
let t = 0;

// const getValue = (i, min, max) => random(min, max);
const getValue = (d1, d2, min, max) => min + noise(d1 / 250, d2 / 250) * max;

const chartValues = () => {
  stroke(150);
  for (let x = padding; x < width - padding; x++) {
    point(x, getValue(x, t, padding, height - padding));
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
