const width = 300;
const height = 300;
const padding = 30;
let z = 0;

// const getValue = (i, min, max) => random(min, max);
const getValue = (d1, d2, d3, min, max) => map(noise(d1 / 275, d2 / 275, d3 / 120), 0, 1, min, max);

const chartValues = () => {
  for (let x = padding; x < width - padding; x++) {
    for (let y = padding; y < height - padding; y++) {
      set(x, y, color(getValue(x, y, z, 0, 255)));
    }
  }
  updatePixels();
};

const drawFPS = () => {
  fill(255);
  stroke(0);
  text(`${int(getFrameRate())} FPS`, padding, height - 15);
};

setup = function setup() {
  createCanvas(width, height);
};

draw = function draw() {
  background(0);
  chartValues();
  drawFPS();
  z++;
};
