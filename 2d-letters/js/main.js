let t = 0;
const gridSize = 20;

// const getValue = (min, max) => random(min, max);
const getValue = (min, max, d1, d2 = 0, d3 = 0) => map(noise(d1 / 250, d2 / 250, d3 / 120), 0, 1, min, max);

setup = function setup() {
  createCanvas(900, 900);
};

draw = function draw() {
  background(0);
  textSize(20);
  for (let y = 0; y <= height; y += gridSize) {
    for (let x = 0; x <= width; x += gridSize) {
      fill(0, getValue(80, 255, x), 0);
      text(char(getValue(0x3040, 0x309f, x / 10, y / 10)), x, y);
    }
  }
};
