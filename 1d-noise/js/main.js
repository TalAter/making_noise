let t = 0;

// const getValue = (min, max) => random(min, max);
const getValue = (min, max, d1, d2 = 0, d3 = 0) => map(noise(d1 / 250, d2 / 250, d3 / 120), 0, 1, min, max);

const chartValues = () => {
  stroke(150);
  for (let x = 0; x < width; x++) {
    point(x, getValue(0, height, x, t));
    // stroke(getValue(0, 255, x, t));
    // line(x, 0, x, height);
  }
};

setup = function setup() {
  createCanvas(300, 300);
};

draw = function draw() {
  background(0);
  chartValues();
  t++;
};
