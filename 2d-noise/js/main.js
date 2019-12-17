let t = 0;

// const getValue = (min, max) => random(min, max);
const getValue = (min, max, d1, d2, d3) => map(noise(d1 / 250, d2 / 250, d3 / 120), 0, 1, min, max);

const chartValues = () => {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      set(x, y, color(getValue(0, 255, x, y, t)));
    }
  }
  updatePixels();
};

const drawFPS = () => {
  fill(255);
  stroke(0);
};

setup = function setup() {
  createCanvas(300, 300);
};

draw = function draw() {
  background(0);
  chartValues();
  drawFPS();
  t++;
};
