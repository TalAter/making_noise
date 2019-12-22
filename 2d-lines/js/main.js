let t = 0;

// const getValue = (min, max) => random(min, max);
const getValue = (min, max, d1, d2 = 0, d3 = 0) => map(noise(d1 / 250, d2 / 250, d3 / 120), 0, 1, min, max);

setup = function setup() {
  createCanvas(900, 900);
};

draw = function draw() {
  background(0);
  for (let x = 0; x < width; x++) {
    stroke(getValue(0, 255, x), getValue(0, 255, 0, x), getValue(0, 255, 0, 0, x));
    line(x, 0, getValue(x - 50, x + 50, x, t, 0), height);
  }
  t += 1;
};
